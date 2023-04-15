import { Request, Response, NextFunction } from "express"
import AccessService from "../services/access.service";
import { OK, CREATED } from "../core/success.respone";

interface CONTROLLERBODY {
    name : string,
    email : string,
    password : string,
    refreshToken? : string
}



class AccessController {
    
    login = async (req : Request, res : Response, next : NextFunction) => {
        const body : CONTROLLERBODY = req.body as CONTROLLERBODY
        new OK({message : "LOGIN success!!!!!",metadata : await AccessService.login(body)}).send(res);
    }

    signUp = async (req : Request, res : Response, next : NextFunction) => {
        const body : CONTROLLERBODY = req.body;
        new CREATED({
            message : "Registed OK Class",
            metadata : await AccessService.signUp(body)
        }).send(res)
        // return res.status(200).json(await AccessService.signUp(body));
    }
}


export default new AccessController()