FROM node:lts-alpine
WORKDIR /app
COPY . /app
EXPOSE 8080
RUN npm install http-server -g
RUN npm install pnpm -g
RUN pnpm i
RUN pnpm run build
CMD http-server ./dist
