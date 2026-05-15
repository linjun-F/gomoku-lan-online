const STORAGE_KEY = "gomoku-config";
const EMPTY = 0;
const BLACK = 1;
const WHITE = 2;
const DEFAULT_LANGUAGE = "zh-CN";
const LAN_POLL_MS = 1200;

const translations = {
  "zh-CN": {
    pageTitle: "\u4e94\u5b50\u68cb\u7ade\u6280\u573a",
    eyebrow: "Gomoku Arena",
    heroTitle: "\u6d4f\u89c8\u5668\u4e94\u5b50\u68cb\u5c0f\u6e38\u620f",
    intro:
      "\u652f\u6301\u672c\u5730 AI\u3001\u53cc\u4eba\u5bf9\u6218\uff0c\u5916\u90e8 AI \u4ee5\u53ca\u5c40\u57df\u7f51\u8054\u673a\u3002",
    language: "\u8bed\u8a00",
    gameMode: "\u6e38\u620f\u6a21\u5f0f",
    boardSize: "\u68cb\u76d8\u5927\u5c0f",
    localAiStyle: "\u672c\u5730 AI \u98ce\u683c",
    turn: "\u56de\u5408",
    mode: "\u6a21\u5f0f",
    status: "\u72b6\u6001",
    blackFirst: "\u9ed1\u5b50\u5148\u624b",
    whiteSecond: "\u767d\u5b50\u540e\u624b",
    settings: "\u8bbe\u7f6e",
    room: "\u623f\u95f4",
    configTitle: "\u8bbe\u7f6e",
    languageSectionTitle: "\u8bed\u8a00",
    networkSectionTitle: "\u8054\u673a\u670d\u52a1",
    serverTipText:
      "\u8de8\u7f51\u7edc\u8054\u673a\u65f6\uff0c\u53ef\u586b\u516c\u7f51\u623f\u95f4\u670d\u52a1\u5730\u5740\uff1b\u5c40\u57df\u7f51\u6e38\u73a9\u65f6\u4fdd\u6301\u672c\u5730\u9ed8\u8ba4\u503c\u5373\u53ef\u3002",
    serverBaseLabelText: "\u623f\u95f4\u670d\u52a1\u5730\u5740",
    apiSectionTitle: "\u5916\u90e8 AI \u63a5\u53e3",
    configTip:
      "\u8fd9\u91cc\u53ef\u4ee5\u63a5\u5165\u517c\u5bb9 OpenAI \u804a\u5929\u8865\u5168\u683c\u5f0f\u7684\u63a5\u53e3\uff0c\u5305\u62ec\u8c46\u5305\u517c\u5bb9\u7f51\u5173\u6216\u5176\u4ed6\u514d\u8d39\u670d\u52a1\u3002",
    endpointUrl: "\u63a5\u53e3\u5730\u5740",
    modelName: "\u6a21\u578b\u540d\u79f0",
    apiKey: "API Key",
    save: "\u4fdd\u5b58",
    close: "\u5173\u95ed",
    restart: "\u91cd\u65b0\u5f00\u59cb",
    undo: "\u6094\u68cb",
    modeLocalAi: "\u73a9\u5bb6 vs \u672c\u5730 AI",
    modeHuman: "\u53cc\u4eba\u5bf9\u6218",
    modeApiAi: "\u73a9\u5bb6 vs \u5916\u90e8 AI",
    modeLan: "\u5c40\u57df\u7f51\u8054\u673a",
    aiBalanced: "\u5747\u8861",
    aiAggressive: "\u8fdb\u653b",
    aiDefensive: "\u9632\u5b88",
    playerBlack: "\u9ed1\u5b50",
    playerWhite: "\u767d\u5b50",
    clickToStart: "\u70b9\u51fb\u68cb\u76d8\u5f00\u59cb",
    playerToMove: "{player}\u843d\u5b50",
    playerWins: "{player}\u83b7\u80dc",
    draw: "\u5e73\u5c40",
    moveUndone: "\u5df2\u6094\u68cb",
    localAiThinking: "\u672c\u5730 AI \u601d\u8003\u4e2d...",
    apiAiThinking: "\u5916\u90e8 AI \u601d\u8003\u4e2d...",
    apiConfigSaved: "API \u8bbe\u7f6e\u5df2\u4fdd\u5b58",
    localAiStyleUpdated: "\u672c\u5730 AI \u98ce\u683c\u5df2\u66f4\u65b0",
    languageUpdated: "\u8bed\u8a00\u5df2\u5207\u6362",
    aiError: "AI \u51fa\u9519\uff1a{message}",
    resultTitleWin: "\u5bf9\u5c40\u7ed3\u675f",
    resultTitleLose: "\u5bf9\u5c40\u7ed3\u675f",
    resultTitleDraw: "\u5bf9\u5c40\u7ed3\u675f",
    resultWin: "\u4f60\u8d62\u4e86",
    resultLose: "\u4f60\u8f93\u4e86",
    resultBlackWins: "\u9ed1\u5b50\u83b7\u80dc",
    resultWhiteWins: "\u767d\u5b50\u83b7\u80dc",
    resultDraw: "\u8fd9\u5c40\u6253\u5e73\u4e86",
    playAgain: "\u518d\u6765\u4e00\u5c40",
    lanRoomCode: "\u623f\u95f4\u53f7",
    lanRoomCodeCaption: "\u5f53\u524d\u623f\u95f4",
    lanCreateRoom: "\u521b\u5efa\u623f\u95f4",
    lanJoinRoom: "\u52a0\u5165\u623f\u95f4",
    lanLeaveRoom: "\u9000\u51fa\u623f\u95f4",
    copyRoomCode: "\u590d\u5236\u623f\u95f4\u7801",
    lanHelp:
      "\u521b\u5efa\u65b9\u62ff\u5230\u623f\u95f4\u7801\u540e\uff0c\u53e6\u4e00\u53f0\u8bbe\u5907\u53ea\u9700\u8f93\u5165\u623f\u95f4\u7801\u5373\u53ef\u3002\u5982\u679c\u662f\u8de8\u7f51\u7edc\u5bf9\u6218\uff0c\u8bf7\u5148\u5728\u8bbe\u7f6e\u91cc\u586b\u5165\u540c\u4e00\u4e2a\u516c\u7f51\u623f\u95f4\u670d\u52a1\u5730\u5740\u3002",
    lanRoomMeta: "\u623f\u95f4\uff1a{room}",
    lanRoleMeta: "\u8eab\u4efd\uff1a{role}",
    lanRoleBlack: "\u623f\u4e3b\uff08\u9ed1\u5b50\uff09",
    lanRoleWhite: "\u52a0\u5165\u8005\uff08\u767d\u5b50\uff09",
    lanRoleUnknown: "\u672a\u8fde\u63a5",
    lanPrompt: "\u8bf7\u521b\u5efa\u6216\u52a0\u5165\u623f\u95f4",
    lanWaiting: "\u7b49\u5f85\u53e6\u4e00\u540d\u73a9\u5bb6\u52a0\u5165...",
    lanOpponentTurn: "\u5bf9\u624b\u6b63\u5728\u601d\u8003",
    lanYourTurn: "\u8f6e\u5230\u4f60\u4e86",
    lanSyncing: "\u6b63\u5728\u540c\u6b65\u5bf9\u5c40...",
    lanNeedServer:
      "\u5c40\u57df\u7f51\u6a21\u5f0f\u9700\u8981\u901a\u8fc7 Node \u670d\u52a1\u542f\u52a8\u9875\u9762",
    lanRoomCreated: "\u623f\u95f4\u5df2\u521b\u5efa\uff1a{room}",
    lanRoomJoined: "\u5df2\u52a0\u5165\u623f\u95f4\uff1a{room}",
    lanLeftRoom: "\u5df2\u9000\u51fa\u623f\u95f4",
    lanRestarted: "\u5df2\u91cd\u5f00\u8054\u673a\u5bf9\u5c40",
    lanEnterRoomCode: "\u8bf7\u8f93\u5165\u623f\u95f4\u53f7",
    lanCopied: "\u623f\u95f4\u7801\u5df2\u590d\u5236",
    lanCannotUndo: "\u5c40\u57df\u7f51\u6a21\u5f0f\u4e0d\u652f\u6301\u6094\u68cb",
    lanServerError: "\u8054\u673a\u670d\u52a1\u51fa\u9519\uff1a{message}",
    lanServerOffline:
      "\u65e0\u6cd5\u8fde\u63a5\u623f\u95f4\u670d\u52a1\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5730\u5740\u6216\u5148\u8fd0\u884c node server.js",
    lanStatusUnavailable: "\u670d\u52a1\u672a\u8fde\u901a",
    lanConnecting: "\u6b63\u5728\u8fde\u63a5\u670d\u52a1\u5668...",
    closeAria: "\u5173\u95ed",
    errorInvalidMove: "AI \u8fd4\u56de\u4e86\u65e0\u6548\u843d\u70b9",
    errorRequestFailed: "\u8bf7\u6c42\u5931\u8d25\uff0c\u72b6\u6001\u7801 {status}",
    errorNoContent: "\u63a5\u53e3\u6ca1\u6709\u8fd4\u56de\u5185\u5bb9",
    errorInvalidJson: "\u63a5\u53e3\u8fd4\u56de\u7684\u4e0d\u662f\u6709\u6548 JSON",
    errorMoveOutOfRange: "\u63a5\u53e3\u8fd4\u56de\u5750\u6807\u8d8a\u754c"
  },
  en: {
    pageTitle: "Gomoku Arena",
    eyebrow: "Gomoku Arena",
    heroTitle: "Play Gomoku In Your Browser",
    intro:
      "Includes local AI, two-player mode, external AI, and LAN multiplayer.",
    language: "Language",
    gameMode: "Game Mode",
    boardSize: "Board Size",
    localAiStyle: "Local AI Style",
    turn: "Turn",
    mode: "Mode",
    status: "Status",
    blackFirst: "Black moves first",
    whiteSecond: "White moves second",
    settings: "Settings",
    room: "Room",
    configTitle: "Settings",
    languageSectionTitle: "Language",
    networkSectionTitle: "Room Server",
    serverTipText:
      "Use a public room server address for cross-network play, or keep the local default for LAN play.",
    serverBaseLabelText: "Room Server URL",
    apiSectionTitle: "External AI API",
    configTip:
      "Use any OpenAI-compatible chat completion endpoint here, including Doubao-compatible gateways or other free providers.",
    endpointUrl: "Endpoint URL",
    modelName: "Model Name",
    apiKey: "API Key",
    save: "Save",
    close: "Close",
    restart: "Restart",
    undo: "Undo",
    modeLocalAi: "Player vs Local AI",
    modeHuman: "Two Players",
    modeApiAi: "Player vs API AI",
    modeLan: "LAN Multiplayer",
    aiBalanced: "Balanced",
    aiAggressive: "Aggressive",
    aiDefensive: "Defensive",
    playerBlack: "Black",
    playerWhite: "White",
    clickToStart: "Click the board to start",
    playerToMove: "{player} to move",
    playerWins: "{player} wins",
    draw: "Draw",
    moveUndone: "Move undone",
    localAiThinking: "Local AI is thinking...",
    apiAiThinking: "API AI is thinking...",
    apiConfigSaved: "API config saved",
    localAiStyleUpdated: "Local AI style updated",
    languageUpdated: "Language updated",
    aiError: "AI error: {message}",
    resultTitleWin: "Game Over",
    resultTitleLose: "Game Over",
    resultTitleDraw: "Game Over",
    resultWin: "You win",
    resultLose: "You lose",
    resultBlackWins: "Black wins",
    resultWhiteWins: "White wins",
    resultDraw: "It is a draw",
    playAgain: "Play Again",
    lanRoomCode: "Room Code",
    lanRoomCodeCaption: "Current Room",
    lanCreateRoom: "Create Room",
    lanJoinRoom: "Join Room",
    lanLeaveRoom: "Leave Room",
    copyRoomCode: "Copy Code",
    lanHelp:
      "The host gets a room code after creating a room. The other device only needs that code. For cross-network play, enter the same public room server URL in Settings on both devices.",
    lanRoomMeta: "Room: {room}",
    lanRoleMeta: "Role: {role}",
    lanRoleBlack: "Host (Black)",
    lanRoleWhite: "Guest (White)",
    lanRoleUnknown: "Not connected",
    lanPrompt: "Create or join a room",
    lanWaiting: "Waiting for another player to join...",
    lanOpponentTurn: "Waiting for your opponent...",
    lanYourTurn: "It is your turn",
    lanSyncing: "Syncing LAN match...",
    lanNeedServer: "LAN mode requires opening the page through the Node server",
    lanRoomCreated: "Room created: {room}",
    lanRoomJoined: "Joined room: {room}",
    lanLeftRoom: "Left room",
    lanRestarted: "LAN match restarted",
    lanEnterRoomCode: "Enter a room code first",
    lanCopied: "Room code copied",
    lanCannotUndo: "Undo is not available in LAN mode",
    lanServerError: "LAN server error: {message}",
    lanServerOffline: "Cannot reach the room server. Check the server URL or run node server.js first.",
    lanStatusUnavailable: "Server unavailable",
    lanConnecting: "Connecting to server...",
    closeAria: "Close",
    errorInvalidMove: "AI returned an invalid move",
    errorRequestFailed: "Request failed with status {status}",
    errorNoContent: "No content returned from API",
    errorInvalidJson: "API response was not valid JSON",
    errorMoveOutOfRange: "API returned an out-of-range move"
  }
};

