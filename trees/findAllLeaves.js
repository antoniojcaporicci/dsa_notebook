import BinaryTreeNode from "./binarySearchTree.js"

const findAllLeaves = (tree) => {
    // add helper
    // launch dfs
    // base case on recursive call
    // if root does not have a right or left
    // recursive call is if you have left child, call on root.left
    // if you have a right child, call on root.right
    const helper = (root) => {
        if (!root.left && !root.right) {
            console.log(root.value)
        }

        if (root.left) helper(root.left)
        if (root.right) helper(root.right)
    }

    helper(tree)
}

const tree = new BinaryTreeNode(9)

tree.insertCollection([3, 2, 5, 7, 11])

findAllLeaves(tree)
