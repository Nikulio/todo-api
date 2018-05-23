const bcrypt = require("bcryptjs");
const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");

const pass = "2123abc!";

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(pass, salt, (err, hash) => {
    console.log(hash);
  });
});

const hashPass = "$2a$10$J3oeS9yASAZZtEl6s.93UOKi6A9rMjd9EnRV96ffbnyHSCCpUSgSu";

bcrypt.compare(pass, hashPass, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
//
// var decoded = jwt.verify(token, '123abc');
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
