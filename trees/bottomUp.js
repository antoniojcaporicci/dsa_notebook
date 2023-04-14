// how many uni - value subtrees?

/**
*      5
*      ^
*    |     |
*    1     5
*    ^     ^
*   |   |   |  |
*   5  null 5  5 
*
*/

// 4 subtrees are uni-value here

const univalueSubtreeCount = (tree) => {
    let univalCount = 0

    if (tree === null) return 0

    const helper = (root) => {
        // base case: leaf node: return true, increment global counter
        if (!root.left && !root.right) {
            univalCount++
            return true
        }

        // recursion
        let isNodeUnivalue = false
        // if left, get lIsUnivalue
        if (root.left !== null) {
            let lUval = helper(root.left)
            isNodeUnivalue = root.value === root.left.value && lUval
        }
        // if right, get rIsUivalue
        if (root.right !== null) {
            let rUval = helper(root.right)
            isNodeUnivalue = root.value === root.right.value && rUval
        }

        // if both left and right are univalue and my val is left.val and right.val
        // increment global counter
        if (isNodeUnivalue) univalCount++

        // return isNodeUnival
        return isNodeUnivalue
    }

    helper(tree)

    return univalCount
}



class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

let root = new Node(1)
root.left = new Node(1)
root.right = new Node(1)
root.left.left = new Node(1)
root.left.right = new Node(1)
root.right.left = new Node(1)
root.right.right = new Node(2)

console.log(univalueSubtreeCount(root))
