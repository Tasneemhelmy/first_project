// import mysql2 from "mysql2"
// const DBconnection=()=>{
// const connection=mysql2.createConnection('mysql://u0epvdslkq3gpmkl:4MAu4kk5OiUqPabC0lOo@bsjezcgsebghpqqijbzk-mysql.services.clever-cloud.com:3306/bsjezcgsebghpqqijbzk')

// connection.connect((error)=>{
//     if(error)  console.log(error)
//     else console.log("DB connected")
// })
// return connection;
// }
// export default DBconnection;
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('c24firstproject', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
    console.log("DB connected")
}).catch((err)=>{
    console.log("fail to connect",err)
})
export default sequelize
