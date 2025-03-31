import doubleNode from "./doublyLinked.js";
import singleNode from "./singleLinkedList.js";

//Finish the DoublyLinkedList class by providing the following functionality: - 
// addFirst(value) - adds an element to the head of the list - 
// addLast(value) - adds an element to the tail of the list - 
// removeFirst() - removes the first node and returns its value - 
// removeLast() - removes the last node and returns its value - 
// insertBefore(node, value) - insert an element with the given value before the given node - 
// insertAfter(node, value) - insert an element with the given value after the given node - 
// find(val) - returns the first node that has the given value or null if no such value exists - 
// values() - returns all values as an array - 
// head - reference to the head node - 
// tail - reference to the tail node - 
// count - returns the number of nodes
export default class doublyLinkedListUsage {
    #head = null;
    #tail = null;
    #count = 0;
    #listMap = new Map();
    get head() {
        return this.#head;
    }
    get tail() {
        return this.#tail;
    }
    get count() {
        return this.#count;
    }
    addFirst(value) {
        const node = new doubleNode(value);
        if (!this.#head) {
            this.#tail = node;
        } else {
            this.#head.prev = node;
            node.next = this.#head;
        }
        this.#head = node;
        this.#count++;
        this.#listMap.set(node.value, node)
    }
    addLast(value) {
        const node = new doubleNode(value);
        if (!this.#head) {
            this.#head = node;
        } else {
            this.#tail.next = node;
            node.prev = this.#tail
        }
        this.#tail = node;
        this.#count++;
        this.#listMap.set(node.value, node)
    }
    find(value) {
        return this.#listMap.get(value) || null;
    }
    removeFirst() {
        if (!this.#head) {
            throw new Error(`Nothing to remove`);
        }
        const removedNode = this.#head;
        const removedVal = this.#head.value;

        if (this.#head === this.#tail) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#head = this.#head.next;
            this.#head.prev = null;
        }

        removedNode.next = null;
        removedNode.prev = null;
        this.#listMap.delete(removedVal);
        this.#count--;
        return removedVal;
    }
    removeLast() {
        if (!this.#head) {
            throw new Error(`Nothing to remove`);
        }
        const removedNode = this.#tail;
        const removedVal = this.#tail.value;

        if (this.#tail === this.#head) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#tail = this.#tail.prev;
            this.#tail.next = null;
        }

        removedNode.next = null;
        removedNode.prev = null;
        this.#listMap.delete(removedVal);
        this.#count--;
        return removedVal;
    }
    insertBefore(node, value) {
        if (!this.#head) {
            throw new Error(`Nothing to insert before!`);
        }
        if (this.find(node.value) === null) {
            throw new Error(`Can't insert before a node that doesn't exist!`);
        }
        const insertingNode = new doubleNode(value);
        const lastNode = node.prev;
        if (node === this.#head) {
            this.addFirst(value);
            return;
        } else {
            insertingNode.next = node;
            insertingNode.prev = lastNode;
            lastNode.next = insertingNode;
            node.prev = insertingNode;
        }
        this.#count++;
        this.#listMap.set(insertingNode.value, insertingNode);
    }
    insertAfter(node, value) {
        if (!this.#head) {
            throw new Error(`Nothing to insert after!`)
        }
        if (this.find(node.value) === null) {
            throw new Error(`Can't insert after a node that doesn't exist!`);
        }
        const insertingNode = new doubleNode(value);
        const nextNode = node.next;
        if (node === this.#tail) {
            this.addLast(value);
            return;
        } else {
            insertingNode.next = nextNode;
            insertingNode.prev = node;
            nextNode.prev = insertingNode;
            node.next = insertingNode;
        }
        this.#count++;
        this.#listMap.set(insertingNode.value, insertingNode);
    }
    values() {
        let pointer = this.#head;
        const arr = [];
        while (pointer) {
            arr.push(pointer.value);
            pointer = pointer.next;
        }

        return arr

    }
}