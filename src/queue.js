const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
        this.head = null;
        this.last = null;
    }

    getUnderlyingList() {
        return this.head;
    }

    enqueue(value) {
        const node = new ListNode(value);
        if (!this.head) {
            this.head = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
    }

    dequeue() {
        const node = this.head;
        if (!node) {
            return node;
        }
        this.head = this.head.next;
        if (this.head === null) {
            this.last = null;
        }
        return node.value;
    }
}

module.exports = {
    Queue
};
