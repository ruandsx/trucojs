FROM node:alpine AS base

FROM base AS deps
WORKDIR "/app"
COPY package.json package-lock.json* tsconfig* .env ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS prod
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json /app/tsconfig* /app/.env ./

EXPOSE 3333

CMD [ "npm", "start" ]


FROM base AS devdeps
WORKDIR "/app"
COPY package.json package-lock.json* tsconfig* nodemon.json .env ./
COPY src ./src

RUN npm install

FROM base AS dev
WORKDIR "/app"
COPY --from=devdeps /app/node_modules ./node_modules
COPY --from=devdeps /app/package.json /app/.env ./
COPY --from=devdeps /app/tsconfig.json /app/nodemon.json ./
COPY --from=devdeps /app/src ./src