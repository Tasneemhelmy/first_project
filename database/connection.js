import mysql2 from "mysql2"
const DBconnection=()=>{
const connection=mysql2.createConnection('mysql://u0epvdslkq3gpmkl:4MAu4kk5OiUqPabC0lOo@bsjezcgsebghpqqijbzk-mysql.services.clever-cloud.com:3306/bsjezcgsebghpqqijbzk')

connection.connect((error)=>{
    if(error)  console.log(error)
    else console.log("DB connected")
})
return connection;
}
export default DBconnection;
