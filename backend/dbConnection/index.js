import mongoose from "mongoose"

const dbConnect = async()=>{
 
    try{
       mongoose.connect(process.env.MONGO_URL).then(console.log("database connected successfully"))
       console.log(`Connected to MongoDB: ${process.env.MONGO_USERNAME} `);
      
    }
    catch(error){
        console.log('Error occured in connecting database' + error)
    }
}

export default dbConnect;