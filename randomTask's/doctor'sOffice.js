let input = ['Append Steven',
    'Examine 1',
    'Find Ina',
    'Append Niki',
    'Insert 0 Peter',
    'Append Nadya',
    'Insert 3 Grigor',
    'Examine 5',
    'Append Asya',
    'Insert 4 Steven',
    'Append Steven',
    'Find Asya',
    'Find Steven',
    'Examine 3',
    'Find Peter',
    'Examine 4',
    'Find Steven',
    'Insert 1 Ina',
    'End'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
class DoubleNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    addFirst(value) {
        const node = new DoubleNode(value);
        if (!this.head) {
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
        }
        this.head = node;
        this.count++;
    }

    addLast(value) {
        const node = new DoubleNode(value);
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
        this.count++;
    }

    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    removeFirst() {
        if (!this.head) {
            throw new Error('Nothing to remove');
        }
        const removedVal = this.head.value;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.count--;
        return removedVal;
    }

    removeLast() {
        if (!this.head) {
            throw new Error('Nothing to remove');
        }
        const removedVal = this.tail.value;

        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.count--;
        return removedVal;
    }

    insertBefore(node, value) {
        if (!this.head) {
            throw new Error('Nothing to insert before!');
        }

        const foundNode = this.find(node.value);
        if (!foundNode) {
            throw new Error("Can't insert before a node that doesn't exist!");
        }

        const insertingNode = new DoubleNode(value);

        if (foundNode === this.head) {
            this.addFirst(value);
            return;
        }

        insertingNode.next = foundNode;
        insertingNode.prev = foundNode.prev;
        foundNode.prev.next = insertingNode;
        foundNode.prev = insertingNode;

        this.count++;
    }

    insertAfter(node, value) {
        if (!this.head) {
            throw new Error('Nothing to insert after!');
        }

        const foundNode = this.find(node.value);
        if (!foundNode) {
            throw new Error("Can't insert after a node that doesn't exist!");
        }

        const insertingNode = new DoubleNode(value);

        if (foundNode === this.tail) {
            this.addLast(value);
            return;
        }

        insertingNode.next = foundNode.next;
        insertingNode.prev = foundNode;
        foundNode.next.prev = insertingNode;
        foundNode.next = insertingNode;

        this.count++;
    }

    values() {
        let pointer = this.head;
        const arr = [];
        while (pointer) {
            arr.push(pointer.value);
            pointer = pointer.next;
        }
        return arr;
    }

    findAt(index) {
        if (index < 0 || index >= this.count) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    insertAt(position, value) {
        if (position < 0 || position > this.count) {
            return false;
        }

        const node = new DoubleNode(value);

        if (position === 0) {
            if (!this.head) {
                this.head = node;
                this.tail = node;
            } else {
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
            }
            this.count++;
            return true;
        }

        if (position === this.count) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.count++;
            return true;
        }

        let current = this.head;
        for (let i = 0; i < position - 1; i++) {
            current = current.next;
        }

        node.next = current.next;
        node.prev = current;
        current.next.prev = node;
        current.next = node;

        this.count++;
        return true;
    }
}


const queue = new DoublyLinkedList();
let commandLine = gets()
const nameMap = new Map();

while (commandLine !== "End") {
    commandLine = commandLine.split(' ');
    if (commandLine[0] === ('Append')) {
        const [command, name] = commandLine;
        queue.addLast(name);
        nameMap.set(name, (nameMap.get(name) || 0) + 1);
        console.log(`OK`);
    } else if (commandLine[0] === ('Find')) {
        const [command, name] = commandLine;
        console.log(nameMap.get(name) || 0);
    } else if (commandLine[0] === ('Examine')) {
        const [command, numToExamine] = commandLine;
        const examinedPatients = [];
        if (Number(numToExamine) > queue.count) {
            console.log(`Error`);
        } else {
            for (let i = 0; i < numToExamine; i++) {
                const examinedPatient = queue.removeFirst();
                const newCOunt = (nameMap.get(examinedPatient) || 1) - 1;
                if (newCOunt <= 0) {
                    nameMap.delete(examinedPatient);
                } else {
                    nameMap.set(examinedPatient, newCOunt);
                }
                examinedPatients.push(examinedPatient);
            }
            console.log(examinedPatients.join(' '))
        }

    } else if (commandLine[0] === 'Insert') {
        const position = Number(commandLine[1]);
        const name = commandLine[2];
        const success = queue.insertAt(position, name);
        nameMap.set(name, (nameMap.get(name) || 0) + 1);
        console.log(success ? "OK" : "Error");
    }
    commandLine = gets()
}