const state = {
  boardSize: 15,
  board: [],
  currentPlayer: BLACK,
  mode: "human-vs-ai",
  aiLevel: "balanced",
  language: DEFAULT_LANGUAGE,
  gameOver: false,
  moveHistory: [],
  winner: null,
  lastMove: null,
  thinking: false,
  status: {
    key: "clickToStart",
    params: {}
  },
  apiConfig: {
    base: "",
    model: "",
    key: ""
  },
  serverBase: "https://gomoku-lan-online.onrender.com",
  lan: {
    roomCode: "",
    playerId: "",
    role: "",
    connected: false,
    polling: 0,
    version: 0
  }
};

const ui = {
  board: document.getElementById("board"),
  eyebrowText: document.getElementById("eyebrowText"),
  heroTitle: document.getElementById("heroTitle"),
  introText: document.getElementById("introText"),
  modeSelect: document.getElementById("modeSelect"),
  modeLabelText: document.getElementById("modeLabelText"),
  sizeSelect: document.getElementById("sizeSelect"),
  sizeLabelText: document.getElementById("sizeLabelText"),
  aiLevel: document.getElementById("aiLevel"),
  aiLevelLabelText: document.getElementById("aiLevelLabelText"),
  restartBtn: document.getElementById("restartBtn"),
  undoBtn: document.getElementById("undoBtn"),
  roomBtn: document.getElementById("roomBtn"),
  settingsBtn: document.getElementById("settingsBtn"),
  turnLabelText: document.getElementById("turnLabelText"),
  modeStatusLabelText: document.getElementById("modeStatusLabelText"),
  statusLabelText: document.getElementById("statusLabelText"),
  turnText: document.getElementById("turnText"),
  modeText: document.getElementById("modeText"),
  statusText: document.getElementById("statusText"),
  legendBlackText: document.getElementById("legendBlackText"),
  legendWhiteText: document.getElementById("legendWhiteText"),
  settingsDialog: document.getElementById("settingsDialog"),
  configTitle: document.getElementById("configTitle"),
  closeConfigBtn: document.getElementById("closeConfigBtn"),
  languageSectionTitle: document.getElementById("languageSectionTitle"),
  languageLabel: document.getElementById("languageLabel"),
  languageSelect: document.getElementById("languageSelect"),
  networkSectionTitle: document.getElementById("networkSectionTitle"),
  serverTipText: document.getElementById("serverTipText"),
  serverBaseLabelText: document.getElementById("serverBaseLabelText"),
  serverBase: document.getElementById("serverBase"),
  apiSectionTitle: document.getElementById("apiSectionTitle"),
  configTipText: document.getElementById("configTipText"),
  saveConfigBtn: document.getElementById("saveConfigBtn"),
  apiBaseLabelText: document.getElementById("apiBaseLabelText"),
  apiModelLabelText: document.getElementById("apiModelLabelText"),
  apiKeyLabelText: document.getElementById("apiKeyLabelText"),
  apiBase: document.getElementById("apiBase"),
  apiModel: document.getElementById("apiModel"),
  apiKey: document.getElementById("apiKey"),
  resultDialog: document.getElementById("resultDialog"),
  resultTitle: document.getElementById("resultTitle"),
  resultMessage: document.getElementById("resultMessage"),
  closeResultBtn: document.getElementById("closeResultBtn"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  resultCloseBtn: document.getElementById("resultCloseBtn"),
  lanDialog: document.getElementById("lanDialog"),
  lanDialogTitle: document.getElementById("lanDialogTitle"),
  closeLanBtn: document.getElementById("closeLanBtn"),
  lanPanel: document.getElementById("lanPanel"),
  lanSetup: document.getElementById("lanSetup"),
  lanActive: document.getElementById("lanActive"),
  lanRoomLabel: document.getElementById("lanRoomLabel"),
  lanRoomInput: document.getElementById("lanRoomInput"),
  createRoomBtn: document.getElementById("createRoomBtn"),
  joinRoomBtn: document.getElementById("joinRoomBtn"),
  copyRoomBtn: document.getElementById("copyRoomBtn"),
  leaveRoomBtn: document.getElementById("leaveRoomBtn"),
  lanHelpText: document.getElementById("lanHelpText"),
  lanRoomCodeCaption: document.getElementById("lanRoomCodeCaption"),
  lanRoomCodeValue: document.getElementById("lanRoomCodeValue"),
  lanRoomText: document.getElementById("lanRoomText"),
  lanRoleText: document.getElementById("lanRoleText")
};

const ctx = ui.board.getContext("2d");

function t(key, params = {}) {
  const pack = translations[state.language] || translations.en;
  const fallback = translations.en[key] || key;
  const template = pack[key] || fallback;
  return template.replace(/\{(\w+)\}/g, (_, name) => params[name] ?? "");
}

function isLanMode() {
  return state.mode === "human-vs-lan";
}

function isApiMode() {
  return state.mode === "human-vs-api";
}

function isHumanVsHumanMode() {
  return state.mode === "human-vs-human";
}

function localLanPlayer() {
  return state.lan.role === "black" ? BLACK : state.lan.role === "white" ? WHITE : null;
}

function persistConfig() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      base: state.apiConfig.base,
      model: state.apiConfig.model,
      key: state.apiConfig.key,
      language: state.language,
      serverBase: state.serverBase
    })
  );
}

