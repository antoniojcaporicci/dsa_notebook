const treeDiameter = (tree) => {
    let maxDiameter = 0
    
    const getHeight = (node) => {
        if (!node) {
            return 0
        }
        return 1 + Math.max(getHeight(node.left), getHeight(node.right))
    }

    const helper = (node) => {
        if (!node) {
            return 0
        }
        
        const lHeight = getHeight(node.left)
        const rHeight = getHeight(node.right)
        
        if (maxDiameter > lHeight + rHeight) {
            return maxDiameter
        }
        
        maxDiameter = Math.max(maxDiameter, lHeight + rHeight)
        
        helper(node.left)
        helper(node.right)
    }

    helper(tree)

    return maxDiameter
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