FROM node:22-alpine

WORKDIR /usr/src/app

# Set default port argument & environment variable
ARG PORT=5000
ENV PORT=${PORT}

# Copy dependency manifests
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Set ownership to non-root node user
RUN chown -R node:node /usr/src/app

# Switch to non-root user
USER node

# Expose server port
EXPOSE ${PORT}

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:${PORT}/health || exit 1

# Default command
CMD ["npm", "start"]
