import BinaryTreeNode from "./binarySearchTree.js"

const treeDiameter = (tree) => {
    if (tree === null) return 0

    let maxDiameter = 0

    // dfs
    const helper = (node) => {
        // base case
        if (!node.left && !node.right) return 0

        // init lmax and rmax
        let lMax = 0
        let rMax = 0

        if (node.left !== null) lMax = helper(node.left) + 1
        if (node.right !== null) rMax = helper(node.left) + 1

        // compare lmax + rmax to maxDiameter
        maxDiameter = Math.max(maxDiameter, lMax + rMax)

        // return max (lmax, rmax)
        return Math.max(lMax, rMax)
    }

    return helper(tree)
}


class Node {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
}

let newTree = new Node(1)
newTree.left = new Node(2)
newTree.right = new Node(3)
newTree.left.left = new Node(4)
newTree.left.right = new Node(5)
newTree.right.left = new Node(6)
newTree.right.left.right = new Node(7)

console.log(treeDiameter(newTree))