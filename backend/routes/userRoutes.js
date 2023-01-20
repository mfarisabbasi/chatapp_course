import express from "express";
import {
  allUsers,
  loginUser,
  registerUser,
} from "../controllers/userControllers.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.route("/login").post(loginUser);

export default router;
