FROM node

WORKDIR /app

# ARG AUTH_API
# ARG BACK_API

# COPY package*.json ./
# RUN npm i --force

RUN npm install -g npm@latest
RUN npm i -g yarn
COPY package*.json ./
RUN yarn --force

COPY ./ ./
EXPOSE 8083
CMD [ "yarn","dev" ]
