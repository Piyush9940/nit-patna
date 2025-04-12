import mongoose from "mongoose";
export const connectDB= async()=>{
    try{
       const conn = await mongoose.connect(process.env.MONGODB_URL);
       console.log('Your MongoDB is connected successfully', conn.connection.host, conn.connection.name);
    }
    catch (error){
        console.log("mongodb connection error " ,error);

        
    }
}