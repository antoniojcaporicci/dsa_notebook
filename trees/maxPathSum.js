/**
 * Definition for a binary tree node.
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function maxPathSum(root) {
    // create helper for tree traversal
    // const helper = (root) => {
    //     // base case
    //     if (!root.left && !root.right) {
    //         return root.val
    //     }

    //     // ask sub tree which has the greater path sum plus me
    //     // compare that to global max path sum
    //     let greatestSubPath

    //     if (root.left) {
    //         greatestSubPath = helper(root.left)
    //     }

    //     if (root.right) {
    //         greatestSubPath = helper(root.right)
    //     }


    //     return Math.max(greatestSubPath, root.val + greatestSubPath)
    // }

    const helper = (root) => {
        // base case
        if (!root) {
            return 0
        }
    
        // recursively calculate the maximum path sum for the left and right sub-trees
        const leftMax = Math.max(0, helper(root.left))
        const rightMax = Math.max(0, helper(root.right))
    
        // compare the sum of the three possible paths: the current node, the current node plus the left sub-tree, or the current node plus the right sub-tree
        const pathSum = root.val + leftMax + rightMax
    
        // return the maximum value of the three possible paths
        return Math.max(pathSum, helper(root.left), helper(root.right))
    }
    
    return helper(root)
};

const values = [-10, 9, 20, 15, 7]
const tree = new TreeNode(-10)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

console.log(maxPathSum(tree))
