import { Request, Response } from 'express';

export class HomeController {
  public root(req: Request, res: Response) {
    res.status(200).send({
      message: 'Get request successful',
    });
  }
}

export const homeController = new HomeController();
