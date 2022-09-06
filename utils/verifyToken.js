import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated!"))
    }

    //if there is a token it doesnt mean that its the correct one so we need to check that too
    jwt.verify(token, process.env.JWT, (err, user)=>{   //its either gonna return an err or theinfo of the user its wehere the const token jwtsign is
        if(err)
        return next(createError(403, "Token is not valid!"));
        req.user = user; //this req.user user can be any word like req.mina
        next(); //if evr is ok its gonna go to the next operation
    
    }); 
};

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res, next, ()=>{ //bc if we r gonna verify our user it need to be authenticaed first
        if(req.user.id === req.params.id || req.user.isAdmin){ //only user and admin can delete the acc
            next()//we r the owner or the admin
        } else{
            return next(createError(403, "You are not authorized!"))
        }
    }) 
}

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,  ()=>{ 
        if(req.user.isAdmin){ 
            next()
        } else{
            return next(createError(403, "You are not authorized!"))
        }
    }) 
}