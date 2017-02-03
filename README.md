# prototype

[![greenkeeper badge][greenkeeper-badge]][greenkeeper-url]
[![build status][build-badge]][build-url]
[![coverage status][coverage-badge]][coverage-url]

## requirements

* node
* an editor with editorconfig
* a valid .env file in the root of your project (see below)

## containers

Docker containers of this project are built automatically and can be found on Dockerhub: https://hub.docker.com/r/forecastxl/prototype

## install

* clone and run `npm i`
* create `./.env` with your preferred settings

```bash
# Where the app will be served during development
DEV_BASE=http://localhost
DEV_PORT=8080

# Where to point api requests to
# Only used for local builds, for travis/docker builds this is set in .travis.yml
DEV_API=https://developapi.forecastxl.com
STAGING_API=https://stagingapi.forecastxl.com
PROD_API=https://api.forecastxl.com
```

[greenkeeper-badge]: https://badges.greenkeeper.io/forecastxl/prototype.svg
[greenkeeper-url]: https://greenkeeper.io/
[build-badge]: https://img.shields.io/travis/forecastxl/prototype.svg
[build-url]: https://travis-ci.org/forecastxl/prototype
[coverage-badge]: https://img.shields.io/coveralls/forecastxl/prototype.svg
[coverage-url]: https://coveralls.io/github/forecastxl/prototype?branch=master
