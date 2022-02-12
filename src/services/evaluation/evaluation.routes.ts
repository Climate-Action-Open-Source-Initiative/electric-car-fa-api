import {Request, Response, Router} from "express"

export const EvaluationRouter: Router = Router()

EvaluationRouter.post("/paynow", function (req:Request, res:Response){
    console.log("paynow")
    res.status(200).send("paynow")
})