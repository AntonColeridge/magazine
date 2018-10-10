const {users} = require('../../../utility/mock-data');
const signIn = (username, password) => {
    let validUser;
    validUser = users.find((user) => {
        return user.username === username;
    });
    if (!validUser) {
        return {
            error: 'Invalid username'
        };
    }

    if (validUser.password !== password) {
        return {
            error: 'Invalid password'
        };
    }

    return validUser;
};

module.exports = {signIn};
