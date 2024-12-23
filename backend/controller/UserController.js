const UserModel = require("../model/UserModel")
const WorkModel = require("../model/WorkModel");
const SkillModel = require("../model/ToolsModel");
const EmailService = require("../services/EmailService");
const AuthService = require("../services/AuthService");
class UserController{


    static async createUser(req,res ){
     try {
        
     const user =  await    UserModel.create(req.body);
     const {email} = user._doc;
     let code =  AuthService.generateCode()
     await EmailService.sentConfirmationEmail(email,code)
     const codeHash =  AuthService.generateConfirmationCodeHash(email,code)
     
     res.status(200).json({message:{email,code:codeHash} ,success:true})
     } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message,success:false})
     }  
    }

    static async adminInfo(req,res){
        try {

            const info = await UserModel.findOne({isAdmin:true});
            const works  = await WorkModel.find({}).count();
            const skills = await SkillModel.find({}).count();
            const clients = await UserModel.find({isClient:true}).count();

            res.status(200).json({worksCount:works,skillsCount:skills,clientsCount:clients,info});

        } catch (error) {
            res.status(500).json({message:error.message,status:false})            
        }

    }

    static async getClients(req,res ){
     try {
        
     const user =  await    UserModel.find({});
     res.status(200).json({message:user ,success:true})
     } catch (error) {
    console.log(error);
    res.status(500).json({message:error.message,success:false})
     }  
    }


    static async becomeClient(req,res){
        const {userId} = req.params;
        try {
              const   updatedUser =   await UserModel.findByIdAndUpdate(userId,{
                    isClient:true,
                },{
                    new:true,
                    returnDocument:true,
                    returnOriginal:false,
                })
                res.status(200).json({message:updatedUser,success:true})
        } catch (error) {
                res.status(500).json({message:error,success:false})
                
        }
    }

   static async login(req,res){
    const {email,password:loginPw} = req.body;
    try {

        const user =await UserModel.findOne({email})

        if(!user){
                throw "This email is not registered";
        }
        const { password , ...other} =user._doc;
        // console.log("user",user)    ;


        if(loginPw !== password){
            throw "Invalid credentials"
        }
    
        req.session.user = other;
        // console.log("session ",req.session);

        res.status(200).json({message:other,success:true})

        




    } catch (error) {
        // console.log(error)
        console.error("Login error:", error); 
            return res.status(500).json({message:error})

    }
   }


   static getSessionuser(req,res){
    try {

        // console.log("Cookies: ", req.cookies);
        if (!req.cookies['codewithmama.sid']) {
            throw "Cookie is not set";
        }

        const user = req.session.user;
        // console.log("session User", user)

        if(!user){
            throw "User is not logged in ";
        }
        res.status(200).json({message:user,success:true})
    } catch (error) {
        res.status(500).json({message:error,success:false})
    }
   }

   static async logout(req,res){
    try {
            req.session.destroy((err)=>{
                if(err){
                    throw new Error("something went wrong")
                }
                // console.log(res.cookies);
                // console.log(req.session)
                res.clearCookie("codewithmama.sid");
                res.status(200).json({message:"successfully logged out",success:true})
            })
    } catch (error) {
        res.status(500).json({message:error,success:false})
    }
   }

   static async updatedUser(req,res){
    const {userId}  = req.params;


    try {
        const updatedUser =  await UserModel.findByIdAndUpdate(userId,{

            $set:req.body
        },{
            new:true,
            returnDocument:true,
            returnOriginal:false
        })      
      return  res.status(200).json({message:updatedUser,success:true})
    } catch (error) {
        res.status(500).json({message:error ,success:false})
    }
   }
}
module.exports = UserController;