function getServerBase() {
  const fallback = window.location.origin;
  return state.serverBase || fallback;
}

function canUseRoomServer() {
  return Boolean(state.serverBase) || /^https?:$/i.test(window.location.protocol);
}

function setStatus(key, params = {}) {
  state.status = { key, params };
  renderStatus();
}

function renderStatus() {
  ui.turnText.textContent = playerName(state.currentPlayer);
  ui.modeText.textContent = modeLabel(state.mode);
  ui.statusText.textContent = t(state.status.key, state.status.params);
}

function renderLanPanel() {
  const visible = isLanMode();
  ui.roomBtn.hidden = !visible;
  ui.lanPanel.hidden = !visible;
  ui.lanSetup.hidden = state.lan.connected;
  ui.lanActive.hidden = !state.lan.connected;
  ui.roomBtn.textContent = t("room");
  ui.lanDialogTitle.textContent = t("room");
  ui.lanRoomLabel.textContent = t("lanRoomCode");
  ui.lanRoomInput.placeholder = t("lanRoomCode");
  ui.createRoomBtn.textContent = t("lanCreateRoom");
  ui.joinRoomBtn.textContent = t("lanJoinRoom");
  ui.copyRoomBtn.textContent = t("copyRoomCode");
  ui.leaveRoomBtn.textContent = t("lanLeaveRoom");
  ui.lanHelpText.textContent = t("lanHelp");
  ui.lanRoomCodeCaption.textContent = t("lanRoomCodeCaption");
  ui.lanRoomCodeValue.textContent = state.lan.roomCode || "------";
  ui.lanRoomText.textContent = t("lanRoomMeta", { room: state.lan.roomCode || "-" });
  ui.lanRoleText.textContent = t("lanRoleMeta", {
    role: state.lan.role ? lanRoleLabel(state.lan.role) : t("lanRoleUnknown")
  });
  ui.lanRoomInput.value = state.lan.roomCode;
}

