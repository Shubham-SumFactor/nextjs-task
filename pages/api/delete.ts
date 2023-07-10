import { NextApiRequest, NextApiResponse } from "next";
import { executeQuery } from "@/lib/connectDatabase";

export default async function handleDeleteUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      const deleteQuery = `DELETE FROM users_table WHERE email = '${email}'`;
      const result : any = await executeQuery(deleteQuery);

     
      if (result.affectedRows > 0) {
        res.status(200).json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("An error occurred while deleting user", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ message: "Bad Request" });
  }
}
