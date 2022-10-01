const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body,validationResult} = require('express-validator');

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
 user = await User.create({
      name: req.body.name,
      email : req.body.email,
      password: req.body.password
    })
    
    // .then(user => res.json(user)).catch(err=>{console.log(err)
    //     res.json({error:'please enter valid email',message: err.message})});


res.json(user)}
catch(error){
console.error(errror.message);
res.status(500).send("some error occured")
}
})

module.exports = router;