require("dotenv").config()
const mongoose = require("mongoose")

const connection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("successfully connected to cactusdb");
    } catch (error) {
        console.log(error);
    }
};

connection();