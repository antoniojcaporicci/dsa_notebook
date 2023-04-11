const first = [1, 3, 5]
const second = [2, 4, 6, 0, 0, 0]

function merge_one_into_another(first, second) {
    const helper = (subset) => {
        if (subset.length === 1) {
            return subset;
        }

        // split subset and recurse
        const mid = Math.floor(subset.length / 2);
        const firstHalf = helper(subset.slice(0, mid));
        const secondHalf = helper(subset.slice(mid));
        const newArr = [];

        // merge two halves if greater or equal
        while (firstHalf.length && secondHalf.length) {
            if (firstHalf[0] > secondHalf[0]) {
                newArr.push(secondHalf.shift());
            } else {
                newArr.push(firstHalf.shift());
            }
        }

        // append any remaining elements
        return newArr.concat(firstHalf, secondHalf);
    };

    const arr = [...second.slice(0, Math.floor(second.length / 2)), ...first]

    return helper(arr);
}

console.log(merge_one_into_another(first, second))