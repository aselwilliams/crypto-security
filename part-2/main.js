const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const encryptedString = cryptr.encrypt('I love cryptography!');
const decryptedString = cryptr.decrypt(encryptedString);

console.log(encryptedString); // 2a3260f5ac4754b8ee3021ad413ddbc1
console.log(decryptedString); // I love cryptography!









