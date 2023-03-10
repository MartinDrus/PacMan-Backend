import { Router } from "express";
import { getRanking, newRanking } from "../controller/ranking.controller.js";

const rankingRouter = Router();

rankingRouter.route('/ranking/:limit')
    .get(getRanking)

rankingRouter.route('/ranking')
    .post(newRanking)

export default rankingRouter;