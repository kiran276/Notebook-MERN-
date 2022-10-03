// middleware is functions that execute during the request-response 
// cycle and have access to both the request object (req) and the response object (res). 
// Middleware is executed during the window between when a server receives a request and 
// when it sends a response.


// step 1 - we will import jwt token
var jwt = require('jsonwebtoken');
const JWT_SECRET = "ARYALKIRAN"

// Get the user from the jwt token and add id to request object

const fetchUser = (req,res,next)=>{
    const token = req.header('auth-token');
if(!token)
{
    res.status(401).send({error:'please authenticate using a valid token'})
}
try
{
    const data= jwt.verify(token,JWT_SECRET);
    req.user=data.user;
    next();
}
catch(error)
{
    res.status(401).send({error:'please authenticate using a valid token'})
}

}
module.exports = fetchUser;