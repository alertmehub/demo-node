FROM node:8-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy data layer
RUN mkdir -p /usr/src/data-layer
COPY node_modules/data-layer/ /usr/src/data-layer
RUN npm install

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY dist/ /usr/src/app/dist
COPY src/server/ /usr/src/app/

ENV PORT 80
#EXPOSE 3000

CMD [ "node", "index.js" ]
