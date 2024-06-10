FROM node:20.14.0-alpine

COPY package.json ./

RUN echo "Installing dependencies" && npm install

ENTRYPOINT [ "npm" ]