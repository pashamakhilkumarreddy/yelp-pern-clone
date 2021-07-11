import Koa from 'koa';
import logger from 'koa-logger';
import compression from 'koa-compress';
import helmet from 'koa-helmet';
import koaBody from 'koa-body';
import routes from './routes/index.js';
import config from './config/index.js';
import db from './models/index.js';

const app = new Koa();
const { HOST, PORT } = config.server;

app.use(logger());
app.use(compression());
app.use(helmet());
app.use(koaBody());

routes({ app });

const startServer = async () => {
  try {
    const baseModel = new db.BaseModel();
    const dbConn = await baseModel._initDbConnectionPool();
    if (dbConn) {
      console.info('Successfully connected to the database');
      const serverConn = await app.listen(PORT, HOST);
      if (serverConn) {
        console.info(
          `The server is up and running on http://${HOST}:${PORT} with ${app.getMaxListeners()} listeners`,
        );
      }
    }
  } catch (err) {
    console.error(err);
  }
};

startServer();
