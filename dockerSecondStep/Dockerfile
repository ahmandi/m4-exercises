FROM node:alpine

WORKDIR /app

COPY package* ./
 
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]