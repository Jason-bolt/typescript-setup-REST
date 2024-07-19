import express from "express";
import adminRouter from "../../modules/admin/router";

const v1Router = express.Router();
v1Router.use("/admin", adminRouter);

export default v1Router;
