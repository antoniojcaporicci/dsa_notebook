import BinaryTreeNode from "./binarySearchTree.js"

// time complexity - O(n log n)
// space complexity - O(n log n)
// worst case scenario you need to hit every node on every path.
// every leaf multiplied times the number of paths which is log n
const pathSumCollections = (tree) => {
    if (tree === null) return false

    // dfs
    const helper = (node, slate, arr = []) => {
        slate.push(node.value)
        if (!node.left && !node.right) {
            arr.push(slate.slice())
            return arr
        }

        if (node.left) {
            helper(node.left, slate, arr)
        }
        if (node.right) {
            helper(node.right, slate, arr)
        }
        slate.pop()
        return arr
    }

    return helper(tree, [])
}

const tree = new BinaryTreeNode(9)

tree.insertCollection([3, 2, 5, 7, 11])

console.log(pathSumCollections(tree))