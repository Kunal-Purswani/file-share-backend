import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DB_URL = process.env.DB_URL;
const DBConnection = async ()=>{
    try {
        await mongoose.connect(DB_URL,{useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.error('error while connecting to database '+error.message);
    }
}

export default DBConnection;