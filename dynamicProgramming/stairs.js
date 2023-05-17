// const stairs = (n) => {
//     if (n === 1) return 1
//     if (n === 2) return 2

//     let table = []
//     table[0] = 0
//     table[1] = 1
//     table[2] = 2

//     for (let i = 3; i <= n; i++) {
//         table[i] = table[i-1] + table[i-2]
//     }

//     return table[n]
// }

function climbStairs(n) {
    const memo = {}
    const helper = (stairs, memo) => {
        if (stairs === 2) return 2
        if (stairs === 1) return 1

        if (!memo[stairs]) {
            memo[stairs] = helper(stairs - 1, memo) + helper(stairs - 2, memo)
        }

        return (memo[stairs - 1] || helper(stairs - 1, memo)) + (memo[stairs - 2] || helper(stairs - 2, memo))
    }

    return helper(n, memo)
};

console.log(climbStairs(45))