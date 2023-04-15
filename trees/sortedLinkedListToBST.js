
const LinkedListNode = class {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert = (newNode) => {
        // LL: -1, 2, 3, 5, 6, 7, 10
        // Tree: 
        /**
         *              5
         *          /       \
         *      3               6
         *  /       \       /       \
         * -1       2       7       10
         */

        let prev = null
        let curr = this
        let value = newNode.value

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

        return this
    }
}

/**
 * @param {LinkedListNode_int32} head
 * @return {BinaryTreeNode_int32}
 */
function sorted_list_to_bst(head) {

    let curr = head
    let tree = null
    let sortedArray = []

    while (curr !== null) {
        sortedArray.push(curr.value)
        curr = curr.next
    }

    // for every value, create a node
    while (sortedArray.length) {
        // mutate array 
        let value = sortedArray.splice(Math.floor(sortedArray.length / 2), 1)

        let newNode = new BinaryTreeNode(value)

        if (!tree) {
            tree = newNode
        }
        tree.insert(newNode)
    }

    return tree
}


const list = new LinkedListNode(-1)
list.next = new LinkedListNode(2)
list.next.next = new LinkedListNode(3)
list.next.next.next = new LinkedListNode(5)
list.next.next.next.next = new LinkedListNode(6)
list.next.next.next.next.next = new LinkedListNode(7)
list.next.next.next.next.next.next = new LinkedListNode(10)

sorted_list_to_bst(list)


