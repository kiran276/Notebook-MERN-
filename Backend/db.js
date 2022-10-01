// code to connect with database

const  mongoose  = require("mongoose")
const mongoUri ="mongodb://localhost:27017/Notebook"


const connectToMongo=()=>{
    mongoose.connect(mongoUri,()=>{
        console.log("connected to mongo successfully")
    })
}

module.exports = connectToMongo;