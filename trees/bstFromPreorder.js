const bstFromPreorder = (preorder) => {
    // 0th index is always the root of a tree
    // the values can be partitioned into tree.left up to the first value thats greater than root
    // same with tree.right

    const insert = (tree, newNode) => {
        if (!tree.right && newNode.val > tree.val) {
            tree.right = newNode
        } else if (!tree.left && newNode.val < tree.val) {
            tree.left = newNode
        }

        if (tree.right && newNode.val > tree.val) {
            insert(tree.right, newNode)
        } else if (tree.left && newNode.val < tree.val) {
            insert(tree.left, newNode)
        }
    }

    let root = new Tree(preorder[0])
    // iterate through preorder and insert values into the tree one at a time
    for (let i = 1; i < preorder.length; i++) {
        let newNode = new Tree(preorder[i])
        insert(root, newNode)
    }

    return root
}

class Tree {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

// Input: preorder = [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

const testPreorder = [8, 5, 1, 7, 10, 12]

console.log(bstFromPreorder(testPreorder))
