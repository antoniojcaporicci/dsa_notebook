/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = (root) => {
    // extract all values and push into an array
    let values = []

    const extractValues = (root) => {
        // base case
        if (!root) return
        if (!root.left && !root.right) {
            values.push(root.val)
            return
        }

        extractValues(root.left)
        values.push(root.val)
        extractValues(root.right)
    }

    const insert = (node, root) => {
        // base case
        if (!root) return

        // if value is greater than root
        if (node.val > root.val) {
            // either asign it as a child, or recursively search for that destination
            if (!root.right) {
                root.right = node
            } else {
                insert(node, root.right)
            }
        } else {
            // value is less than root
            if (!root.left) {
                root.left = node
            } else {
                insert(node, root.left)
            }
        }
    }

    extractValues(root)

    // repeat while values has length
    while (values.length) {
        // take values array, get the middle value
        // insert middle value into bst
        let mid = Math.floor(values.length / 2)
        let midValue = values.splice(mid, 1)

        insert(new Tree(midValue), root)
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