const Koa = require('koa');
const logger = require('koa-logger');
const compression = require('koa-compress');
const helmet = require('koa-helmet');
const koaBody = require('koa-body');

const { sequelize } = require('./models');
const {
  server: {
    HOST,
    PORT,
  },
} = require('./config');

const app = new Koa();

app.use(logger());
app.use(compression());
app.use(helmet());
app.use(koaBody());

require('./routes')({ app });

sequelize.sync({
  force: false,
}).then(() => {
  console.info('Successfully connected to the database!');
  app.listen(PORT, HOST, () => {
    console.info(`The application is up and running on http://${HOST}:${PORT} with ${app.getMaxListeners()} listeners`);
  });
}).catch((err) => {
  console.error(err);
});
