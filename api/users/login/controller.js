const {signIn } = require('./login-helper');

const POST_login = (req, res) => {
    const { username, password } = req.body;

    res.send(signIn(username, password));
};

module.exports = { POST_login };
