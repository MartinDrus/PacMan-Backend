import * as RankingModel from '../models/ranking.model.js'

export async function getRanking(req, res){
    let limit = req.params.limit
    try {
        let ranking = await RankingModel.getScores(limit);
        res.status(200).send(ranking)
    } catch (error) {
        if(!error.cause) res.status(400).send(error.message)
        else res.status(error.cause).send(error.message)
    }
}


export async function newRanking(req, res){
    let body = req.body;
    try {
        let response = await RankingModel.insertNewScore(body);
        res.status(200).send(response)
    } catch (error) {
        if(!error.cause) res.status(400).send(error.message)
        else res.status(error.cause).send(error.message)
    }
}