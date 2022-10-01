const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "ARYALKIRAN"

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
console.log(user.id)
    const authToken = jwt.sign(data, JWT_SECRET);
    console.log(authToken)

res.json(authToken)
}
catch(error){
console.error(errror.message);
res.status(500).send("some error occured")
}
})

module.exports = router;