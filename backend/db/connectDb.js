
import mongoose from "mongoose";


const conntectDb = async() => {

    try {
         const conn = await mongoose.connect(process.env.MongoURI)
         console.log(`Connected to mongodb: ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`Error while connecting to DB ${error}`);
        process.exit(1);
    }

}

export default conntectDb;