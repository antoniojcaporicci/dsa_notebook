import BinaryTreeNode from './binarySearchTree.js'

const is_symmetric = (tree) => {
    const verifyRowIsSymmetric = (array) => {
        let leftPointer = 0;
        let rightPointer = array.length - 1;
        let arrayIsSymmetrical = true;
    
        while (leftPointer < rightPointer) {
          if (array[leftPointer] === array[rightPointer]) {
            leftPointer++;
            rightPointer--;
          } else {
            arrayIsSymmetrical = false;
            break;
          }
        }
    
        return arrayIsSymmetrical;
    }

    function create2DArray(root) {
        const result = [];
      
        const helper = (node, level) => {
          if (!node) {
            return;
          }
      
          if (!result[level]) {
            result[level] = [];
          }
      
          result[level].push(node.value);
      
          helper(node.left, level + 1);
          helper(node.right, level + 1);
        }
      
        helper(root, 0);
      
        return result;
    }

    const twoD = create2DArray(tree)

    let isSymmetric = true

    while (isSymmetric || i <= twoD.length - 1) {
        for (let row in twoD) {
            if (row.length > 1) {
                isSymmetric = verifyRowIsSymmetric(row)
                i++
            }
        }
    }

    return isSymmetric
}

const root = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        },
        right: {
            value: 5
        }
    },
    right: {
        value: 2,
        left: {
            value: 5
        },
        right: {
            value: 4
        }
    }
}

console.log(is_symmetric(root))

// console.log(result)
