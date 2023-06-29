import { executeQuery } from '../../lib/connectDatabase'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function userController(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
    return new Promise(async (resolve, reject) => {
        try {
             const sqlQuery = `insert into users_table (f_name, l_name, email, password) values ("Shubham", "Thakur", "shubhamthakur@gmail.com", "shubham1234")`;
            //  const sqlQuery = `select * from users_table`;
            let response = await executeQuery(sqlQuery)
 
            console.log("return newPromise response:", response)

            return resolve(response) } 
            
            catch (error) {
                console.log("return newPromise error:", error)
                return reject(error)
            }
        })
    }}
