const stairs = (n) => {
    if (n === 1) return 1
    if (n === 2) return 2

    let table = []
    table[0] = 0
    table[1] = 1
    table[2] = 2

    for (let i = 3; i <= n; i++) {
        table[i] = table[i-1] + table[i-2]
    }

    return table[n]
}

console.log(stairs(4))