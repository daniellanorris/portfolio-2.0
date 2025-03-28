# Base image for installing dependencies
FROM node:23.10.0 AS deps
WORKDIR /portfolio-2.0
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Build stage
FROM node:23.10.0 AS build
WORKDIR /portfolio-2.0
COPY --from=deps /portfolio-2.0/node_modules ./node_modules
COPY .env .env

# Set environment variables for build
ARG NEXT_SPOTIFY_CLIENT_ID
ARG NEXT_SPOTIFY_CLIENT_SECRET
ENV NEXT_SPOTIFY_CLIENT_ID=${NEXT_SPOTIFY_CLIENT_ID}
ENV NEXT_SPOTIFY_CLIENT_SECRET=${NEXT_SPOTIFY_CLIENT_SECRET}

RUN npm run build

# Final runtime stage
FROM node:23.10.0 AS runner
WORKDIR /portfolio-2.0

# Copy built files
COPY --from=build /portfolio-2.0/package.json ./
COPY --from=build /portfolio-2.0/.next ./.next
COPY --from=build /portfolio-2.0/public ./public
COPY --from=build /portfolio-2.0/node_modules ./node_modules

# Pass environment variables for runtime
ENV NEXT_SPOTIFY_CLIENT_ID=${NEXT_SPOTIFY_CLIENT_ID}
ENV NEXT_SPOTIFY_CLIENT_SECRET=${NEXT_SPOTIFY_CLIENT_SECRET}

EXPOSE 3000
CMD ["npm", "run", "start"]
