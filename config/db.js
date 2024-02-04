import mongoose from "mongoose";

const connectDb = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongdb dataBase ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`Mongdb Error: ${error}`);
    }
}

export default connectDb;