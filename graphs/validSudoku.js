const testSudoku = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

const isValidSudoku = (board) => {
    let subGrid = Array.from(Array(board.length), () => new Set())
    let rowSets = Array.from(Array(board.length), () => new Set())
    let colSets = Array.from(Array(board[0].length), () => new Set())

    const isValidSubGrid = (i, j) => {
        let index = Math.floor((i / 3) * 3 + (j / 3))

        if (!subGrid[index].has(board[i][j])) {
            subGrid[index].add(board[i][j])
            return true
        } else {
            return false
        }
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === '.') {
                continue
            }

            if (!rowSets[row].has(board[row][col])) {
                rowSets[row].add(board[row][col])
            }

            if (!colSets[col].has(board[col][col])) {
                colSets[col].add(board[row][col])
            }

            if (isValidSubGrid(row, col)) {
                continue
            } else {
                return false
            }
        }
    }

    return true
}

console.log(isValidSudoku(testSudoku))