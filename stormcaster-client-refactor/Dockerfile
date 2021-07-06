FROM node:16.2.0-alpine

RUN mkdir /app
RUN mkdir -p /app/stormcaster-client

WORKDIR /app/stormcaster-client

ENV PATH ./Stormcaster-client/node_modules/.bin:$PATH

COPY package.json .

RUN yarn install --silent

COPY . .

CMD ['yarn', 'start']
