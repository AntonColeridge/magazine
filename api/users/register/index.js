
const registerRouter = require('express').Router();
const {POST_register}= require('./controller');
registerRouter.use('/',POST_register);
module.exports={registerRouter};