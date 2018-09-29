// place to store all function definitions 
// keeping mainfiles short and clean
const signIn = (username, password,dataset) => {
    let validUser;
    let validPassword;
    let  msg;
    validUser =dataset.find((user) => {
        return user.username===username;
    });

    validPassword =dataset.find((user) => {
        return user.password===password;
    });

      msg += validUser===undefined ? '\nusername is invalid': '\nusername is valid';
      msg += validPassword===undefined ? '\npassword is invalid': '\npassword is valid';
      return msg;

    
}

module.exports={
    signIn
}