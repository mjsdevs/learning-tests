import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

class Application {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(morgan('dev'));
  }

  routes() {}
}

export default new Application().app;
