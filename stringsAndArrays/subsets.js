// include and exclude is the strategy for any power set solution
// order does not matter in power sets
const defineSubsets = (set) => {
    const helper = (s, i, slate, arr = []) => {
        if (i >= s.length) {
            arr.push(slate.slice())
            return arr
        }

        // include for power set
        slate.push(s[i])
        helper(s, i+1, slate, arr)
        slate.pop()
        // exclude
        helper(s, i+1, slate, arr)
        return arr
    }
    return helper(set, 0, [])
}

console.log(defineSubsets([1,2,3]))