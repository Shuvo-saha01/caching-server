# Express Backend Server

A modern, containerized Express backend server with Docker and Docker Compose support.

## Project Structure

```
├── Dockerfile              # Docker container definition
├── docker-compose.yml      # Docker compose configuration
├── .dockerignore           # Docker build ignore rules
├── .env.example            # Template for environment variables
├── .env                    # Local environment variables
├── .gitignore              # Git ignore file
├── package.json            # Node.js dependencies and scripts
└── src/
    ├── app.js              # Express app initialization & middleware
    ├── index.js            # Server entrypoint and graceful shutdown
    └── routes/
        └── index.js        # API routes
```

## Features

- **Express 4.x** with ES Module syntax (`import`/`export`)
- **Docker & Docker Compose** for streamlined containerized development and deployment
- **Live Reloading** with `nodemon` and volume mounting in Compose
- **Health Check Endpoint** at `/health` for container orchestration
- **Graceful Shutdown** handling `SIGINT` and `SIGTERM` signals
- **CORS & Morgan** request logging preconfigured
- **Non-root container execution** using standard `node` user for security

## Quick Start with Docker Compose

1. **Start the server in development mode**:
   ```bash
   docker compose up --build
   ```

2. **Run in detached (background) mode**:
   ```bash
   docker compose up -d
   ```

3. **Check logs**:
   ```bash
   docker compose logs -f
   ```

4. **Stop the containers**:
   ```bash
   docker compose down
   ```

## Local Development (Without Docker)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start in development mode (with hot-reload)**:
   ```bash
   npm run dev
   ```

3. **Start in production mode**:
   ```bash
   npm start
   ```

## Endpoints

- `GET /` - Root status and API info
- `GET /health` - Health check status and uptime
- `GET /api` - API routes root
