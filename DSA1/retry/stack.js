import singleNode from "./singleLinkedList.js";


export default class Stack {
    #head = null;
    #count = 0;

    get count() {
        return this.#count;
    }
    push(value) {
        const node = new singleNode(value);
        this.#count++;
        if (!this.#head) {
            this.#head = node;
            return;
        }
        node.next = this.#head;
        this.#head = node;
    }

    pop() {
        if (!this.#head) {
            throw new Error(`Can't pop from empty stack!`);
        }
        const popped = this.#head;
        if (!this.#head.next) {
            this.#head = null
        } else {
            this.#head = this.#head.next;
        }
        popped.next = null;
        this.#count--;
        return popped.value;
    }

    peek() {
        return this.#head ? this.#head.value : null;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.pop();
stack.pop();
console.log(stack.count);