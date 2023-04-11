// Write a function that returns the number of distinct binary search trees that can be constructed with n nodes. 
// For the purpose of this exercise, do solve the problem using recursion first even if you see some non-recursive approaches.

function how_many_bsts(n) {
    // do we have to make all the possible bsts in order to count them?
    const helper = (n) => {
        if (n === 0 || n === 1) {
            return 1
        }

        let res = 0

        for (let i = 1; i <= n; i++) {
            res = res + (helper(i - 1) * helper(n - 1))
        }

        return res
    }

    return helper(n)
}

console.log(how_many_bsts(3))