const inOrderTraversal = (root) => {
    const result = [];
    function traverse(node) {
        if (node !== null) {
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        }
    }
    traverse(root);
    return result;
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

let tree = new Node(1)
tree.left = new Node(3)
tree.right = new Node(5)
tree.left.left = new Node(7)
tree.left.right = new Node(9)
tree.right.left = new Node(11)
tree.right.right = new Node(13)
tree.left.left.left = new Node(15)
tree.left.left.right = new Node(17)
tree.left.right.left = new Node(19)
tree.left.right.right = new Node(21)
tree.right.left.left = new Node(23)
tree.right.left.right = new Node(25)

// let tree = new Node(3)
// tree.left = new Node(9)
// tree.right = new Node(20)
// tree.right.left = new Node(15)
// tree.right.right = new Node(7)
console.log(inOrderTraversal(tree))