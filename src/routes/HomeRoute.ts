import { Request, Response, Router } from 'express';

import { homeController } from '../controllers/HomeController';

export class HomeRoute {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config = () => {
    this.router.get('/', (req: Request, res: Response) => {
      homeController.root(req, res);
    });
  }
}

export const homeRoute = new HomeRoute().router;
