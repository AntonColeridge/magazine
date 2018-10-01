//  SETUP=========================================
const apiRouter = require('express').Router();
const { registerRouter } = require('./users/register');
const { loginRouter } = require('./users/login');

//  CONFIGURATION=================================

apiRouter.use('/register', registerRouter);
apiRouter.use('/login', loginRouter);

module.exports = { apiRouter };
