const testSudoku = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
    let subgrids = Array.from(Array(board.length), () => new Set())
    let rowSets = Array.from(Array(board.length), () => new Set())
    let colSets = Array.from(Array(board[0].length), () => new Set())

    // TODO: fix this
    const fillSubGridSets = (i, j) => {
        for (let k = i * 3; k < (i + 1) * 3; k++) {
            for (let l = j * 3; l < (j + 1) * 3; l++) {
                console.log(subgrids[i], [k, l])
                if (subgrids[i].has(board[k][l])) {
                    return false
                } else {
                    subgrids[i].add(board[k][l])
                }
            }
        }
    }

    // traverse graph with double for loop
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            fillSubGridSets(row, col)

            if (rowSets[row].has(board[row][col])) {
                return false
            } else {
                rowSets[row].add(board[row][col])
            }

            if (colSets[col].has(board[col][col])) {
                return false
            } else {
                colSets[col].add(board[row][col])
            }
        }
    }

    return true
}

console.log(isValidSudoku(testSudoku))