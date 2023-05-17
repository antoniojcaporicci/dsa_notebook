function countBits(n) {
    const countOnes = (s) => {
        return s.split('').reduce((acc, curr) => acc += Number(curr), 0)
    }
    return Array.from({ length: n + 1 }, (v, i) => {
        let bin = (i).toString(2)
        return countOnes(bin)
    })
}
console.log(countBits(5))