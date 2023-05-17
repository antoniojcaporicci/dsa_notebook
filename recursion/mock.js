// Given a sorted array key [0.. n-1] of search keys and an array freq[0.. n-1] of frequency counts, 
// where freq[i] is the number of searches for keys[i]. 
// Construct a binary search tree of all keys such that the total cost of all the searches is as small as possible.
// Input:  keys[] = {10, 12, 20}, freq[] = {34, 8, 50}
// There can be following possible BSTs
//     10                12                 20         10              20
//       \             /    \              /             \            /
//       12          10     20           12               20         10  
//         \                            /                 /           \
//          20                        10                12             12  
//      I               II             III             IV             V
// Among all possible BSTs, cost of the fifth BST is minimum.
// Cost of the fifth BST is 1*50 + 2*34 + 3*8 = 142

const costOfBinaryTree = (keys, freq) => {
    const helper = (i, j, depth) => {
        // base case
        // return requency * depth
        if (i === j) {
            return freq[i] * depth
        }


        // recursive case
        // need to know which frequency times depth is less
        let curr_min = Infinity

        // min (depth * freq[k] + minCost(i.. k-1) + minCost(k+1, j))
        for (let k = i; k < j; k++) {
            let cost = freq[k] * depth + helper(i, k - 1, depth + 1) + helper(k + 1, j, depth + 1)

            curr_min = Math.min(curr_min, cost)
        }
        return curr_min
    }

    return helper(0, 1, 1)
}

const keys = [10, 12]
const freq = [34, 50]

console.log(costOfBinaryTree(keys, freq))   