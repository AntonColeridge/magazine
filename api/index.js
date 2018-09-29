//SETUP=========================================
const apiRouter = require('express').Router();
const registerRouter = require('./users/register');
const loginRouter = require('./users/login')

//CONFIGURATION=================================
 //not sure if path should also be /api/users/register etc
 //OR api/register which is best practice?

//apiRouter.use('/register', registerRouter);
apiRouter.use('/login', loginRouter);


module.exports =  apiRouter 