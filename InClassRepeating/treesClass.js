class GenericTreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

const nodeA = new GenericTreeNode("A (level 1) (root)");
const nodeB = new GenericTreeNode("B (level 2) (A -> B)");
nodeA.children.push(nodeB);
const nodeC = new GenericTreeNode("C (level 2) (A -> C)");
nodeA.children.push(nodeC);
const nodeD = new GenericTreeNode("D (level 3) (A -> B -> D)");
nodeB.children.push(nodeD);
const nodeE = new GenericTreeNode("E (level 3) (A -> B -> E)");
nodeB.children.push(nodeE);
const nodeF = new GenericTreeNode("F (level 3) (A -> C -> F)");
nodeC.children.push(nodeF);
const nodeG = new GenericTreeNode("G (level 3) (A -> C -> G)");
nodeC.children.push(nodeG);
const nodeH = new GenericTreeNode("H (level 4) (A -> C -> H)");
nodeC.children.push(nodeH);
//BFS

//create a queue
const queue = [];

//push starting node

queue.push(nodeA);//pushing the value;

//while queue is not empty 
//get element at the front of the queue
//process element 

// for each element's children
//push into the queue
while (queue.length > 0) {
    const currentNode = queue.shift();

    console.log(currentNode.value);

    for (const child of currentNode.children) {
        queue.push(child);
    }
}


//DFS