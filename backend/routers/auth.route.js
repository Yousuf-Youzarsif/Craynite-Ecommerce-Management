import express from "express";
import {
  getUser,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js";
import { authentication } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/me", authentication, getUser);
router.get("/logout", authentication, logout);
export default router;
