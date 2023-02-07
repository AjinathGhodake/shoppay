import nc from "next-connect";
import db from "../../../utils/db";
import { validateEmail } from "../../../utils/validation";
const handler = nc();
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
    res.send(req.body);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
export default handler;
