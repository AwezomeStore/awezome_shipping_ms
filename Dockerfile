FROM node:16
#FROM mysql

RUN mkdir /app
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install
RUN npm install -g typescript ts-node express nodemon 
RUN npm i morgan 
RUN npm i @types/morgan
RUN npm i mysql2
RUN npm i types/mysql2

EXPOSE 7000
CMD [ "npm", "run", "dev" ]