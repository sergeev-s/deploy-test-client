FROM node:20.18.0 AS builder

WORKDIR /app

COPY package*.json ./ 

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.27.4

COPY --from=builder /app/build /usr/share/nginx/html