function renderLanguage() {
  document.documentElement.lang = state.language;
  document.title = t("pageTitle");

  ui.eyebrowText.textContent = t("eyebrow");
  ui.heroTitle.textContent = t("heroTitle");
  ui.introText.textContent = t("intro");
  ui.modeLabelText.textContent = t("gameMode");
  ui.sizeLabelText.textContent = t("boardSize");
  ui.aiLevelLabelText.textContent = t("localAiStyle");
  ui.restartBtn.textContent = t("restart");
  ui.undoBtn.textContent = t("undo");
  ui.roomBtn.textContent = t("room");
  ui.settingsBtn.textContent = t("settings");
  ui.turnLabelText.textContent = t("turn");
  ui.modeStatusLabelText.textContent = t("mode");
  ui.statusLabelText.textContent = t("status");
  ui.legendBlackText.innerHTML = `<i class="stone black"></i> ${t("blackFirst")}`;
  ui.legendWhiteText.innerHTML = `<i class="stone white"></i> ${t("whiteSecond")}`;
  ui.configTitle.textContent = t("configTitle");
  ui.languageSectionTitle.textContent = t("languageSectionTitle");
  ui.languageLabel.textContent = t("language");
  ui.networkSectionTitle.textContent = t("networkSectionTitle");
  ui.serverTipText.textContent = t("serverTipText");
  ui.serverBaseLabelText.textContent = t("serverBaseLabelText");
  ui.apiSectionTitle.textContent = t("apiSectionTitle");
  ui.configTipText.textContent = t("configTip");
  ui.apiBaseLabelText.textContent = t("endpointUrl");
  ui.apiModelLabelText.textContent = t("modelName");
  ui.apiKeyLabelText.textContent = t("apiKey");
  ui.saveConfigBtn.textContent = t("save");
  ui.closeConfigBtn.textContent = "x";
  ui.closeConfigBtn.setAttribute("aria-label", t("closeAria"));
  ui.settingsDialog.querySelector('button[type="submit"]').textContent = t("close");
  ui.closeResultBtn.textContent = "x";
  ui.closeResultBtn.setAttribute("aria-label", t("closeAria"));
  ui.playAgainBtn.textContent = t("playAgain");
  ui.resultCloseBtn.textContent = t("close");
  ui.closeLanBtn.textContent = "x";
  ui.closeLanBtn.setAttribute("aria-label", t("closeAria"));

  ui.modeSelect.options[0].textContent = t("modeLocalAi");
  ui.modeSelect.options[1].textContent = t("modeHuman");
  ui.modeSelect.options[2].textContent = t("modeApiAi");
  ui.modeSelect.options[3].textContent = t("modeLan");
  ui.aiLevel.options[0].textContent = t("aiBalanced");
  ui.aiLevel.options[1].textContent = t("aiAggressive");
  ui.aiLevel.options[2].textContent = t("aiDefensive");
  ui.board.setAttribute("aria-label", t("pageTitle"));

  renderStatus();
  renderLanPanel();
  renderResultDialog();
}

function createBoard(size) {
  return Array.from({ length: size }, () => Array(size).fill(EMPTY));
}

function playerName(player) {
  return player === BLACK ? t("playerBlack") : t("playerWhite");
}

function modeLabel(mode) {
  switch (mode) {
    case "human-vs-human":
      return t("modeHuman");
    case "human-vs-api":
      return t("modeApiAi");
    case "human-vs-lan":
      return t("modeLan");
    default:
      return t("modeLocalAi");
  }
}

