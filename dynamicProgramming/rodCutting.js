const rodCutting = (rowSize, prices) => {
    let table = new Array(rowSize+1)

    table[0] = 0
    
    for (let rod_size = 1; rod_size < rowSize; rod_size++) {
        table[rod_size] = 0
        for (let cut_size = 1; cut_size < rod_size; cut_size++) {
            table[rod_size] = Math.max(prices[cut_size] + table[rod_size - cut_size], table[rod_size])
        }
    }

    return table[rowSize]
}

console.log(rodCutting(4, [0,2,5,7,8]))