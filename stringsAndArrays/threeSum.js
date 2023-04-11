const unsorted = [10, 3, -4, 1, -6, 9, 10]

function find_zero_sum(arr) {
    const answer = []

    const buildHashMap = () => {
        let index = 0
        const hm = {}
        while (index < arr.length - 1) {
            if (hm[arr[index]] === undefined) {
                hm[arr[index]] = index
                index++
            }
        }
        return hm
    }

    const hashMap = buildHashMap()
    const answerHashMap = {}
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            const target = 0 - (arr[i] + arr[j])
            

            if (hashMap[target]) {
                const sorted = [arr[i],arr[j],target].sort().join()
                
                if (answerHashMap[sorted] === undefined) {
                    answerHashMap[sorted] = true
                    answer.push(sorted)
                }
            }
        }
    }

    return answer
}

console.log(find_zero_sum(unsorted))