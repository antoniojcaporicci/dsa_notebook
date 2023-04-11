function tower_of_hanoi(n) {
    const res = []
    const diskMover = (n, start, end) => {
        // base case - if n equals 1, insert a move of rod 1 to rod 3
        if (n === 1) {
            res.push([start, end])
            return
        }
        let other = 6 - (start + end)
        diskMover(n-1, start, other)
        res.push([start, end])
        diskMover(n-1, other, end)
    }

    diskMover(n, 1, 3)
    return res
}

console.log(tower_of_hanoi(3))