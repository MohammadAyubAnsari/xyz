import express from "express";
import {
  Signin,
  Signup,
  google,
  signOut,
} from "../controllers/AuthController.js";

const router = express.Router();

router.post("/signup", Signup);

router.post("/signin", Signin);

router.post("/google", google);

router.get("/signout", signOut);

export default router;
