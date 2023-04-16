const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.treeroot = null;
  }

  root() {
    return this.treeroot;
  }

  add(data) {
    const node = new Node(data);
    if (this.treeroot === null) {
      this.treeroot = node;
    } else {
      this._insertNode(this.treeroot, node);
    }
  }

  _insertNode(tree, node) {
    if (node.data > tree.data) {
      if (tree.right === null) {
        tree.right = node;
      } else {
        this._insertNode(tree.right, node);
      }
    }
    if (node.data < tree.data) {
      if (tree.left === null) {
        tree.left = node;
      } else {
        this._insertNode(tree.left, node);
      }
    }
  }

  has(data) {
    return this._isHasNode(this.treeroot, data);
  }

  _isHasNode(tree, data) {
    if (tree === null) {
      return false;
    } else {
      if (tree.data === data) {
        return true;
      } else if (data > tree.data) {
        return this._isHasNode(tree.right, data);
      } else if (data < tree.data) {
        return this._isHasNode(tree.left, data);
      }
    }
  }

  find(data) {
    return this._findNode(this.treeroot, data);
  }

  _findNode(tree, data) {
    if (tree === null) {
      return null;
    } else {
      if (data === tree.data) {
        return tree;
      } else if (data > tree.data) {
        return this._findNode(tree.right, data);
      } else if (data < tree.data) {
        return this._findNode(tree.left, data);
      }
    }
  }

  remove(data) {}

  min() {
    if (this.treeroot === null) {
      return null;
    } else {
      let tempLeft = this.treeroot;
      let value = null;
      for (; tempLeft.left !== null; ) {
        tempLeft = tempLeft.left;
      }
      value = tempLeft.data;
      return value;
    }
  }

  max() {
    if (this.treeroot === null) {
      return null;
    } else {
      let tempRight = this.treeroot;
      let value = null;
      for (; tempRight.right !== null; ) {
        tempRight = tempRight.right;
      }
      value = tempRight.data;
      return value;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
