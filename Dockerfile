# To build a new version:
# $ PROD_API=staging.forecastxl.com
# $ webpack --env production --config webpack.config.prod.js --optimize-minimize

FROM node:alpine

# Install the webserver
RUN npm install express

# Copy only the files required in production.
COPY app.js dist /

EXPOSE 80
CMD ["node", "app.js"]
