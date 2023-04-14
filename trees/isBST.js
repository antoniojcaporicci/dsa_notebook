
const isBST = (tree) => {
    let isValidBST = true

    if (tree === null) return true

    const helper = (root) => {
        // prune case
        if (!isValidBST) {
            return isValidBST
        }
        
        // base case
        // if root has children and left node is greater or right node is less than
        if ((!!root.left && root.left.value > root.value) || (!!root.right && root.right.value < root.value)) {
            isValidBST = false
            return isValidBST
        }
        
        let curr = root
        
        if (!!curr.left) {
            isValidBST = helper(curr.left)
        }

        if (!!curr.right) {
            isValidBST = helper(curr.right)
        }

        return isValidBST
    }

    helper(tree)

    return isValidBST
}

// const tree = new BinaryTreeNode(9)

// tree.insertCollection([1, 3, 5, 7, 11])

// tree.insert(tree, 13)

const Tree = class {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }

  insert = (root, value) => {
    if (root.value === null) {
        return new Tree(value)
    }

    let newNode = new Tree(value)
    let prev = null
    let curr = root

    while (curr !== null) {
        if (curr.value === value) {
            'value already exists'
            return curr
        } else if (value > curr.value) {
            prev = curr
            curr = curr.right
        } else {
            prev = curr
            curr = curr.left
        }
    }

    if (value > prev.value) {
        prev.left = newNode
    } else {
        prev.right = newNode
    }

    return root
}
};

const notValidTree = new Tree(5)

notValidTree.insert(notValidTree, 3)

console.log(isBST(notValidTree))