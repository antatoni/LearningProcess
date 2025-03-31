class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const nodeA = new BinaryTreeNode("A (level1) (root)");
nodeA.left = new BinaryTreeNode(`B (level 2) (root -> left)`);
nodeA.right = new BinaryTreeNode(`C (level 2) (root -> right)`);
nodeA.left.left = new BinaryTreeNode('D (level 3) (A > B > D) (root > left > left)');
nodeA.left.right = new BinaryTreeNode('E (level 3) (A > B > E) (root > left > right)');
nodeA.right.left = new BinaryTreeNode('F (level 3) (A > C > F) (root > right > left)');
nodeA.right.right = new BinaryTreeNode('G (level 3) (A > C > G) (root > right > right)');

//BFS for binary tree
//create queue
//push root into queue
//while queue not empty 
//get element at the front
//process element
console.log(`Using BFS with queue !\n`)
const queue = [];
queue.push(nodeA);
while (queue.length > 0) {
    const currentNode = queue.shift();

    console.log(currentNode.value);
    if (currentNode.left) {
        queue.push(currentNode.left);
    }
    if (currentNode.right) {
        queue.push(currentNode.right);
    }

}

// //DFS iteratively
console.log(`Using DFS using Stack !\n`)

const stack = [];
stack.push(nodeA);//root;
while (stack.length > 0) {
    const currentNode = stack.pop();

    console.log(currentNode.value);
    if (currentNode.left) {
        stack.push(currentNode.left);
    }
    if (currentNode.right) {
        stack.push(currentNode.right);
    }

}


function preOrder(node) {
    if (node) {
        //process the node
        //recurse left
        //recurse right
        console.log(node.value);
        preOrder(node.left);
        preOrder(node.right);
    }
}
function inOrder(node) {
    if (node) {
        //reccurse left
        //process the node
        //recurse right
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right)
    }
}
function postOrder(node) {
    if (node) {
        //recurse left 
        //recurse right
        //process the node
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.value);
    }
}

console.log(`Pre Order\n`)
preOrder(nodeA);
console.log(`In Order\n`)
inOrder(nodeA);
console.log(`Post Order\n`)
postOrder(nodeA);