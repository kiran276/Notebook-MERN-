const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchuser');

const JWT_SECRET = "ARYALKIRAN"


// 11111111111111111111111
// creating a user using: POST "api/auth/createuser". no login required
router.post('/createUser',[ body('email').isEmail(),
body('name','Enter a Valid name').isLength({min:3}),
body('password','Password must be 5 characters long').isLength({min:5}),
],async (req,res)=>{

  // IF there are errors,return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
// Check weather the user with this email exists already
try{
let user = await User.findOne({email:req.body.email});
if (user){
  return res.status(400).json({error:'Sorry a user with same name exist'});
}
const salt = await bcrypt.genSalt(10)
const secPass = await bcrypt.hash(req.body.password,salt);

 user = await User.create({
      name: req.body.name,
      email : req.body.email,
      //we are using secured passowrd
      password: secPass
    })
    
    // .then(user => res.json(user)).catch(err=>{console.log(err)
    //     res.json({error:'please enter valid email',message: err.message})});

    // jwt 
const data ={
  User:{ id:user.id}
}

    const authToken = jwt.sign(data, JWT_SECRET);
   

res.json(authToken)
}
catch(error){
console.error(errror.message);
res.status(500).send("some error occured")
}
})


// 22222222222222222222222
// authenticate a user : POST /api/auth/login no login required

router.post('/login',[
body('email','Enter A Valid Email').isEmail(),
body('password','password cannot be blanked').exists(),

],async (req,res)=>{


//if there are error return bad request 
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
 //here we are using destructuring as resp.body contains email and password
const {email,password} = req.body;
try{
  let user = await User.findOne({email});
  if(!user){
    return res.status(400).json({error:'try to login with coorect credentials'});
  }

  const passwordCompare = await bcrypt.compare(password,user.password);
  if(!passwordCompare){
    return res.status(400).json({error:'try to login with coorect credentials'});
  }

  const data ={
    user:{ id:user.id}
  }

  const authToken = jwt.sign(data, JWT_SECRET);
  console.log(authToken)
res.json(authToken)

}
catch(error){
  console.error(error.message);
  res.status(500).send("Internal Server Error")
  }


})

// 3333333333333333333333333
// Get User Details :POST /api/auth/getuser login required
router.post('/getuser',fetchUser,async (req,res)=>{
try{
  userID=req.user.id;
  // -password below means uske alawa baaki sab value milegi
  const user = await User.findById(userID).select("-passwrod")  
  res.send(user)
}
catch(error){
  console.error(error.message);
  res.status(500).send("Internal Server Error")
  }
})

module.exports = router;