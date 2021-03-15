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
    if (typeof position !== 'number') {
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

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());