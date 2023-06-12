const LinkedList = require("./linked-list");
/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;
  _list = new LinkedList();

  syncLL() {
    this.top = this._list.head;
    this.size = this._list.length;
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    this._list.unshift(val);
    this.syncLL();
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    //if (this.isEmpty()) throw new Error('empty');
    let lastOut = this._list.shift();
    this.syncLL();
    return lastOut;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
