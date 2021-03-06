# Stage 1
FROM node:16-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build --prod

# Stage 2
FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/MIW-CustomerWebapp /usr/share/nginx/html