import { Request, Response } from "express";
import IAdminController from "./Icontroller";
import IAdminService from "../service/Iservice";
import logger from "../../../config/logger";
import adminService from "../service";
import ResponseHandler from "../../../utils/helpers/response.handler";


class AdminController implements IAdminController {
    constructor(
        private adminService: IAdminService,
        private _logger: typeof logger
    ) {}

    index = async (req: Request, res: Response): Promise<object> => {
        try {
            const response = new ResponseHandler(req, res);
            const result = await this.adminService.index();
            return response.success({
                message: "Hello World",
                data: result,
            });
        } catch (error: any) {
            this._logger.info("An error occured in AdminController", error?.message);
            throw error;
        }  
    }
    
}

const adminController = new AdminController(
    adminService,
    logger
);

export default adminController;