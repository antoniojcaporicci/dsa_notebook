/**
 *  Time Complexity
 *         0
 *         ^
 *        0  0
 *        |  |
 *        0  0
 *        |  |
 *        ^  ^
 *      0  0  0  0
 *      |  |  |  |
 *      0  0  0  0
 *
 *  worst case, you have a branch factor of 2.
 *  Height of tree equals n => 2^n
 *  how much work does each node do?
 *  the leaf level node performs a constant operation
 *  n manager level performs constant amount of work
 *  unless you account for copying and manipulating the string - strings are immutable
 *  so you get height of tree times the amount of work each node does
 *  O(2^n * n)
 */

/**
 * Space complexity
 *  - explicit (based on the inputs)
 *      - O(2^n * n)
 *  - implicit (a result of the algorithm)
 *      - as the call stack grows, the partial solutions grow for n calls
 *      - O(n^2) because of the immutable strings
 *      - ^ this can be optimized, change S to an array
 */


const stringPermutations = (s) => {
    const helper = (string, slate, i, arr = []) => {
        if (i === string.length) {
            arr.push(slate)
            return
        }

        if (!Number(string[i])) {
            let upperSlate = slate + string[i].toUpperCase()
            let lowerSlate = slate + string[i].toLowerCase()
            
            helper(string, upperSlate, i + 1, arr)
            helper(string, lowerSlate, i + 1, arr)
        } else {
            // curr string is a number
            helper(string, slate + string[i], i + 1, arr)
        }

        return arr
    }

    return helper(s, '', 0)
}

console.log(stringPermutations('a1b2'))