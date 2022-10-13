// this is entry point of application and its a express server
const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')
const { application } = require('express');
connectToMongo();

const app = express();
const port =3333;
app.use(cors());
// we use express.json to recive json data its a middleware
app.use(express.json());
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/note'))


// app.get('/',(req,res)=>{
// res.send("Hello aryal how are you")
// })





app.listen(port);