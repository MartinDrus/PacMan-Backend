import mongoose from "mongoose";

const rankingSchema = mongoose.Schema({
    score: { type: Number, required: true},
    name: {type: String, required: true}
}, {timestamps: true});

const Ranking = mongoose.model('Score', rankingSchema);

export async function getScores(limit) {
    return await Ranking.find().sort({"score":-1}).limit(limit);
}

export async function insertNewScore(score) {
    const newRank = new Ranking(score);
    // Speichere neue Instanz
    return await newRank.save();
}

