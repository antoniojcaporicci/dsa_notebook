// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
const exist = (board, word) => {
    let exists = false
    let length = board.length
    let width = board[0].length

    const dfs = (row, col, partial) => {
        // verify we are inbounds
        if (row > length - 1 || row < 0 || col > width - 1 || col < 0) {
            return
        }

        // if we only have one letter left, and the current cell matches the partial
        if (partial.length === 1 && board[row][col] === partial) {
            exists = true
            return
        }

        let firstChar = partial.substring(0, 1)
        let rest = partial.substring(1, partial.length)

        if (firstChar === board[row][col]) {
            // rescursively search all neighbors with val.partial(1)
            dfs(row + 1, col, rest)
            dfs(row, col + 1, rest)
            dfs(row - 1, col, rest)
            dfs(row, col - 1, rest)
        }
    }

    // traverse graph
    for (let row = 0; row < length - 1; row++) {
        for (let col = 0; col < width - 1; col++) {
            // launch dfs to find word
            dfs(row, col, word)
        }
    }

    return exists
}

console.log(exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
], "SEE"))