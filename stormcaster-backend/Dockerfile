FROM node:16.2.0-alpine

WORKDIR ./Stormcaster-backend

ENV PATH ./Stormcaster-backend/node_modules/.bin:$PATH

COPY package.json .
COPY yarn.lock .
COPY . .

CMD ['yarn', 'start']
