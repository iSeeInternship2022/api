import express from "express"
import QuestionnaireRouter from "./questionnaire.js"

const mainRouter = new express.Router();

mainRouter.use("/questionnaire", QuestionnaireRouter)

export default mainRouter