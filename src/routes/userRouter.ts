import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

//? Register new user - /api/v0/users/
router.post("/", () => {});

//? Login to account - /api/v0/users/
router.post("/login", () => {});

//? Logout account - /api/v0/users/
router.post("/logout", () => {});

//? Send mail to get code - /api/v0/users/
router.post("/recover/mail", () => {});

//? Send code to change password - /api/v0/users/
router.post("/recover/code", () => {});

//? Change the recovered password - PATCH /api/v0/users/
router.patch("/recover/password", () => {});

//? Change email - PATCH /api/v0/users/
router.patch("/email", () => {});

//? Change password - PATCH /api/v0/users/
router.patch("/password", () => {});

//? Delete account - DELETE /api/v0/users/
router.delete("/", () => {});

export default router;
