const subsets = (n, k) => {
    if (k === 0 || k === n) {
        return 1
    }

    let table = Array.from(Array(n+1), () => Array.from(k+1))

    for (let i = 1; i < n; i++) {
        table[i][0] = 1
    }

    for (let j = 1; j < k; j++) {
        table[j][j] = 1
    }
    
    for (let row = 2; row < n+1; row++) {
        for (let col = 1; col < Math.min(row, k); col++) {
            table[row][col] = table[row-1][col] + table[row-1][col-1]
        }
    }
    
    return table[n][k-1]
}

console.log(subsets(5, 3))