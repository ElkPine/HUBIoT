import { Request, Response } from 'express';

export class OutIoTController {
  public getOutIoT(req: Request, res: Response) {
    res.status(200).send({
      message: 'OUTIoT Connected',
    });
  }
}

export const outIoTController = new OutIoTController();
