
import express from "express";
import { changeRoleToOwner } from "../controllers/OwnerController";

const ownerRouter = express.Router();
ownerRouter.post("/change-role",protect, changeRoleToOwner)

export default ownerRouter;