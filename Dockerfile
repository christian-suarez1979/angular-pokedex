## Build - Stage 1
FROM node:16.20.2-bullseye AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

## Run - Stage 2
FROM nginx:1.17.10-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/angular-pokedex-complete /usr/share/nginx/html