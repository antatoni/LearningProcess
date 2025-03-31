let input = [`5 3`,
    `Gosho Tosho Penka Miro Stanka`,
    `Miro Gosho`,
    `Gosho Stanka`,
    `Stanka Miro`];

let print = this.print || console.log;
let gets =
    this.gets ||
    (
        (arr, index) => () =>
            arr[index++]
    )(input, 0);


class DoublyLinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        // this._dataArr = [];
        this._count = 0;
        this._nodeMap = new Map();
    }

    get count() {
        return this._count;
    }

    get head() {
        return this._head;
    }

    get tail() {
        return this._tail;
    }

    // values() {
    //     return this._dataArr.map((obj) => obj.value);
    // }

    addFirst(value) {
        const newNode = new LinkedListNode(value);
        newNode.next = this._head;
        if (this._count !== 0) {
            this._head.prev = newNode;
        } else {
            this._tail = newNode;
        }
        this._head = newNode;
        // this._dataArr.unshift(newNode);
        this._nodeMap.set(value, newNode);
        this._count++;
    }

    addLast(value) {
        const newNode = new LinkedListNode(value);
        if (this._count === 0) {
            this._head = newNode;
            // this._dataArr.push(newNode);
            this._tail = newNode;
        } else {
            const last = this._tail;
            newNode.prev = last;
            last.next = newNode;
            // this._dataArr.push(newNode);
            this._tail = newNode;
        }
        this._nodeMap.set(value, newNode);
        this._count++;
    }

    find(val) {
        return this._nodeMap.get(val) || null;
    }

    insertBefore(node, value) {
        if (!node) {
            throw new Error(`Cannot insert before a null node!`);
        }
        const newNode = new LinkedListNode(value);
        const prevNode = node.prev;

        newNode.next = node;
        newNode.prev = prevNode;
        node.prev = newNode;

        if (prevNode) {
            prevNode.next = newNode;
        } else {
            this._head = newNode;
        }

        // const index = this._dataArr.indexOf(node);
        // if (index !== -1) {
        //     this._dataArr.splice(index, 0, newNode);
        // }

        this._nodeMap.set(value, newNode);
        this._count++;
    }

    delete(node) {
        if (!node) {
            throw new Error(`Cannot delete a null node!`);
        }


        this._nodeMap.delete(node.value);


        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this._head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this._tail = node.prev;
        }


        // const index = this._dataArr.indexOf(node);
        // if (index !== -1) {
        //     this._dataArr.splice(index, 1);
        // }

        this._count--;
    }
}

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


const [numOfStudents, seatChanges] = gets().split(' ');
const arrayOfStudents = gets().split(' ');
const list = new DoublyLinkedList();

for (let name of arrayOfStudents) {
    list.addLast(name);
}
for (let i = 0; i < seatChanges; i++) {
    const [seatOne, seatTwo] = gets().split(' ');
    // console.log(seatOne, seatTwo)
    const nodeTwo = list.find(seatTwo);
    const nodeOne = list.find(seatOne);
    list.delete(nodeOne);
    list.insertBefore(nodeTwo, seatOne);


}

let current = list.head;
let result = '';
while (current !== null) {
    result += current.value + ' ';
    current = current.next;
}
console.log(result.trim())




