const words = ["car", "bus", "taxi", "car", "driver", "candy", "race", "car", "driver", "fare", "taxi"]

function k_most_frequent(k, words) {
    const hashMap = {}

    for (let i = 0; i < words.length; i++) {
        if (!hashMap[words[i]]) {
            hashMap[words[i]] = 1
        } else {
            hashMap[words[i]]++
        }
    }

    const frequencyArray = Object.entries(hashMap)


    frequencyArray.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0]
        } else {
            return b[1] - a[1]
        }
    })

    return frequencyArray.reduce((acc, curr, i) => {
        if (i <= k - 1) {
            acc.push(curr[0])
            return acc
        } else {
            return acc
        }
    }, [])
}

console.log(k_most_frequent(4, words))