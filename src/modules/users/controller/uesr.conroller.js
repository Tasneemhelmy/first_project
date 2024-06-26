
import bcryptjs from "bcryptjs"
import userModel from '../../../../database/models/users.model.js'
import postModel from "../../../../database/models/post.model.js"
//--------------singUp----------

export const singUp=async(req,res,next)=>{
    const {email,password}=req.body
    const hash=bcryptjs.hashSync(password,8)
    req.body.password=hash
    const newUser= await userModel.findOrCreate({
        where:{email},
        defaults : req.body
    }) 

    if(newUser[1]==false)  return res.status(409).json({message:"Email aready exist!!"})
        return res.status(201).json({message:"User created!!",newUser})

// const userExsit= await userModel.findOne({
//         where:{email}
        
//     })
//     if(userExsit) return res.status(409).json({message:"Email aready exist!!"})
    
//     const newUser= await userModel.create(req.body)
//     res.status(201).json({message:"User created!!",newUser})

    // const {password,email}=req.body
    // connection.query(`SELECT * FROM user WHERE email="${email}";`,(error,result)=>{
    //     if(error)
    //         return res.status(500).json({message:"error",error})

    // if(result.length)
    //     return res.status(409).json({message:"email already exist"})
    
    // const hashpass=bcryptjs.hashSync(password,8)
    // req.body.password=hashpass;
    // connection.query(`INSERT INTO user SET ?`,req.body,(error,result)=>{
    //     if(error)
    //         return res.status(500).json({message:"error",error})

    //     return res.status(201).json({message:"done"})
    
    // })
    // })

}
////-------- login------------
export const login=async(req,res,next)=>{
const {email,password}=req.body
const userExsit= await userModel.findOne({
    where:{email}
})
if(userExsit){
    const validPassword=bcryptjs.compareSync(password,userExsit.password)
    if(validPassword) return res.status(200).json({message:"Done",userId:userExsit.id})

        return res.status(401).json({message:"invalid password"})
    
}
return res.status(401).json({message:"invalid password or email"})
    // const {email,password}=req.body;
    // connection.query(`SELECT * FROM user WHERE email="${email}";`,(error,result)=>{
    //     if(error)
    //         return res.status(500).json({message:"error",error})

    //     if(result.length){
    //         const user=result[0];
    //         console.log(password+"  "+user.password)
    //         const isMatch=bcryptjs.compareSync(password,user.password)
    //         console.log(isMatch)
    //             if(isMatch){
    //                 return res.status(201).json({message:"done",user:user.id})
    //             }
    //                 return res.status(401).json({message:"password incorrect"})
                
    //     }
    //     return res.status(404).json({message:"email not found"})
        
    // })
}

export const getUsers=async(req,res,next)=>{
    const users=await userModel.findAll({
        include:{
            model:postModel
            
        }
    }) 
    res.status(200).json({message:"done",users});
}
