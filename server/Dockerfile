# stage 1 building the code
FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
COPY .env.production .env
RUN npm run build
WORKDIR /dist/app/dist
COPY .env ./dist/



# stage 2
FROM node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production

COPY --from=builder /usr/app/dist ./dist

COPY ormconfig.docker.json ./ormconfig.json


EXPOSE 4000
CMD node dist/index.js