
const {register}= require('./registration-helper');

const POST_register = (req,res)=>{
    const{username,password}= req.body;
    res.send(register(username,password));



};

module.exports={POST_register};