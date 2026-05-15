const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { URL } = require("url");

const HOST = "0.0.0.0";
const PORT = Number(process.env.PORT || 8080);
const ROOT = __dirname;
const rooms = new Map();

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function createBoard(size) {
  return Array.from({ length: size }, () => Array(size).fill(0));
}

function countDirection(board, size, row, col, dr, dc, player) {
  let steps = 0;
  let r = row + dr;
  let c = col + dc;
  while (r >= 0 && r < size && c >= 0 && c < size && board[r][c] === player) {
    steps += 1;
    r += dr;
    c += dc;
  }
  return steps;
}

function checkWinner(board, size, row, col, player) {
  return [
    [1, 0],
    [0, 1],
    [1, 1],
    [1, -1]
  ].some(([dr, dc]) => {
    const total =
      1 +
      countDirection(board, size, row, col, dr, dc, player) +
      countDirection(board, size, row, col, -dr, -dc, player);
    return total >= 5;
  });
}

function isBoardFull(board) {
  return board.every((row) => row.every((cell) => cell !== 0));
}

function makeRoomCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i += 1) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return rooms.has(code) ? makeRoomCode() : code;
}

function newPlayerId() {
  return crypto.randomBytes(12).toString("hex");
}

function serializeRoom(room) {
  return {
    roomCode: room.roomCode,
    boardSize: room.boardSize,
    board: room.board,
    currentPlayer: room.currentPlayer,
    moveHistory: room.moveHistory,
    winner: room.winner,
    gameOver: room.gameOver,
    lastMove: room.lastMove,
    version: room.version,
    players: {
      black: Boolean(room.players.black),
      white: Boolean(room.players.white)
    }
  };
}

function createRoom(boardSize) {
  const roomCode = makeRoomCode();
  const playerId = newPlayerId();
  const room = {
    roomCode,
    boardSize,
    board: createBoard(boardSize),
    currentPlayer: 1,
    moveHistory: [],
    winner: null,
    gameOver: false,
    lastMove: null,
    version: 1,
    updatedAt: Date.now(),
    players: {
      black: playerId,
      white: null
    }
  };
  rooms.set(roomCode, room);
  return { room, playerId, role: "black" };
}

function resetRoom(room) {
  room.board = createBoard(room.boardSize);
  room.currentPlayer = 1;
  room.moveHistory = [];
  room.winner = null;
  room.gameOver = false;
  room.lastMove = null;
  room.version += 1;
  room.updatedAt = Date.now();
}

function playerRole(room, playerId) {
  if (room.players.black === playerId) {
    return "black";
  }
  if (room.players.white === playerId) {
    return "white";
  }
  return "";
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, statusCode, payload) {
  const data = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(data),
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(data);
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME_TYPES[ext] || "application/octet-stream";
  fs.readFile(filePath, (error, buffer) => {
    if (error) {
      sendJson(res, 404, { ok: false, error: "File not found" });
      return;
    }
    res.writeHead(200, {
      "Content-Type": type,
      "Content-Length": buffer.length
    });
    res.end(buffer);
  });
}

async function handleApi(req, res, url) {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    });
    res.end();
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/lan/create") {
    const body = await readJsonBody(req);
    const boardSize = [11, 13, 15].includes(Number(body.boardSize)) ? Number(body.boardSize) : 15;
    const created = createRoom(boardSize);
    sendJson(res, 200, {
      ok: true,
      roomCode: created.room.roomCode,
      playerId: created.playerId,
      role: created.role,
      room: serializeRoom(created.room)
    });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/lan/join") {
    const body = await readJsonBody(req);
    const roomCode = String(body.roomCode || "").trim().toUpperCase();
    const room = rooms.get(roomCode);
    if (!room) {
      sendJson(res, 404, { ok: false, error: "Room not found" });
      return;
    }
    if (room.players.white) {
      sendJson(res, 409, { ok: false, error: "Room is full" });
      return;
    }
    const playerId = newPlayerId();
    room.players.white = playerId;
    room.version += 1;
    room.updatedAt = Date.now();
    sendJson(res, 200, {
      ok: true,
      roomCode,
      playerId,
      role: "white",
      room: serializeRoom(room)
    });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/lan/state") {
    const roomCode = String(url.searchParams.get("room") || "").trim().toUpperCase();
    const room = rooms.get(roomCode);
    if (!room) {
      sendJson(res, 404, { ok: false, error: "Room not found" });
      return;
    }
    sendJson(res, 200, { ok: true, room: serializeRoom(room) });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/lan/move") {
    const body = await readJsonBody(req);
    const room = rooms.get(String(body.roomCode || "").trim().toUpperCase());
    if (!room) {
      sendJson(res, 404, { ok: false, error: "Room not found" });
      return;
    }

    const role = playerRole(room, body.playerId);
    if (!role) {
      sendJson(res, 403, { ok: false, error: "Invalid player" });
      return;
    }

    const player = role === "black" ? 1 : 2;
    const row = Number(body.row);
    const col = Number(body.col);
    if (
      room.gameOver ||
      player !== room.currentPlayer ||
      !Number.isInteger(row) ||
      !Number.isInteger(col) ||
      row < 0 ||
      row >= room.boardSize ||
      col < 0 ||
      col >= room.boardSize ||
      room.board[row][col] !== 0
    ) {
      sendJson(res, 409, { ok: false, error: "Illegal move" });
      return;
    }

    room.board[row][col] = player;
    room.moveHistory.push({ row, col, player });
    room.lastMove = { row, col };

    if (checkWinner(room.board, room.boardSize, row, col, player)) {
      room.gameOver = true;
      room.winner = player;
    } else if (isBoardFull(room.board)) {
      room.gameOver = true;
      room.winner = null;
    } else {
      room.currentPlayer = player === 1 ? 2 : 1;
    }

    room.version += 1;
    room.updatedAt = Date.now();
    sendJson(res, 200, { ok: true, room: serializeRoom(room) });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/lan/reset") {
    const body = await readJsonBody(req);
    const room = rooms.get(String(body.roomCode || "").trim().toUpperCase());
    if (!room) {
      sendJson(res, 404, { ok: false, error: "Room not found" });
      return;
    }
    if (!playerRole(room, body.playerId)) {
      sendJson(res, 403, { ok: false, error: "Invalid player" });
      return;
    }
    resetRoom(room);
    sendJson(res, 200, { ok: true, room: serializeRoom(room) });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/lan/leave") {
    const body = await readJsonBody(req);
    const room = rooms.get(String(body.roomCode || "").trim().toUpperCase());
    if (!room) {
      sendJson(res, 200, { ok: true });
      return;
    }
    if (room.players.black === body.playerId) {
      room.players.black = null;
    }
    if (room.players.white === body.playerId) {
      room.players.white = null;
    }
    room.version += 1;
    room.updatedAt = Date.now();
    if (!room.players.black && !room.players.white) {
      rooms.delete(room.roomCode);
    }
    sendJson(res, 200, { ok: true });
    return;
  }

  sendJson(res, 404, { ok: false, error: "Not found" });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  try {
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url);
      return;
    }

    let filePath = path.join(ROOT, url.pathname === "/" ? "index.html" : url.pathname.slice(1));
    if (!filePath.startsWith(ROOT)) {
      sendJson(res, 403, { ok: false, error: "Forbidden" });
      return;
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    sendFile(res, filePath);
  } catch (error) {
    sendJson(res, 500, { ok: false, error: error.message || "Server error" });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Gomoku LAN server running at http://localhost:${PORT}`);
  console.log("Open that address on this PC, or use your LAN IP on another device.");
});
