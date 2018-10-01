// SETUP=========================================
const loginRouter = require('express').Router();
const { POST_login } = require('./controller');

loginRouter.use('/', POST_login); // so will work with api/login path

module.exports = { loginRouter };
