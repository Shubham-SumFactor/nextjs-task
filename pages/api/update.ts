import { NextApiRequest, NextApiResponse } from 'next';
import { executeQuery } from '@/lib/connectDatabase';

export default async function handleUpdateUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    try {
        console.log(req.body);
      const { email, f_name, l_name } = req.body;
      const updateQuery = `UPDATE users_table SET f_name = '${f_name}', l_name = '${l_name}' WHERE email = '${email}'`;
      const result: any = await executeQuery(updateQuery);

      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'User updated successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('An error occurred while updating user', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(400).json({ message: 'Bad Request' });
  }
}
