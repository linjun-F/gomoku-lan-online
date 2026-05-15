# Gomoku Arena

A browser Gomoku game with:

- Local heuristic AI (balanced / aggressive / defensive)
- Two-player mode on one device
- External AI mode with OpenAI-compatible APIs
- Online multiplayer with room creation and joining
- LAN multiplayer for same-network play

## Quick Start

Just double-click [index.html](index.html) or open it in a browser.

Online multiplayer works out of the box — the room server is pre-configured. Share the three files (`index.html`, `script.js`, `styles.css`) with a friend and you can play together immediately.

Note: the Render-hosted room server sleeps after 15 minutes of inactivity. The first connection will show "Connecting to server..." while it wakes up (a few seconds). After that, gameplay is smooth.

## Online Multiplayer

1. Open [index.html](index.html)
2. Choose **LAN Multiplayer** mode
3. One player clicks **Create Room**
4. Share the room code with the other player
5. The other player enters the room code and clicks **Join Room**
6. Black is the host, white is the joining player

Both players use the same pre-configured server, no setup needed.

## Local LAN Multiplayer

If you want to play within the same local network without internet:

```powershell
node server.js
```

Or double-click [start.bat](start.bat) to start the server and open the browser.

Then open `http://YOUR_PC_IP:8080` on another device in the same LAN.

## Deploy Your Own Server

To deploy your own room server (e.g. on Render, Railway, or a VPS):

1. Push this project to GitHub
2. Connect to [Render](https://render.com) — the `render.yaml` is already included
3. Open the game, go to **Settings** → **Room Server URL**, and enter your server address
4. Both players must use the same server URL

The room server is memory-based, so restarting clears existing rooms.

## External AI Setup

The external AI mode expects an OpenAI-compatible chat completion endpoint.

In **Settings**, fill in:

- **Endpoint URL**
- **Model Name**
- **API Key**

The model should return JSON only:

```json
{"row":7,"col":7}
```