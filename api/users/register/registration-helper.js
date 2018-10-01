const { users } = require('../../../utility/mock-data');
const { update, reset, show } = require('../../../utility/data-handler');

const register = (username, password) => {
    // Password  8-25 characters, no spaces
    // at least 1 nuber at least 1 capital letter
    // and at least one lowercase letter
    // with samll set of special characters:!@#$%_

    // username is between 6- 15 characters non special except _

    const patterns = {
        username: /^([\w]{6,15})$/,
        password: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w\d!@#$%]{8,25}$/
    };

    let user = {};

    user.username = patterns.username.test(username) ? username : undefined;

    user.password = patterns.password.test(password) ? password : undefined;

    if (user.username) {
        if (user.password) {
            users.push(user);
            console.log(JSON.stringify(users));
            update(users);
            show();

            if (!user.username) {
                return { status: 'failed, username invalid' };
            }

            if (!user.password) {
                return { status: 'failled, password invalid' };
            }

            users.push(user);

            return { status: 'passed' };

        };
        module.exports = { register };
