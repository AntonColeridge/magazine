const { users } = require('../../../utility/mock-data');
const signIn = (username, password) => {
    let validUser;
    let msg={
        username:'invalid',
        password: 'invalid'
    }
    validUser = users.find((user) => {
        return user.username === username;
    });

   if(validUser){
       msg.username='valid';
   }else{return msg}

    if(validUser && validUser.password===password){
        msg.password='valid';
    }else {return msg}

    return msg;
}

module.exports = { signIn }