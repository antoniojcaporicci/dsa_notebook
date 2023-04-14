import BinaryTreeNode from "./binarySearchTree.js"

// Given preorder and inorder traversal of a tree, construct the bst

const createTreeFromCollection = (preOrderCollection, inOrderCollection) => {
    const inOrderMap = {}

    for (let i = 0; i < inOrderCollection.length; i++) {
        inOrderMap[inOrderMap[i]] = i
    }

    const helper = (preOrder, preOrderStart, preOrderEnd, inOrder, inOrderStart, inOrderEnd) => {
        //base case 
        if (s > e) return null
        // find the root
        // root value equals preOrder[preOrderStart]
        // search for the index of this value from the inOrder array

        // leftCount equals rootIndex - inOrderStart
        let rootIndex = inOrderMap[preOrder[preOrderStart]]
        let leftCount = rootIndex - inOderStart

        // create root node
        let root = new BinaryTreeNode(preOrder[preOrderStart])

        // create the left node
        root.left = helper(preOrder,
            preOrderStart + 1,
            preOrderStart + leftCount,
            inOrder,
            inOrderStart, rootIndex - 1)

        // create the right node
        root.left = helper(preOrder,
            preOrderStart + leftCount + 1,
            preOrderEnd,
            inOrder,
            rootIndex + 1, inOrderEnd)

        
        return root
    }

    return helper(preOrderCollection, 0, preOrderCollection.length - 1, inOrderCollection, 0, inOrderCollection.length - 1)
}