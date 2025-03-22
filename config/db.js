import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect("mongodb+srv://vinaychindam1728:mongopassword@cluster0.wqf6xom.mongodb.net/foodapp").then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.