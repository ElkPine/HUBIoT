import { Request, Response, Router } from 'express';

import { outIoTController } from '../controllers/OutIoTController';

export class OutIoTRoute {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config = () => {
    this.router.get('/outiot', outIoTController.getOutIoT);

    this.router.get('/outiot/:id', outIoTController.getOutIoTId);
  }
}

export const outIoTRoute = new OutIoTRoute().router;
