# FROM node:latest
# WORKDIR /usr/src/app
# 
# COPY package*.json ./
# RUN yarn 
# # RUN npm i -g prisma
# COPY ./ ./
# RUN yarn generate:postgres 
# # RUN yarn build 
# EXPOSE 3000
# CMD  yarn dev


FROM node:latest

COPY package*.json ./

RUN npm i --force

RUN 
RUN npm i --save @prisma/client


COPY ./ ./

RUN npx prisma generate
EXPOSE 3000
CMD  npx prisma migrate dev --name init && npm run dev
