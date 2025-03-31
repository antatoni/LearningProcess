import doubleNode from "./doublyLinked.js";


export default class Queue {
    #head = null;
    #tail = null;
    #count = 0;

    get count() {
        return this.#count;
    }
    peek() {
        return this.#head ? this.#head.value : null;
    }
    enqueue(value) {
        const node = new doubleNode(value);
        if (!this.#head) {
            this.#head = node;
            this.#tail = node;
        } else {
            node.prev = this.#tail;
            this.#tail.next = node;
            this.#tail = node;
        }
        this.#count++;
    }
    dequeue() {
        if (!this.#head) {
            throw new Error(`Can't remove if there are no elements in queue!`);
        }
        const popped = this.#head;
        if (this.#head === this.#tail) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#head = this.#head.next;
        }

        if (!this.#head.next) {
            this.#tail = this.#head;
        }
        popped.prev = null;
        popped.next = null;
        this.#count--;
        return popped.value;
    }
}

function logger(num) {
    if (num === 0) {
        return
    }
    logger(num - 1);
    console.log(num);
}

logger(10)