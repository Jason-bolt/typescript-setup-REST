import IAdminService from "./Iservice";
import db, { DatabaseType } from "../../../config/database";
import logger from "../../../config/logger";

class AdminService implements IAdminService {
    constructor(
        private db: DatabaseType,
        private _logger: typeof logger
    ) {}

    index = async (): Promise<object> => {
        return {
            message: "Hello World",
        };
    }

}

const adminService = new AdminService(
    db,
    logger
);

export default adminService;