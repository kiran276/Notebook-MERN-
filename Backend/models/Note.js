
const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotesSchema = new Schema({
    user:{
        // its like using foreign key
        type:mongoose.Schema.Types.ObjectId,
        ref:'user' 
    },
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true,

    },
    tag:{
        type: String,
        required:"Genreal"
    }, date:{
        type: Date,
        default:Date.now
    }
})


module.exports = mongoose.model('notes',NotesSchema);