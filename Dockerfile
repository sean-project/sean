FROM node:lts-alpine
WORKDIR /app
COPY . /app
EXPOSE 8080
RUN npm install http-server -g
RUN npm i
RUN npm run build
CMD http-server ./dist
