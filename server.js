const { createServer } = require('http');
const next = require('next');
const routes = require('./routes');

const app = next({ dev: process.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000);
});
