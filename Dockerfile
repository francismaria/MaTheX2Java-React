# syntax=docker/dockerfile:1
   
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -o

CMD ["npm", "start"]

EXPOSE 3000