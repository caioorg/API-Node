API NodeJS with MongoDB - Boilerplate
======================================

This is a straightforward boilerplate for building REST APIs with ES6 and Express.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)
- PM2 Monitoring - Production via [pm2](http://pm2.keymetrics.io/)
- NodeRestful via [node-restful](https://www.npmjs.com/package/node-restful)


Getting Started
---------------

```sh
# clone it
git clone https://github.com/caioorg/api-node.git
cd api-node

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start project development
npm run dev

# If you want to start production
npm run build
```

Check Routes
-------------

If you want to validate the route operation by POSTMAN:
```sh
GET - List All -> /api/v1
GET - Search with Sort ->  /api/v1/?sort=created
POST - Create Register -> /api/v1
PUT - Update Register -> /api/v1/:id
DELETE /api/v1/:id
```
Examples Request
----------------

This [link](https://documenter.getpostman.com/view/3791312/S17us6Yi) was made available with the documentation, how to make the requests via POSTMAN.

License
-------

MIT
