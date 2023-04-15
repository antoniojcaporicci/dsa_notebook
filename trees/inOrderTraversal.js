const inOrderTraversal = (root) => {
    const helper = (root, output = []) => {
        // base case
        if (!root.right && !root.left) {
            output.push(root.value)
            return output
        }

        // recursive case
        if (root.left) helper(root.left, output)
        if (root.right) helper(root.right, output)
        output.push(root.value)

        return output
    }

    return helper(root)
}

class Node {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
}

let tree = new Node(1)
tree.left = new Node(2)
tree.right = new Node(3)
tree.left.left = new Node(4)
tree.left.right = new Node(5)
tree.right.left = new Node(6)

console.log(inOrderTraversal(tree))