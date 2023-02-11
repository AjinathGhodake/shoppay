import nc from "next-connect";
import db from "../../../utils/db";
import { validateEmail } from "../../../utils/validation";
const handler = nc();
import User from "../../../models/User";
import bcrypt from "bcrypt";
import { Model, ModelUpdateOptions, Schema } from "mongoose";
handler.post(async (req: any, res: any) => {
  try {
    await db.connectDb();
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "Please fill all fields." });
      return 0;
    }
    if (!validateEmail(email)) {
      res.status(400).json({ message: "Invalid email" });
      return 0;
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "This email Already exists." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters." });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    const newUser: any = new User({ name, email, password: cryptedPassword });
    const addedUser = await newUser.save();
    res.send(addedUser);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
export default handler;
