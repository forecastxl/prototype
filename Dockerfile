FROM node:alpine

# install webserver
RUN npm install express

# copy only files required in production
COPY server/index.js dist /

EXPOSE 80
CMD ["node", "index.js"]
