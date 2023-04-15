class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function levelOrderTraversal(root) {
    if (!root) return []

    const results = []
    const queue = [root]


    while (queue.length > 0) {
        let queueSize = queue.length
        let currentLevel = []

        for (let i = 0; i < queueSize; i++) {
            let node = queue.shift()
            
            if (currentLevel % 2 === 1) {
                currentLevel.unshift(node.val)
            } else {
                currentLevel.push(node.val)
            }

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        results.push(currentLevel)
    }

    return results
}

const tree = new Node(2)
tree.left = new Node(5)
tree.right = new Node(4)
tree.left.left = new Node(0)
tree.left.right = new Node(1)
tree.right.left = new Node(3)
tree.right.right = new Node(6)

console.log(levelOrderTraversal(tree)) // [[2], [5, 4], [0, 1, 3, 6]]
