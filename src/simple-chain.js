const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return chainMaker.chain.length;
  },
  addLink(value = '') {
    chainMaker.chain.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if (position < 0 || position > chainMaker.chain.length - 1) {
      chainMaker.chain = [];
      throw new Error;
    }
    if (!(typeof position === 'number')) {
      chainMaker.chain = [];
      throw new Error;
    }
    if (position % 1 !== 0) {
      chainMaker.chain = [];
      throw new Error;
    }
    chainMaker.chain.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    chainMaker.chain = chainMaker.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    const result = chainMaker.chain.map((item) => `( ${item} )`).join('~~');
    chainMaker.chain = [];
    return result;
  }
};

module.exports = chainMaker;
