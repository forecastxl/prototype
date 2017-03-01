FROM node:alpine

# create and set workdir
WORKDIR /app

# copy server and dist files
COPY server/index.js /app
COPY server/package.json /app
COPY dist /app

# install the webserver and related modules
RUN npm install

EXPOSE 80
CMD ["node", "index.js"]
