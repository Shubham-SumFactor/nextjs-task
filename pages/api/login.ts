import { executeQuery } from "@/lib/connectDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { generateAccessToken, refreshAccessToken } from "@/lib/tokens";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      const getRecord = `SELECT * FROM users_table WHERE email = '${email}'`;
      const resultset: any = await executeQuery(getRecord);

      if (resultset.length === 0) res.status(400).send({ message: "User doesn't exist, Register first" });
      
        const match: boolean = await bcrypt.compare(password, resultset[0].password);
        if (!match) return res.status(400).send({ message: "Incorrect password" });
  
        let user: any = { email: email as string, password: password as string };

        let JwtToken = generateAccessToken(user);

        const JwtRefreshtoken = refreshAccessToken({ user });

        res.status(200).send({ JwtToken, JwtRefreshtoken, message: "Login successful"});
    } catch (error) {
      res.status(400).send({ done: false });
    }
  } else {
    res.send({ done: false });
  }
}
