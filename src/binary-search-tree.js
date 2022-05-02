const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.treeTop = null;
    }

    root() {
        return this.treeTop;
    }

    add(data) {
        this.treeTop = addElem(this.treeTop, data);

        function addElem(node, value) {
            if (!node) {
                return new Node(value);
            }

            if (node.data < value) {
                node.right = addElem(node.right, value);
            } else if (node.data > value) {
                node.left = addElem(node.left, value);
            }

            return node;
        }
    }

    has(data) {
        return hasElem(this.treeTop, data);

        function hasElem(node, value) {
            if (!node) {
                return false;
            }

            if (node.data < value) {
                return hasElem(node.right, value);
            } else if (node.data > value) {
                return hasElem(node.left, value);
            } else {
                return true;
            }
        }
    }

    find(data) {
        return findElem(this.treeTop, data);

        function findElem(node, value) {
            if (!node) {
                return null;
            }

            if (node.data < value) {
                return findElem(node.right, value);
            } else if (node.data > value) {
                return findElem(node.left, value);
            } else {
                return node;
            }
        }
    }

    remove(data) {
        this.treeTop = removeElem.call(this, this.treeTop, data);

        function removeElem(node, value) {
            if (!node) {
                return null;
            }

            if (node.data < value) {
                node.right = removeElem.call(this, node.right, value);
            } else if (node.data > value) {
                node.left = removeElem.call(this, node.left, value);
            } else {
                if (!node.left && !node.right) {
                    return null;
                }

                if (!node.left) {
                    return node.right;
                }

                if (!node.right) {
                    return node.left;
                }

                let nodeMinValue = node.right;

                while (nodeMinValue.left) {
                    nodeMinValue = nodeMinValue.left;
                }

                node.data = nodeMinValue.data;
                node.right = removeElem.call(this, node.right, nodeMinValue.data);
            }
            return node;
        }
    }

    min() {
        return getMin(this.treeTop);

        function getMin(node) {
            let nodeMinValue = node;

            if (!node) {
                return null;
            }

            while (nodeMinValue.left) {
                nodeMinValue = nodeMinValue.left;
            }

            return nodeMinValue.data;
        }
    }

    max() {
        return getMax(this.treeTop);

        function getMax(node) {
            let nodeMaxValue = node;

            if (!node) {
                return null;
            }

            while (nodeMaxValue.right) {
                nodeMaxValue = nodeMaxValue.right;
            }

            return nodeMaxValue.data;
        }
    }
}

module.exports = {
    BinarySearchTree
};