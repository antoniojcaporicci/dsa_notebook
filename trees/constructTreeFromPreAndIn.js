class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


const constructTreeFromPreAndIn = (preorder, inorder) => {
    const helper = (pre, inorder) => {
        if (!pre.length || !inorder.length) {
            return null
        }

        let root = new Node(pre[0])
        let mid = inorder.indexOf(root.val)
        root.left = helper(pre.slice(1, mid), inorder.slice(1, mid))
        root.right = helper(pre.slice(mid, pre.length - 1), inorder.slice(mid, inorder.length - 1))
        return root
    }

    return helper(preorder, inorder)
}

const preorder = [
    1, 3, 7, 15, 17, 9,
    19, 21, 5, 11, 23, 25,
    13
]

const inorder = [
    15, 7, 17, 3, 19, 9,
    21, 1, 23, 11, 25, 5,
    13
]

console.log(constructTreeFromPreAndIn(preorder, inorder))