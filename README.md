# Gomoku Arena

A browser Gomoku game with:

- Local heuristic AI
- Two-player mode on one device
- External AI mode with OpenAI-compatible APIs
- LAN multiplayer with room creation and joining
- Cross-network room server support

## Quick Start

If you only want local play, open [index.html](/C:/Users/linjunF/Desktop/gomoku-lan-online/index.html) directly in your browser.

If you want LAN multiplayer, start the Node server:

```powershell
node server.js
```

Or just double-click:

- [start.bat](/C:/Users/linjunF/Desktop/gomoku-lan-online/start.bat)

That will start the local server and open the browser automatically.

Then open:

- On this PC: `http://localhost:8080`
- On another device in the same LAN: `http://YOUR_PC_IP:8080`

On this machine, your current likely Wi-Fi IPv4 is `10.10.15.9`, so another device on the same network would typically open:

```text
http://10.10.15.9:8080
```

If that address changes later, run `ipconfig` again and look for the `WLAN` IPv4 address.

## LAN Multiplayer

1. Start `node server.js`
2. Choose `LAN Multiplayer`
3. One player clicks `Create Room`
4. The other player enters the room code and clicks `Join Room`
5. Black is the host, white is the joining player

Notes:

- LAN mode does not support undo
- Restart in LAN mode resets the shared room match
- Both players should use the same server URL from the same host machine

## Cross-Network Play

You can also deploy [server.js](/C:/Users/linjunF/Desktop/gomoku-lan-online/server.js) to any public Node.js server.

Typical flow:

1. Put this project on a server with a public URL
2. Run `node server.js` there
3. Open the game on both devices
4. In `Settings`, set `Room Server URL` to that same public address on both sides
5. Use `LAN Multiplayer`, then create a room and join by room code

Example public room server URL:

```text
https://your-room-server.example.com
```

Notes:

- This works better than direct LAN access on campus or office networks
- Both players must point to the same room server
- The current room server is memory-based, so restarting the server clears existing rooms

## External AI Setup

The external AI mode expects an OpenAI-style chat completion endpoint.

Required fields:

- `Endpoint URL`
- `Model Name`
- `API Key`

The model should return JSON only:

```json
{"row":7,"col":7}
```
