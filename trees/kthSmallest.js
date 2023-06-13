/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 *      5
 *      ^
 *    3    7
 *    ^    ^
 *  1  4  6  
 * 
 *   [5,3,7,1,4,6]
 *   [1,3,4,5,6,7]
 */
const kthSmallest = (root, k) => {
    if (!root) return root
    // create a result array of length k
    let result = []

    // establish a dfs function in pre-order
    const dfs = (node, res) => {
        console.log(res)
        if (!node) {
            return
        }

        if (res.length === k) {
            res.push(node.val)
            return
        }

        dfs(node.left, res)
        res.push(node.val)
        dfs(node.right, res)
    }

    dfs(root, result)

    return result[k - 1]
};