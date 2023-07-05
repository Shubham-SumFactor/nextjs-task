import { NextApiRequest, NextApiResponse } from "next"
import { verifyToken } from "@/lib/tokens";
import { executeQuery } from "@/lib/connectDatabase";


export default async function getAllUsers (req: NextApiRequest, res: NextApiResponse) {
    if(req.method=='GET') {
        try {
            verifyToken(req, res, async()=>{
            const getRecord = `select * from users_table;`

            let resultset: any = await executeQuery(getRecord)

            return res.status(200).send({message: resultset });
        });
        } catch (error) {
            res.status(500).send('Internal Server Error');

        }
    }else{
        res.status(400).json({ message: 'Bad Request' });
      }
}