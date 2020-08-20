FROM node:12.18-alpine

LABEL maintainer="yureesantos@gmail.com"

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN npm install -g nodemon

CMD [ "nodemon", "-L", "src/index.js" ]