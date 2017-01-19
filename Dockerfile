# To build a new version:
# NODE_ENV=production PROD_API=https://staging2.forecastxl.com webpack -p --config webpack.config.prod.js

FROM node:alpine

# Install the webserver
RUN npm install express

# Copy only the files required in production.
COPY app.js dist /

EXPOSE 80
CMD ["node", "app.js"]
