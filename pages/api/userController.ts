import { executeQuery } from '../../lib/connectDatabase'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function userController(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
    return new Promise(async (resolve, reject) => {
        try {

            let { f_name, l_name, email, password } = req.body
            // const sqlQuery = `insert into users_table (f_name, l_name, email, password) values ('${f_name}','${l_name}' ,'${email}', '${password}')`;

            // const sqlQuery = `insert into users_table (f_name, l_name, email, password) values ("Shubham", "Singh", "shubham6767@gmail.com", "shubham123456")`;
            //  const sqlQuery = `select * from users_table`;
            // const sqlQuery = `update users_table set f_name='Shubhi' where email="shubham67@gmail.com"`
            //  const sqlQuery = `delete from users_table where email="shubham6767@gmail.com"`
            // let response = await executeQuery(sqlQuery)
 
            //=========================== AVOID DUPLICACY ===========================
            const getRecord = `select * from users_table where email='${email}'`;
            let resultset: any = await executeQuery(getRecord);
            if (resultset.length > 0) return res.status(400).send({ message: "User already registered please login" });
            //=======================================================================
            
           
            const sqlQuery = `insert into users_table (f_name, l_name, email, password) values ('${f_name}','${l_name}' ,'${email}', '${password}')`;
            let response = await executeQuery(sqlQuery);
            console.log("return newPromise response:", response)

            // return resolve(response)
            res.status(200).json(response); } 
            
            catch (error) {
                console.log("return newPromise error:", error)
                // return reject(error)
                res.status(500).json({ error: 'Internal Server Error' });
            }
        })
    }}
