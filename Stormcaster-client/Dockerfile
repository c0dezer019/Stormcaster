FROM node:16.2.0-alpine

WORKDIR /Stormcaster-client

ENV PATH ./Stormcaster-client/node_modules/.bin:$PATH

COPY package.json .
COPY yarn.lock .
RUN yarn install --silent
COPY . .

CMD ['yarn', 'start']
