import LinkedListNode from "./linked-list-node.js";

export default class DoublyLinkedList {
    #head = null;
    #tail = null;
    #dataArr = [];
    #count = 0;

    get count() {
        return this.#count;
    }
    get head() {
        return this.#head
    }
    get tail() {
        return this.#tail
    }
    values() {
        return this.#dataArr.map((obj) => obj.value);
    }
    addFirst(value) {
        const newNode = new LinkedListNode(value);
        newNode.next = this.#head;
        if (this.#count !== 0) {
            this.#head.prev = newNode;
        } else {
            this.#tail = newNode;
        }
        this.#head = newNode;
        this.#dataArr.unshift(newNode);
        this.#count++;
    }

    addLast(value) {
        const newNode = new LinkedListNode(value);
        if (this.#count === 0) {
            this.#head = newNode;
            this.#dataArr.push(newNode);
            this.#tail = newNode
            this.#count++;
            return;
        }
        const last = this.#tail
        newNode.prev = last;
        last.next = newNode;
        this.#dataArr.push(newNode);
        this.#count++;
        this.#tail = newNode;
    }

    removeFirst() {
        if (!this.#head) {
            throw new Error(`Can't remove from an empty list!`);
        }
        const shifter = this.#dataArr.shift();
        this.#head = this.#head.next;

        if (!this.head) {
            this.#tail = null;
        } else {
            this.head.prev = null;
        }
        this.#count--;
        return shifter.value;
    }

    removeLast() {
        if (!this.#head) {
            throw new Error(`Can't remove from empty list!`);
        }
        const popped = this.#dataArr.pop();
        this.#count--;
        if (this.#head === this.#tail) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#tail = this.#tail.prev;
            this.#tail.next = null;
        }
        return popped.value;
    }
    find(val) {
        if (!this.#head) {
            return null;
        }
        let found = null;
        for (let node of this.#dataArr) {
            if (node.value === val) {
                found = node;
                break;
            }
        }
        return found
    }
    insertBefore(node, value) {
        if (!node) {
            throw new Error(`Cannot insert empty node!`);
        }
        if (!node.prev) {
            this.addFirst(value);
            return;
        }
        const newNode = new LinkedListNode(value);
        const prevNode = node.prev;
        newNode.prev = prevNode;
        newNode.next = node;
        node.prev = newNode;
        prevNode.next = newNode;

        if (node === this.#head) {
            this.#head = newNode;
        }
        const index = this.#dataArr.indexOf(node);
        if (index !== -1) {
            this.#dataArr.splice(index, 0, newNode);
        }

        this.#count++;
    }
    insertAfter(node, value) {
        if (!this.#head) {
            throw new Error(`can't insert on an empty list!`)
        }
        if (!node.next) {
            this.addLast(value);
            return;
        }
        const newNode = new LinkedListNode(value);
        const nextNode = node.next;
        newNode.next = nextNode;
        newNode.prev = node;
        node.next = newNode;
        nextNode.prev = newNode;

        if (nextNode) {
            nextNode.prev = newNode;
        } else {
            this.#tail = newNode;
        }

        const index = this.#dataArr.indexOf(node);
        if (index !== -1) {
            this.#dataArr.splice(index + 1, 0, newNode);
        }
    }
}