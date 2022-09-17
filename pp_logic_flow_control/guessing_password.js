function getPassword() {
  
  for (attempts = 1; attempts <= 3; attempts++) {
    let password = rlSync.question('What is the password: ');
    if (password === 'password') {
      console.log ('You have successfully logged in.');
      break;
    } else if (attempts === 3) {
      console.log('You have been denied access.');
    };
  };
}

let rlSync = require('readline-sync');
getPassword();
