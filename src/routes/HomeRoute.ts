import { Request, Response, Router } from 'express';

import { homeController } from '../controllers/HomeController';

export class HomeRoute {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  private config = () => {
    this.router.get('/', homeController.root);
  }
}

export const homeRoute = new HomeRoute().router;
