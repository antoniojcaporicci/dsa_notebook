const subsets = (collection) => {
    const hashMap = {}

    const helper = (original, i, slate, arr = []) => {
        // check to see if we already have this set
        // base case 
        if (i >= original.length && !hashMap[slate.join('')]) {
            hashMap[slate.join('')] = true
            arr.push(slate.slice())
            return arr
        }

        // include value
        slate.push(original[i])
        helper(original, i + 1, slate, arr)
        slate.pop()
        // exclude

        helper(original, i + 1, slate, arr)
        return arr
    }
    return helper(collection, 0, [])
}

const testCollection = [1, 2, 3]
const dupCollection = [1, 2, 2]
console.log(subsets(dupCollection))