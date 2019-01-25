import { Request, Response, Router } from 'express';

import { outIoTController } from '../controllers/OutIoTController';

export class OutIoTRoute {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config = () => {
    this.router.get('/outiot', (req: Request, res: Response) => {
      outIoTController.getOutIoT(req, res);
    });
  }
}

export const outIoTRoute = new OutIoTRoute().router;
