import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = ()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true});        
        console.log("Database Connected");
    } catch (err) {
        console.error("Error while connecting with the database ",err.message);
    }
}

export default DBConnection;