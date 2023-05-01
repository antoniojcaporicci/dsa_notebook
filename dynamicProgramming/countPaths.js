const countPaths = (m,n) => {
    let table = Array.from(Array(m), () => Array.from(n))

    for (let i = 0; i <= m-1; i++) {
        table[i][0] = 1
    }

    for (let j = 0; j <= n-1; j++) {
        table[0][j] = 1
    }

    for (let row = 1; row < n; row++) {
        for (let col = 1; col < m; col++) {
            table[row][col] = table[row-1][col] + table[row][col-1]
        }
    }

    return table[m-1][n-1]
}

console.log(countPaths())