function getResultContent() {
  if (!state.gameOver) {
    return { title: t("resultTitleDraw"), message: "" };
  }

  if (state.winner === null) {
    return { title: t("resultTitleDraw"), message: t("resultDraw") };
  }

  if (isHumanVsHumanMode()) {
    return {
      title: t("resultTitleWin"),
      message: state.winner === BLACK ? t("resultBlackWins") : t("resultWhiteWins")
    };
  }

  if (isLanMode()) {
    const localPlayer = localLanPlayer();
    if (localPlayer && state.winner === localPlayer) {
      return { title: t("resultTitleWin"), message: t("resultWin") };
    }
    if (localPlayer) {
      return { title: t("resultTitleLose"), message: t("resultLose") };
    }
    return {
      title: t("resultTitleWin"),
      message: state.winner === BLACK ? t("resultBlackWins") : t("resultWhiteWins")
    };
  }

  return state.winner === BLACK
    ? { title: t("resultTitleWin"), message: t("resultWin") }
    : { title: t("resultTitleLose"), message: t("resultLose") };
}

function renderResultDialog() {
  const result = getResultContent();
  ui.resultTitle.textContent = result.title;
  ui.resultMessage.textContent = result.message;
}

function showResultDialog() {
  renderResultDialog();
  if (!ui.resultDialog.open) {
    ui.resultDialog.showModal();
  }
}

function closeResultDialog() {
  if (ui.resultDialog.open) {
    ui.resultDialog.close();
  }
}

function resetLocalGame(statusKey = "clickToStart") {
  state.board = createBoard(state.boardSize);
  state.currentPlayer = BLACK;
  state.gameOver = false;
  state.moveHistory = [];
  state.winner = null;
  state.lastMove = null;
  state.thinking = false;
  closeResultDialog();
  drawBoard();
  setStatus(statusKey);
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const rect = ui.board.getBoundingClientRect();
  const size = Math.floor(Math.min(rect.width, 720));

  ui.board.width = size * dpr;
  ui.board.height = size * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  drawBoard();
}

function getBoardMetrics() {
  const size = ui.board.getBoundingClientRect().width;
  const padding = size * 0.06;
  const gridSize = size - padding * 2;
  const cell = gridSize / (state.boardSize - 1);
  return { size, padding, cell };
}

function drawBoard() {
  const { size, padding, cell } = getBoardMetrics();
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = "#dcb378";
  ctx.fillRect(0, 0, size, size);

  ctx.strokeStyle = "rgba(89, 58, 24, 0.92)";
  ctx.lineWidth = 1;
  for (let i = 0; i < state.boardSize; i += 1) {
    const pos = padding + i * cell;
    ctx.beginPath();
    ctx.moveTo(padding, pos);
    ctx.lineTo(size - padding, pos);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(pos, padding);
    ctx.lineTo(pos, size - padding);
    ctx.stroke();
  }

  drawStarPoints(padding, cell);
  drawStones(padding, cell);
}

function drawStarPoints(padding, cell) {
  const marks = state.boardSize >= 15 ? [3, 7, 11] : state.boardSize >= 13 ? [3, 6, 9] : [3, 5, 7];
  ctx.fillStyle = "#5f3819";
  marks.forEach((x) => {
    marks.forEach((y) => {
      ctx.beginPath();
      ctx.arc(padding + x * cell, padding + y * cell, Math.max(3, cell * 0.09), 0, Math.PI * 2);
      ctx.fill();
    });
  });
}

