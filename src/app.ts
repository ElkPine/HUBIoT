import * as bodyParser from 'body-parser';
import express from 'express';

import { routes } from './routes';

class App {
  public app: express.Application = express();
  constructor() {
    this.config();
  }

  private config = () => {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // Routing
    this.app.use(routes);
  }
}

export default new App().app;
