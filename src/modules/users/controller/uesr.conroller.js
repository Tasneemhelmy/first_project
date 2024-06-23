import DBconnection from "../../../../database/connection.js"
import bcryptjs from "bcryptjs"
const connection=DBconnection();
//--------------singUp----------

export const singUp=(req,res,next)=>{
    const {password,email}=req.body
    connection.query(`SELECT * FROM user WHERE email="${email}";`,(error,result)=>{
        if(error)
            return res.status(500).json({message:"error",error})

    if(result.length)
        return res.status(409).json({message:"email already exist"})
    
    const hashpass=bcryptjs.hashSync(password,8)
    req.body.password=hashpass;
    connection.query(`INSERT INTO user SET ?`,req.body,(error,result)=>{
        if(error)
            return res.status(500).json({message:"error",error})

        return res.status(201).json({message:"done"})
    
    })
    })

}
////-------- login------------
export const login=(req,res,next)=>{
    const {email,password}=req.body;
    connection.query(`SELECT * FROM user WHERE email="${email}";`,(error,result)=>{
        if(error)
            return res.status(500).json({message:"error",error})

        if(result.length){
            const user=result[0];
            console.log(password+"  "+user.password)
            const isMatch=bcryptjs.compareSync(password,user.password)
            console.log(isMatch)
                if(isMatch){
                    return res.status(201).json({message:"done",user:user.id})
                }
                    return res.status(401).json({message:"password incorrect"})
                
        }
        return res.status(404).json({message:"email not found"})
        
    })
}