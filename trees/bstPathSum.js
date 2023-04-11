import BinaryTreeNode from "./binarySearchTree.js"

// time complexity - O(n log n)
// space complexity - O(n log n)
// worst case scenario you need to hit every node on every path.
// every leaf multiplied times the number of paths which is log n
const pathSumCollections = (tree, sum) => {
    if (tree === null) return false

    // dfs
    const helper = (node, target, slate, arr = []) => {
        target = target - node.value

        slate.push(node.value)
        if (!node.left && !node.right && target === 0) {
            arr.push(slate.slice())
            return arr
        }

        if (node.left) {
            helper(node.left, target, slate, arr)
        }
        if (node.right) {
            helper(node.right, target, slate, arr)
        }
        slate.pop()
        return arr
    }

    return helper(tree, sum, [])
}

const tree = new BinaryTreeNode(9)

tree.insertCollection([3, 2, 5, 7, 11])

console.log(pathSumCollections(tree, 14))