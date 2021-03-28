const CustomError = require("../extensions/custom-error");

const chainMaker = {
  'chain': [],

  getLength() {
    return chainMaker['chain'].length;
  },

  addLink(value) {
    chainMaker['chain'].push(`( ${value + ''} )`);
    return chainMaker;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > chainMaker['chain'].length) {
      chainMaker['chain'] = [];
      throw new Error();
    } else {
      chainMaker['chain'].splice(position - 1, 1);
      return chainMaker;
    }
  },

  reverseChain() {
    chainMaker['chain'].reverse();
    return chainMaker;
  },
  
  finishChain() {
    let result = chainMaker['chain'].join('~~');
    chainMaker['chain'] = [];
    return result;
  }
};

module.exports = chainMaker;