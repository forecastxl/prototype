# prototype

[![build status][build-badge]][build-url]
[![coverage status][coverage-badge]][coverage-url]
[![dependency status][dependency-badge]][dependency-url]
[![devDependency status][devDependency-badge]][devDependency-url]

## requirements

* node
* an editor with editorconfig
* a valid .env file in the root of your project (see below)

## install

* clone and run `npm i`
* create `./.env` with your preferred settings

```bash
# Where the app will be served during development
DEV_BASE=http://localhost
DEV_PORT=8080

# Where to point api requests to
DEV_API=//192.168.100.3:3000
PROD_API=https://forecastxl.com
```

[build-badge]: https://img.shields.io/travis/forecastxl/prototype.svg
[build-url]: https://travis-ci.org/forecastxl/prototype
[coverage-badge]: https://img.shields.io/coveralls/forecastxl/prototype.svg
[coverage-url]: https://coveralls.io/github/forecastxl/prototype?branch=master
[dependency-badge]: https://img.shields.io/david/forecastxl/prototype.svg
[dependency-url]: https://david-dm.org/forecastxl/prototype
[devDependency-badge]: https://img.shields.io/david/dev/forecastxl/prototype.svg
[devDependency-url]: https://david-dm.org/forecastxl/prototype?type=dev
