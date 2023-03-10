import mongoose from "mongoose";

export async function connectToDb() {
    try {
        // Setze den 'strict' Mode fuer mongoose (Felder, die nicht im Schema enthalten sind, werden nicht mitgespeichert)
        mongoose.set('strictQuery', true);

        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
            maxPoolSize: 10
        });     

        console.log('Connection to DB established');

    } catch (error) {
        console.error(error);
    }
}