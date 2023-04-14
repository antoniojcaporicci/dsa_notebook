
export default class BinaryTreeNode {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }

    search = (root, value) => {
        if (root.value === null) {
            return null
        }

        let curr = root

        while (curr !== null) {
            if (curr.value === value) {
                return curr
            } else if (value < curr.value) {
                curr = curr.left
            } else {
                curr = curr.right
            }
        }

        return null
    }

    insert = (root, value) => {
        if (root.value === null) {
            return new BinaryTreeNode(value)
        }

        let newNode = new BinaryTreeNode(value)
        let prev = null
        let curr = root

        while (curr !== null) {
            if (curr.value === value) {
                'value already exists'
                return curr
            } else if (value < curr.value) {
                prev = curr
                curr = curr.left
            } else {
                prev = curr
                curr = curr.right
            }
        }

        if (value < prev.value) {
            prev.left = newNode
        } else {
            prev.right = newNode
        }

        return root
    }

    insertCollection = (collection) => {
        let i = 0
        while (i < collection.length) {
            this.insert(this, collection[i])
            i++
        }

        return this
    }

    findMin = () => {
        if (this.value === null) return null

        let curr = this

        while (curr.left !== null) {
            curr = curr.left
        }

        return curr.value
    }

    delete = (value) => {
        let curr = this
        let prev = null

        while (curr !== null) {
            if (value === curr.value) {
                break
            } else if (value < curr.value) {
                curr = curr.left
                prev = curr
            } else {
                curr = curr.right
                prev = curr
            }
        }

        // four cases
        // 1 - value doesnt exist
        if (curr.value === null) {
            return curr
            // 2 - node is a leaf
        } else if (!curr.right && !curr.left) {
            // one node tree edge case
            if (prev === null) return null
            if (prev.right.value === curr.value) {
                prev.right === null
            } else {
                prev.left === null
            }
            // 3 - node has right or left subtree only
        } else if (!!curr.right && !curr.left || !!curr.left && !curr.right) {
            // one node tree edge case
            if (prev === null) {
                root = curr
                return root
            }
            if (prev.right.value === curr.value) {
                if (!!curr.right) {
                    prev.right = curr.right
                } else {
                    prev.right = curr.left
                }
            } else {
                if (!!curr.right) {
                    prev.left = curr.right
                } else {
                    prev.left = curr.left
                }
            }
            // 4 - node has right and left subtree
        } else if (!!curr.right && !!curr.left) {
            // need the predecessor or successor 
            let succ = curr.right
            let succPrev = curr

            while (succ.left !== null) {
                succPrev = succ
                succ = succ.left
            }

            curr.value = succ.value

            if (succ.value === succPrev.left.value) {
                succPrev.left = succ.right
            } else {
                succPrev.right = succ.left
            }
        }


        return this
    }
}

// const tree = new BinaryTreeNode(9)

// tree.insertCollection([1, 3, 5, 7, 11])

// tree.insert(tree, 13)

// console.log(tree.delete(5))