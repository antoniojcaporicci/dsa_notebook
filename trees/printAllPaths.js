import BinaryTreeNode from "./binarySearchTree.js"

export default function all_paths_of_a_binary_tree(tree) {

    // create a recursive helper
    // needs root, slate to keep track of path, and a results container for all paths
    const helper = (root, slate, arr = []) => {
        // base case
        if (!root.left && !root.right) {
            slate.push(root.value)
            arr.push(slate.slice())
            slate.pop(root.value)

            return arr
        }

        slate.push(root.value)
        // recursive case
        // push current root value into slate
        if (root.left) helper(root.left, slate, arr)
        if (root.right) helper(root.right, slate, arr)
        slate.pop()


        return arr
    }

    return helper(tree, [])
}

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
//   let root = new Node(1);
//   root.left = new Node(2);
//   root.right = new Node(3);
//   root.left.left = new Node(4);
//   root.left.right = new Node(5);
//   root.right.left = new Node(6);
//   root.right.right = new Node(7);

//   console.log(all_paths_of_a_binary_tree(root))