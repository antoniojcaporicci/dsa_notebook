const findTownJudge = (n, trustEdges) => {
    // Three secions needed for graphs
    // 1 - build the graph
    const trustCount = Array.from({ length: n }, () => 0)
    const judgeCount = Array.from({ length: n }, () => 0)

    for (let connnections of trustEdges) {
        // minus one for nodes starting at 1
        judgeCount[connnections[0]-1]--
        trustCount[connnections[1]-1]++
    }

    for (let i = 1; i < n; i++) {
        if (judgeCount[i] === 0 && trustCount[i] === n-1) return i
    }
    return -1
}

const judgeFourConnections = [
    [1, 4],
    [2, 4],
    [3, 4]
]

console.log(findTownJudge(4, judgeFourConnections))