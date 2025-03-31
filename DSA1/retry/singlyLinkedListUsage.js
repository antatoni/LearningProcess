import LinkedListNode from "../src/linked-list-node.js";
import singleNode from "./singleLinkedList.js";

export default class SinglyLinkedList {
    #head = null;
    #tail = null;
    #count = 0;
    #listMap = new Map();

    get count() {
        return this.#count;
    }
    get head() {
        return this.#head
    }
    get tail() {
        return this.#tail
    }

    addFirst(value) {
        const node = new singleNode(value);
        if (!this.#head) {
            this.#tail = node;
        }
        node.next = this.#head;
        this.#head = node;
        this.#count++;
        this.#listMap.set(value, node);
    }
    addLast(value) {
        const node = new singleNode(value);
        if (!this.#head) {
            this.#head = node;
        } else {
            this.#tail.next = node;
        }
        this.#tail = node;
        this.#count++;
        this.#listMap.set(value, node);
    }
    //removeFirst();
    //removeLast();
    //find();
    //insertAfter();
    values() {
        let pointer = this.#head;
        const arr = [];
        while (pointer) {
            arr.push(pointer.value);
            pointer = pointer.next;
        }

        return arr;
    }
    removeFirst() {
        if (!this.#head) {
            throw new Error(`Can't remove on empty list!`);
        }
        const removedNode = this.#head;
        const removedval = this.#head.value;
        if (this.#head === this.#tail) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#head = this.#head.next;
        }
        this.#count--;
        this.#listMap.delete(removedval);
        return removedval;
    }
    removeLast() {
        if (!this.#head) {
            throw new Error(`Can't remove on empty list!`);
        }
        let removedNode;
        let removedVal;
        if (this.#head === this.#tail) {
            removedNode = this.#head;
            removedVal = this.#head.value;
            this.#head = null;
            this.#tail = null;
        } else {
            let pointer = this.#head;
            let last;
            while (pointer) {
                if (!pointer.next.next) {
                    last = pointer;
                    removedNode = pointer.next;
                    removedVal = pointer.next.value;
                    break;
                }
                pointer = pointer.next;
            }
        }
        this.#count--;
        this.#listMap.delete(removedVal);
        return removedVal
    }
    find(value) {
        return this.#listMap.get(value) || null;
    }
    insertAfter(node, value) {
        if (!this.#head) {
            throw new Error(`Can't insert on empty list!`);
        }
        if (this.#tail === node) {
            this.addLast(value);
            return;
        }
        const insertionNode = new singleNode(value);
        insertionNode.next = node.next;
        node.next = insertionNode;
        this.#count++;
        this.#listMap.set(value, insertionNode);
    }
}