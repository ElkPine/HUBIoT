import { Request, Response } from 'express';

export class OutIoTController {
  public getOutIoT(req: Request, res: Response) {
    res.status(200).send({
      message: 'OUTIoT Connected',
    });
  }

  public getOutIoTId(req: Request, res: Response) {
    res.status(200).send({
      message: req.params,
    });
  }
}

export const outIoTController = new OutIoTController();
