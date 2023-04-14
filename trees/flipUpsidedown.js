import all_paths_of_a_binary_tree from './printAllPaths.js'

// function flip_upside_down(root) {
//     // create helper that takes in root only
//     const helper = (root) => {
//         // base case
//         // when there are no children, and this is the left child of the prev node
//         // return curr
//         if (!root.left && !root.right) {
//             return
//         }

//         let curr = root
//         let newRoot
//         // if curr node has two children 
//         if (curr.right && curr.left) {
//             newRoot = curr.left
//             newRoot.left = curr.right
//             newRoot.right = curr
//         }

//         helper(newRoot.left)

//         return newRoot
//     }

//     return helper(root)
// }

function flip_upside_down(root) {
    // create helper that takes in root only
    const helper = (root) => {
      // base case
      if (!root || !root.left) {
        return root;
      }
  
      const newRoot = helper(root.left);
  
      root.left.left = root.right;
      root.left.right = root;
  
      root.left = null;
      root.right = null;
  
      return newRoot;
    }
  
    return helper(root);
  }

class Node {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
}

let tree = new Node(1)
tree.left = new Node(2)
tree.right = new Node(3)
tree.left.left = new Node(4)
tree.left.right = new Node(5)
tree.right.left = new Node(6)
tree.right.right = new Node(7)


console.log(flip_upside_down(tree))