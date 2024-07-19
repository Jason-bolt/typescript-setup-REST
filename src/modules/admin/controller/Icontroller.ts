import { Request, Response } from "express";

interface IAdminController {
  index(req: Request, res: Response): Promise<object>;
}

export default IAdminController;