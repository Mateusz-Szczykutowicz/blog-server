import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

router.get("/users", userController.admin.getAllUsers);

router.get("/users/:user", userController.admin.getOneUser);

router.patch("/users/:user/password", () => {});

router.patch("/users/:user/email", () => {});

router.patch("/block", () => {});

router.delete("/:user", () => {});

export default router;
