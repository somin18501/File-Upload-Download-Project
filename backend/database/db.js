import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const DBConnection = async () => {
    const MONGO_URI = process.env.MONGO_URL;
    // for mongo on local device url: mongodb://localhost/<DBName>
    try {
        await mongoose.connect(MONGO_URI, {useNewUrlParser:true});
        console.log('DB connected successfully!!!');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}