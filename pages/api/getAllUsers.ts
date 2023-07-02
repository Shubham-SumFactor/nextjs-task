import { NextApiRequest, NextApiResponse } from "next"
import * as jwt from 'jsonwebtoken';
import { executeQuery } from "@/lib/connectDatabase";


export default async function getAllUsers (req: NextApiRequest, res: NextApiResponse) {
    if(req.method=='GET') {
        try {

            const getRecord = `select * from users_table;`

            let resultset: any = await executeQuery(getRecord)

            res.status(200).send({message:resultset});

        } catch (error) {
            res.status(500).send('Internal Server Error');

        }
    }else{
        res.status(400).json({ message: 'Bad Request' });
      }
}