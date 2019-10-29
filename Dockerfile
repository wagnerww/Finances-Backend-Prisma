FROM node:10.15.3-alpine

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 4000

CMD ["yarn", "dev"]