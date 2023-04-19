class Tree {
        constructor(value) {
                this.value = value
                this.right = null
                this.left = null
        }

        insert = (value) => {
                if (!this.value) {
                        this.value = value
                        return this
                }

                let newNode = new Tree(value)
                let curr = this

                while (curr) {
                        if (curr.value > newNode.value) {
                                if (!curr.left) {
                                        curr.left = newNode
                                        curr = newNode.left
                                } else {
                                        curr = curr.left
                                }
                        } else if (curr.value < newNode.value) {
                                if (!curr.right) {
                                        curr.right = newNode
                                        curr = newNode.right
                                } else {
                                        curr = curr.right
                                }
                        }

                }
                return this
        }

        preOrderDepthFirstSearch = (root) => {
//              if (!root.left && !root.right) {
//                      console.log(root.value)
//                      return
//              }

                console.log(root.value)
                if(root.left) this.preOrderDepthFirstSearch(root.left)
                if(root.right) this.preOrderDepthFirstSearch(root.right)

                return
        }

        paths = () => {
                const result = []

                const helper = (root,slate) => {

                        if (!root.left && !root.right) {
                                slate.push(root.value)
                                result.push(slate.slice())
                                slate.pop()
                                return
                        }


                        slate.push(root.value)
                        if (root.left) helper(root.left,slate)
                        if (root.right) helper(root.right,slate)

                        slate.pop()
                }

                helper(this,[])
                return result
        }
}


const testTree = new Tree(5)
testTree.insert(1)
testTree.insert(3)
testTree.insert(7)
testTree.insert(8)
testTree.insert(2)
