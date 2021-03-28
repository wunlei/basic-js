const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(type = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.type = type;
  }

  keyString(str, key) {
    let keyString = "";
    for (let i = 0, j = 0; i < str.length; i++) {
      if (this.alphabet.indexOf(str[i].toUpperCase()) !== -1) {
        keyString = keyString + key[j];
      } else {
        keyString = keyString + str[i];
        j = j - 1;
      }
      if (j === key.length - 1) {
        j = 0;
      } else {
        j = j + 1;
      }
    }
    return keyString.toUpperCase();
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error();
    } else {
      let keyString = this.keyString(str, key);
      let message = str.toUpperCase();
      let encryptMsg = "";
      for (let i = 0; i < message.length; i++) {
        let letterId = (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(keyString[i])) % 26;
        if (this.alphabet.indexOf(message[i]) === -1) {
          encryptMsg = encryptMsg + message[i];
        } else {
          encryptMsg = encryptMsg + this.alphabet[letterId];
        }
      }
      return this.direction(encryptMsg);
    }
  }

  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error();
    } else {
      let keyString = this.keyString(str, key);
      let message = str.toUpperCase();
      let decryptMsg = "";
      for (let i = 0; i < message.length; i++) {
        let letterId = (this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(keyString[i])) % 26;
        if (this.alphabet.indexOf(message[i]) === -1) {
          decryptMsg = decryptMsg + message[i];
        } else {
          if (letterId < 0) {
            letterId = 26 + letterId;
          }
          decryptMsg = decryptMsg + this.alphabet[letterId];
        }
      }
      return this.direction(decryptMsg);
    }
  }

  direction(a) {
    if (this.type) {
      return a;
    } else {
      return a.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;