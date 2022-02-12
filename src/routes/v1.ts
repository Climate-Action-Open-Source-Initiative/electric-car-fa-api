import {Request, Response, Router} from "express"
import { EvaluationRouter } from "../services/evaluation/evaluation.routes"

const router: Router = Router()

router.use("/evaluation", EvaluationRouter )


export default router

