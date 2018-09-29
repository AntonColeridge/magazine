
const { users } = require('../../../utility/mock-data');
const toolboxLocation = '../../../utility/toolbox';
const { signIn } = require(toolboxLocation);

const POST_login = (req, res) => {

    const { username, password } = req.body;



    res.send(
        
        signIn(username, password, users)
    );




}

module.exports = POST_login;