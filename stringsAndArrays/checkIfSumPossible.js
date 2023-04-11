function check_if_sum_possible(arr, k) {
    const reducedValuesExceedK = (partialSet, k) => {
        let i = 0
        let acc = 0
        let totalExceedsK = false
        while (!totalExceedsK && partialSet.length && i < partialSet.length) {
            acc += partialSet[i]
            i++
            totalExceedsK = acc > k
        }
        return totalExceedsK
    }
    
    const reducedValues = (slate) => {
        return slate.length ? slate.reduce((curr, acc) => acc += curr) : 0
    }
        
    // recursive helper function to create the power set
    const helper = (s, i, slate, powerSet = []) => {
        // prune case - if values in slate exceed k, return arr
        if (slate.length && reducedValuesExceedK(slate, k)) {
            return powerSet
        }
        
        // base case
        if (i >= s.length) {
            if (slate.length && reducedValues(slate) === k) {
                powerSet.push(slate.slice())
            }
            return powerSet
        }
        
        // include curr value in subset
        slate.push(s[i])
        helper(s, i+1, slate, powerSet)
        slate.pop()
        
        // exclude curr value
        helper(s, i+1, slate, powerSet)
        return powerSet
    }
    return helper(arr, 0, []).length
}

console.log(check_if_sum_possible([2, 4, 1], 6))