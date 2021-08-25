import { Router } from "express";
import bcrypt from "bcryptjs";

import encryptPassword from "./utils/encryptPassword";

const routes = Router();

const data = { password: "" };

routes.post("/user", (req, res) => {
  const { password } = req.body;

  const encryptedPassword = encryptPassword(password);
  data.password = encryptedPassword;

  return res.json({ password: data.password });
});

routes.get("/user", (req, res) => {
  return res.json({ password: data.password });
});

routes.post("/login", (req, res) => {
  const { password } = req.body;

  return res.json({
    success: bcrypt.compareSync(password, data.password),
  });
});

export default routes;
