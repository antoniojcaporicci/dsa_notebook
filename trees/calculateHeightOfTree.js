import BinaryTreeNode from "./binarySearchTree.js"

function height_of_binary_tree(root) {
    // create helper for recursion
    const helper = (root, leftPathCount, rightPathCount) => {
        // base case - leaf node - return 0
        if (root.left === null && root.right === null) {
            return 0
        }

        // recursive case - which two paths are greater?
        if (root.left) {
            leftPathCount += helper(root.left, leftPathCount + 1, rightPathCount)
        }

        if (root.right) {
            rightPathCount += helper(root.right, leftPathCount, rightPathCount + 1)
        }

        // return greatest path
        return Math.max(leftPathCount, rightPathCount)
    }

    return helper(root, 1, 1)
}

const tree = new BinaryTreeNode(9)

tree.insertCollection([1, 3, 5, 7, 11])

tree.insert(tree, 13)

console.log(height_of_binary_tree(tree))