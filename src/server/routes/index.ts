import express from "express";
import mentionsRouter from "./mentions";
import usersRouter from "./users";
import chirpsRouter from "./chirps";

const indexRouter = express.Router();

indexRouter.use("/api/chirps", chirpsRouter);
indexRouter.use("/api/users", usersRouter);
indexRouter.use("/api/mentions", mentionsRouter);

export default indexRouter;
