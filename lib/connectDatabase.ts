import mysql from 'mysql';

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "shubham123",
    database: "nextjstaskdb"
})

export const connectNodeDatabase = () => {
    return new Promise((resolve, reject) => {

        try{
            connection.connect((error) =>{
                if (error) return reject(error);
                return resolve("DB connected successfully")
            })
        }catch(error){
            console.log("error connecting DB", error)

        }
    })
} 

export const executeQuery = (sqlQuery: string) => {
    return new Promise((resolve, reject) => {
        connection.query(sqlQuery, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
};