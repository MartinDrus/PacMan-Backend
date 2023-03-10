import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectToDb } from './service/db.service.js';
import rankingRouter from './routes/ranking.route.js'

// Lade Umgebungsvariablen (engl. enviroment variables) aus der .env Datei
dotenv.config();

// Initialisiere express
const app = express();

// Middleware fuer das body-Parsing
app.use(express.json());

// Middleware fuer CROSS-ORIGIN-REQUEST
app.use(cors({
    origin: 'http://localhost:5173',
    // credentials: true
}));


//!----Routes----
app.use('/', rankingRouter);


await connectToDb();

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`);
});