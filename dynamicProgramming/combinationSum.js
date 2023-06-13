// function combinationSum(candidates, target) {
//     const result = []

//     // look through every value in candidates and combine all possibilities to equal target
//     const dfs = (valuesSoFar, i, candidates, target, res) => {
//         // if valuesSoFar equals target, push valuesSoFar into res and return res
//         if (valuesSoFar.length && valuesSoFar.reduce((a, b) => a + b) === target) {
//             res.push(valuesSoFar.slice())
//             return res
//         }

//         // if we add the current value and do not go over
//         valuesSoFar.push(candidates[i])

//         // push value into valuesSoFar and call dfs 
//         if (valuesSoFar.reduce((a, b) => a + b) <= target) {
//             dfs(valuesSoFar, i, candidates, target, res)
//             valuesSoFar.pop()
//         }

//         // if we have a next value, add the next value and do not go over target
//         if (candidates[i + 1] !== undefined) {
//             valuesSoFar.push(candidates[i + 1])
//             if (valuesSoFar.reduce((a, b) => a + b) <= target) {
//                 dfs(valuesSoFar, i + 1, candidates, target, res)
//                 valuesSoFar.pop()
//             }
//         }
//         return res
//     }

//     for (let i = 0; i < candidates.length; i++) {
//         dfs([], i, candidates, target, result)
//     }
//     return result
// };

const combinationSum = function (candidates, target) {
    const helper = (candidates, target, i, slate, arr = []) => {
        // base case
        if (!candidates.length || i > candidates.length) {
            return arr
        }

        let total = slate.length ? slate.reduce((a, b) => a + b, 0) : 0

        if (total > target) {
            return arr
        }

        if (total === target) {
            arr.push(slate.slice())
            return arr
        }

        // add curr index into slate 
        slate.push(candidates[i])
        helper(candidates, target, i, slate, arr)
        slate.pop()

        if (candidates[i + 1] !== undefined) {
            helper(candidates, target, i + 1, slate, arr)
        }

        return arr
    }

    return helper(candidates, target, 0, [])
};

console.log(combinationSum([2, 3, 5], 8))