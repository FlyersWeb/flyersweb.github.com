FROM node:5.12.0

EXPOSE 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g webpack
COPY . /usr/src/app
RUN webpack --optimize-minimize

CMD [ "npm", "start" ]
