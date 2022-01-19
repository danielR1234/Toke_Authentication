FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]