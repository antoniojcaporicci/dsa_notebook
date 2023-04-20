// const binaryStringCombinations = (n) => {
//     const bsHelper = (slate, n, arr = []) => {
//         if (n === 0) {
//             arr.push(slate)
//         } else {
//             for (let i = 0; i <= 9; i++) {
//                 bsHelper(slate + i.toString(), n-1, arr)
//             }
//         }
//         return arr
//     }

//     return bsHelper('', n)
// }

// console.log(binaryStringCombinations(2))

const get_permutations = (list) => {
    const helper = (s, i, slate, arr = []) => {
        if (i === s.length) {
            arr.push(slate.slice()) // make copy?
            return
        }

        for (let j = i; j <= s.length-1; j++) {
            // sandwich recursion for mutable items
            [s[i], s[j]] = [s[j], s[i]]
            slate.push(s[i])
            helper(s, i+1, slate, arr)
            slate.pop()
            [s[j], s[i]] = [s[i], s[j]]
        }

        return arr
    }

    return helper(list, 0, [])
}

function get_permutations(arr) {
    const helper = (set, i, slate, arr = []) => {
        // base case
        if (i === set.length) {
            arr.push(slate.slice())
            return arr
        }
        
        for (let j = i; j <= set.length-1; j++) {
            [set[i], set[j]] = [set[j], set[i]] 
            slate.push(set[i])
            helper(set, i+1, slate, arr)
            slate.pop()
            [set[j], set[i]] = [set[i], set[j]]
        }
        return arr
    }
    
    return helper(arr, 0, [])
}
  

console.log(get_permutations([1,2,3]))