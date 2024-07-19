import { Router } from "express";
import adminController from "../controller";
import { tryCatch } from "../../../utils/error/try.catch.helper";

const router = Router();

router.get("/", tryCatch(adminController.index));

export default router;