function drawStones(padding, cell) {
  const radius = cell * 0.42;
  for (let row = 0; row < state.boardSize; row += 1) {
    for (let col = 0; col < state.boardSize; col += 1) {
      const value = state.board[row][col];
      if (value === EMPTY) {
        continue;
      }

      const x = padding + col * cell;
      const y = padding + row * cell;
      const gradient = ctx.createRadialGradient(
        x - radius * 0.35,
        y - radius * 0.35,
        radius * 0.2,
        x,
        y,
        radius
      );

      if (value === BLACK) {
        gradient.addColorStop(0, "#5a5752");
        gradient.addColorStop(1, "#171614");
      } else {
        gradient.addColorStop(0, "#ffffff");
        gradient.addColorStop(1, "#d9d6cd");
      }

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      if (state.lastMove && state.lastMove.row === row && state.lastMove.col === col) {
        ctx.strokeStyle = value === BLACK ? "#f5c76e" : "#b24f2a";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.44, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }
}

function boardToPixel(row, col) {
  const { padding, cell } = getBoardMetrics();
  return {
    x: padding + col * cell,
    y: padding + row * cell
  };
}

function pixelToBoard(clientX, clientY) {
  const rect = ui.board.getBoundingClientRect();
  const { padding, cell } = getBoardMetrics();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const col = Math.round((x - padding) / cell);
  const row = Math.round((y - padding) / cell);

  if (row < 0 || row >= state.boardSize || col < 0 || col >= state.boardSize) {
    return null;
  }

  const target = boardToPixel(row, col);
  if (Math.abs(x - target.x) > cell * 0.48 || Math.abs(y - target.y) > cell * 0.48) {
    return null;
  }

  return { row, col };
}

function countDirection(board, row, col, dr, dc, player) {
  let steps = 0;
  let r = row + dr;
  let c = col + dc;
  while (r >= 0 && r < state.boardSize && c >= 0 && c < state.boardSize && board[r][c] === player) {
    steps += 1;
    r += dr;
    c += dc;
  }
  return steps;
}

function countLine(board, row, col, dr, dc, player) {
  return 1 + countDirection(board, row, col, dr, dc, player) + countDirection(board, row, col, -dr, -dc, player);
}

function checkWinner(board, row, col, player) {
  return [
    [1, 0],
    [0, 1],
    [1, 1],
    [1, -1]
  ].some(([dr, dc]) => countLine(board, row, col, dr, dc, player) >= 5);
}

function isBoardFull(board = state.board) {
  return board.every((row) => row.every((cell) => cell !== EMPTY));
}

function placeStone(row, col, player) {
  if (state.board[row][col] !== EMPTY || state.gameOver) {
    return false;
  }

  state.board[row][col] = player;
  state.moveHistory.push({ row, col, player });
  state.lastMove = { row, col };

  if (checkWinner(state.board, row, col, player)) {
    state.gameOver = true;
    state.winner = player;
    drawBoard();
    setStatus("playerWins", { player: playerName(player) });
    showResultDialog();
    return true;
  }

  if (isBoardFull()) {
    state.gameOver = true;
    state.winner = null;
    drawBoard();
    setStatus("draw");
    showResultDialog();
    return true;
  }

  state.currentPlayer = player === BLACK ? WHITE : BLACK;
  drawBoard();
  setStatus("playerToMove", { player: playerName(state.currentPlayer) });
  return true;
}

function scanDirection(row, col, dr, dc, player) {
  let count = 0;
  let r = row + dr;
  let c = col + dc;

  while (r >= 0 && r < state.boardSize && c >= 0 && c < state.boardSize && state.board[r][c] === player) {
    count += 1;
    r += dr;
    c += dc;
  }

  const open =
    r >= 0 &&
    r < state.boardSize &&
    c >= 0 &&
    c < state.boardSize &&
    state.board[r][c] === EMPTY;

  return { count, open };
}

function evaluateDirection(row, col, dr, dc, player) {
  const forward = scanDirection(row, col, dr, dc, player);
  const backward = scanDirection(row, col, -dr, -dc, player);
  const total = forward.count + backward.count + 1;
  const openEnds = Number(forward.open) + Number(backward.open);

  if (total >= 5) return 100000;
  if (total === 4 && openEnds === 2) return 18000;
  if (total === 4 && openEnds === 1) return 6000;
  if (total === 3 && openEnds === 2) return 2800;
  if (total === 3 && openEnds === 1) return 700;
  if (total === 2 && openEnds === 2) return 240;
  if (total === 2 && openEnds === 1) return 90;
  return 15 + total * 4 + openEnds * 6;
}

function evaluatePoint(row, col, player) {
  const directions = [
    [1, 0],
    [0, 1],
    [1, 1],
    [1, -1]
  ];

  let total = 0;
  for (const [dr, dc] of directions) {
    total += evaluateDirection(row, col, dr, dc, player);
  }
  return total;
}

function collectCandidates() {
  const result = [];
  const seen = new Set();

  if (state.moveHistory.length === 0) {
    const mid = Math.floor(state.boardSize / 2);
    return [{ row: mid, col: mid }];
  }

  for (const move of state.moveHistory) {
    for (let dr = -2; dr <= 2; dr += 1) {
      for (let dc = -2; dc <= 2; dc += 1) {
        const row = move.row + dr;
        const col = move.col + dc;
        const key = `${row},${col}`;
        if (
          row >= 0 &&
          row < state.boardSize &&
          col >= 0 &&
          col < state.boardSize &&
          state.board[row][col] === EMPTY &&
          !seen.has(key)
        ) {
          seen.add(key);
          result.push({ row, col });
        }
      }
    }
  }

  return result;
}

function centerScore(row, col) {
  const mid = (state.boardSize - 1) / 2;
  const distance = Math.abs(row - mid) + Math.abs(col - mid);
  return Math.max(0, 12 - distance);
}

function scoreByLevel(attack, defense, centerBias) {
  switch (state.aiLevel) {
    case "aggressive":
      return attack * 1.18 + defense * 0.92 + centerBias;
    case "defensive":
      return attack * 0.94 + defense * 1.2 + centerBias;
    default:
      return attack * 1.08 + defense * 1.08 + centerBias;
  }
}

function getLocalAIMove() {
  const candidates = collectCandidates();
  if (!candidates.length) {
    const mid = Math.floor(state.boardSize / 2);
    return Promise.resolve({ row: mid, col: mid });
  }

  let bestMove = candidates[0];
  let bestScore = -Infinity;

  for (const candidate of candidates) {
    const attack = evaluatePoint(candidate.row, candidate.col, WHITE);
    const defense = evaluatePoint(candidate.row, candidate.col, BLACK);
    const score = scoreByLevel(attack, defense, centerScore(candidate.row, candidate.col));
    if (score > bestScore) {
      bestScore = score;
      bestMove = candidate;
    }
  }

  return Promise.resolve(bestMove);
}

async function getApiAIMove() {
  if (!state.apiConfig.base || !state.apiConfig.model || !state.apiConfig.key) {
    return getLocalAIMove();
  }

  const boardText = state.board
    .map((row) => row.map((cell) => (cell === EMPTY ? "." : cell === BLACK ? "B" : "W")).join(" "))
    .join("\n");

  const response = await fetch(state.apiConfig.base, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${state.apiConfig.key}`
    },
    body: JSON.stringify({
      model: state.apiConfig.model,
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content:
            "You are a Gomoku AI playing white. Reply with JSON only in the form {\"row\":number,\"col\":number}."
        },
        {
          role: "user",
          content:
            `Board size: ${state.boardSize}. It is white's turn.\n` +
            "Cells use . for empty, B for black, W for white.\n" +
            "Return one legal move as JSON only.\n" +
            boardText
        }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(t("errorRequestFailed", { status: response.status }));
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content?.trim();
  if (!content) {
    throw new Error(t("errorNoContent"));
  }

  let move;
  try {
    move = JSON.parse(content);
  } catch (error) {
    const match = content.match(/\{[\s\S]*\}/);
    if (!match) {
      throw new Error(t("errorInvalidJson"));
    }
    move = JSON.parse(match[0]);
  }

  const row = Number(move.row);
  const col = Number(move.col);
  if (
    !Number.isInteger(row) ||
    !Number.isInteger(col) ||
    row < 0 ||
    row >= state.boardSize ||
    col < 0 ||
    col >= state.boardSize
  ) {
    throw new Error(t("errorMoveOutOfRange"));
  }

  return { row, col };
}

function isAITurn() {
  if (state.gameOver || isHumanVsHumanMode() || isLanMode()) {
    return false;
  }
  return state.currentPlayer === WHITE;
}

function canPlayLanMove() {
  return (
    isLanMode() &&
    state.lan.connected &&
    !state.gameOver &&
    !state.thinking &&
    localLanPlayer() === state.currentPlayer &&
    (state.lan.role === "black" || state.lan.role === "white")
  );
}

async function maybeRunAITurn() {
  if (!isAITurn()) {
    return;
  }

  state.thinking = true;
  setStatus(isApiMode() ? "apiAiThinking" : "localAiThinking");
  const runner = isApiMode() ? getApiAIMove : getLocalAIMove;

  window.setTimeout(async () => {
    try {
      const move = await runner();
      if (!move || state.board[move.row]?.[move.col] !== EMPTY) {
        throw new Error(t("errorInvalidMove"));
      }
      state.thinking = false;
      placeStone(move.row, move.col, WHITE);
    } catch (error) {
      state.thinking = false;
      setStatus("aiError", { message: error.message });
    }
  }, 240);
}

function getRoomInputCode() {
  return ui.lanRoomInput.value.trim().toUpperCase();
}

function stopLanPolling() {
  if (state.lan.polling) {
    window.clearInterval(state.lan.polling);
    state.lan.polling = 0;
  }
}

function clearLanState() {
  stopLanPolling();
  state.lan.roomCode = "";
  state.lan.playerId = "";
  state.lan.role = "";
  state.lan.connected = false;
  state.lan.version = 0;
  if (ui.lanDialog.open) {
    ui.lanDialog.close();
  }
  renderLanPanel();
}

async function lanRequest(path, payload = null, method = "GET") {
  const base = getServerBase().replace(/\/$/, "");
  const options = { method, headers: {} };
  if (payload !== null) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(payload);
  }

  let response;
  try {
    response = await fetch(`${base}${path}`, options);
  } catch (error) {
    throw new Error(t("lanServerOffline"));
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok || data.ok === false) {
    throw new Error(data.error || t("lanStatusUnavailable"));
  }
  return data;
}

function lanRoleLabel(role) {
  if (role === "black") {
    return t("lanRoleBlack");
  }
  if (role === "white") {
    return t("lanRoleWhite");
  }
  return t("lanRoleUnknown");
}

function applyRoomSnapshot(snapshot, showResult = true) {
  const wasGameOver = state.gameOver;
  state.boardSize = snapshot.boardSize;
  state.board = snapshot.board.map((row) => [...row]);
  state.currentPlayer = snapshot.currentPlayer;
  state.gameOver = snapshot.gameOver;
  state.winner = snapshot.winner;
  state.lastMove = snapshot.lastMove;
  state.moveHistory = snapshot.moveHistory || [];
  state.lan.version = snapshot.version || 0;

  ui.sizeSelect.value = String(state.boardSize);
  drawBoard();

  if (state.gameOver) {
    if (state.winner === null) {
      setStatus("draw");
    } else {
      setStatus("playerWins", { player: playerName(state.winner) });
    }
    if (showResult) {
      showResultDialog();
    }
    return;
  }

  if (wasGameOver) {
    closeResultDialog();
  }

  if (!snapshot.players.white) {
    setStatus("lanWaiting");
    return;
  }

  if (localLanPlayer() === state.currentPlayer) {
    setStatus("lanYourTurn");
  } else {
    setStatus("lanOpponentTurn");
  }
}

async function fetchLanState(showResult = true) {
  if (!state.lan.roomCode) {
    return;
  }

  const previousVersion = state.lan.version;
  const previousGameOver = state.gameOver;
  const data = await lanRequest(`/api/lan/state?room=${encodeURIComponent(state.lan.roomCode)}`);
  const shouldShowResult =
    showResult || (!previousGameOver && data.room.gameOver) || previousVersion !== data.room.version;
  applyRoomSnapshot(data.room, shouldShowResult && data.room.gameOver);
  renderLanPanel();
}

function startLanPolling() {
  stopLanPolling();
  state.lan.polling = window.setInterval(() => {
    fetchLanState(false).catch((error) => {
      setStatus("lanServerError", { message: error.message });
    });
  }, LAN_POLL_MS);
}

async function createLanRoom() {
  if (!canUseRoomServer()) {
    setStatus("lanNeedServer");
    return;
  }

  setStatus("lanConnecting");

  try {
    const data = await lanRequest("/api/lan/create", { boardSize: state.boardSize }, "POST");
    state.lan.roomCode = data.roomCode;
    state.lan.playerId = data.playerId;
    state.lan.role = data.role;
    state.lan.connected = true;
    renderLanPanel();
    applyRoomSnapshot(data.room, false);
    startLanPolling();
    setStatus("lanRoomCreated", { room: data.roomCode });
  } catch (error) {
    setStatus("lanServerError", { message: error.message });
  }
}

async function joinLanRoom() {
  if (!canUseRoomServer()) {
    setStatus("lanNeedServer");
    return;
  }

  const roomCode = getRoomInputCode();
  if (!roomCode) {
    setStatus("lanEnterRoomCode");
    return;
  }

  setStatus("lanConnecting");

  try {
    const data = await lanRequest("/api/lan/join", { roomCode }, "POST");
    state.lan.roomCode = data.roomCode;
    state.lan.playerId = data.playerId;
    state.lan.role = data.role;
    state.lan.connected = true;
    renderLanPanel();
    applyRoomSnapshot(data.room, false);
    startLanPolling();
    setStatus("lanRoomJoined", { room: data.roomCode });
  } catch (error) {
    setStatus("lanServerError", { message: error.message });
  }
}

async function leaveLanRoom() {
  if (state.lan.roomCode && state.lan.playerId) {
    try {
      await lanRequest("/api/lan/leave", {
        roomCode: state.lan.roomCode,
        playerId: state.lan.playerId
      }, "POST");
    } catch (error) {
      // Best-effort leave.
    }
  }

  clearLanState();
  if (isLanMode()) {
    resetLocalGame("lanPrompt");
  }
  setStatus("lanLeftRoom");
}

async function copyRoomCode() {
  if (!state.lan.roomCode) {
    return;
  }

  try {
    await navigator.clipboard.writeText(state.lan.roomCode);
    setStatus("lanCopied");
  } catch (error) {
    setStatus("lanServerError", { message: error.message });
  }
}

async function sendLanMove(row, col) {
  if (!canPlayLanMove()) {
    return;
  }

  try {
    state.thinking = true;
    const data = await lanRequest("/api/lan/move", {
      roomCode: state.lan.roomCode,
      playerId: state.lan.playerId,
      row,
      col
    }, "POST");
    state.thinking = false;
    applyRoomSnapshot(data.room, true);
  } catch (error) {
    state.thinking = false;
    setStatus("lanServerError", { message: error.message });
  }
}

async function restartLanGame() {
  if (!state.lan.connected) {
    setStatus("lanPrompt");
    return;
  }

  try {
    const data = await lanRequest("/api/lan/reset", {
      roomCode: state.lan.roomCode,
      playerId: state.lan.playerId
    }, "POST");
    closeResultDialog();
    applyRoomSnapshot(data.room, false);
    setStatus("lanRestarted");
  } catch (error) {
    setStatus("lanServerError", { message: error.message });
  }
}

function handleBoardClick(event) {
  if (state.gameOver || state.thinking) {
    return;
  }

  const pos = pixelToBoard(event.clientX, event.clientY);
  if (!pos) {
    return;
  }

  if (isLanMode()) {
    sendLanMove(pos.row, pos.col);
    return;
  }

  if (isAITurn()) {
    return;
  }

  const placed = placeStone(pos.row, pos.col, state.currentPlayer);
  if (placed) {
    maybeRunAITurn();
  }
}

function undoMove() {
  if (isLanMode()) {
    setStatus("lanCannotUndo");
    return;
  }

  if (!state.moveHistory.length || state.thinking) {
    return;
  }

  const steps = isHumanVsHumanMode() ? 1 : Math.min(2, state.moveHistory.length);
  for (let i = 0; i < steps; i += 1) {
    const move = state.moveHistory.pop();
    state.board[move.row][move.col] = EMPTY;
  }

  state.gameOver = false;
  state.winner = null;
  state.lastMove = state.moveHistory[state.moveHistory.length - 1] || null;
  state.currentPlayer = isHumanVsHumanMode()
    ? state.moveHistory.length % 2 === 0
      ? BLACK
      : WHITE
    : BLACK;

  closeResultDialog();
  drawBoard();
  setStatus("moveUndone");
}

function requestRestart() {
  if (isLanMode()) {
    restartLanGame();
    return;
  }
  resetLocalGame();
}

function loadConfig() {
  const cached = localStorage.getItem(STORAGE_KEY);
  if (!cached) {
    return;
  }

  try {
    const parsed = JSON.parse(cached);
    state.apiConfig = {
      base: parsed.base || "",
      model: parsed.model || "",
      key: parsed.key || ""
    };
    state.language = parsed.language || DEFAULT_LANGUAGE;
    state.serverBase = parsed.serverBase || "";
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveConfig() {
  state.serverBase = ui.serverBase.value.trim();
  state.apiConfig = {
    base: ui.apiBase.value.trim(),
    model: ui.apiModel.value.trim(),
    key: ui.apiKey.value.trim()
  };
  persistConfig();
  ui.settingsDialog.close();
  setStatus("apiConfigSaved");
}

function syncConfigInputs() {
  ui.serverBase.value = state.serverBase;
  ui.apiBase.value = state.apiConfig.base;
  ui.apiModel.value = state.apiConfig.model;
  ui.apiKey.value = state.apiConfig.key;
}

function handleModeChange() {
  const previousMode = state.mode;
  state.mode = ui.modeSelect.value;

  if (previousMode === "human-vs-lan" && state.mode !== "human-vs-lan") {
    leaveLanRoom();
  }

  renderLanPanel();

  if (state.mode === "human-vs-lan") {
    resetLocalGame("lanPrompt");
    if (!ui.lanDialog.open) {
      ui.lanDialog.showModal();
    }
    return;
  }

  clearLanState();
  resetLocalGame();
}

function bindEvents() {
  ui.board.addEventListener("click", handleBoardClick);
  ui.restartBtn.addEventListener("click", requestRestart);
  ui.undoBtn.addEventListener("click", undoMove);
  ui.playAgainBtn.addEventListener("click", requestRestart);
  ui.roomBtn.addEventListener("click", () => {
    if (isLanMode() && !ui.lanDialog.open) {
      ui.lanDialog.showModal();
    }
  });
  ui.settingsBtn.addEventListener("click", () => {
    syncConfigInputs();
    ui.settingsDialog.showModal();
  });
  ui.saveConfigBtn.addEventListener("click", saveConfig);
  ui.languageSelect.addEventListener("change", () => {
    state.language = ui.languageSelect.value;
    persistConfig();
    renderLanguage();
    setStatus("languageUpdated");
  });
  ui.modeSelect.addEventListener("change", handleModeChange);
  ui.sizeSelect.addEventListener("change", () => {
    const nextSize = Number(ui.sizeSelect.value);
    if (isLanMode() && state.lan.connected) {
      ui.sizeSelect.value = String(state.boardSize);
      setStatus("lanSyncing");
      return;
    }
    state.boardSize = nextSize;
    resetLocalGame();
    resizeCanvas();
  });
  ui.aiLevel.addEventListener("change", () => {
    state.aiLevel = ui.aiLevel.value;
    setStatus("localAiStyleUpdated");
  });
  ui.createRoomBtn.addEventListener("click", createLanRoom);
  ui.joinRoomBtn.addEventListener("click", joinLanRoom);
  ui.copyRoomBtn.addEventListener("click", copyRoomCode);
  ui.leaveRoomBtn.addEventListener("click", leaveLanRoom);
  ui.lanRoomInput.addEventListener("input", () => {
    ui.lanRoomInput.value = ui.lanRoomInput.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  });
  ui.lanRoomInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      joinLanRoom();
    }
  });
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("beforeunload", () => {
    if (state.lan.roomCode && state.lan.playerId) {
      navigator.sendBeacon(
        "/api/lan/leave",
        JSON.stringify({ roomCode: state.lan.roomCode, playerId: state.lan.playerId })
      );
    }
  });
}

function init() {
  loadConfig();
  ui.languageSelect.value = state.language;
  ui.modeSelect.value = state.mode;
  ui.sizeSelect.value = String(state.boardSize);
  ui.aiLevel.value = state.aiLevel;
  syncConfigInputs();
  renderLanguage();
  bindEvents();
  resetLocalGame();
  resizeCanvas();
}

init();
