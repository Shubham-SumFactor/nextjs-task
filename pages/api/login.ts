import { executeQuery } from "@/lib/connectDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      const getRecord = `SELECT * FROM users_table WHERE email = '${email}'`;
      const resultset: any = await executeQuery(getRecord);

      if (resultset.length === 0) {
        res.status(400).send({ message: "User doesn't exist, Register first" });
      } else {
        const match: boolean = await bcrypt.compare(password, resultset[0].password);
        if (!match) {
          res.status(400).send({ message: "Incorrect password" });
        } else {
          res.status(200).send({ message: "Login successful" });
        }
      }
    } catch (error) {
      res.status(400).send({ done: false });
    }
  } else {
    res.send({ done: false });
  }
}
