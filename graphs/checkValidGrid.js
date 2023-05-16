/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const checkValidGrid = (grid) => {
    // number of total moves should equal grid.length * grid[0].length - 1
    // possible knight moves are: 
    // grid[i+1][j+2]
    // grid[i-1][j+2]
    // grid[i+1][j-2]
    // grid[i-1][j-2]
    const totalMoves = (grid.length * grid[0].length) - 1
    let validGrid = false


    const getNextMoves = (grid, row, col) => {
        let nextMoves = {}

        if (row + 1 <= grid.length - 1) {
            nextMoves[grid[row + 1][col + 2] || 'out'] = [row + 1, col + 2]
            nextMoves[grid[row + 1][col - 2] || 'out'] = [row + 1, col - 2]
        }

        if (row - 1 >= 0) {
            nextMoves[grid[row - 1][col + 2] || 'out'] = [row - 1, col + 2]
            nextMoves[grid[row - 1][col - 2] || 'out'] = [row - 1, col - 2]
        }

        if (row + 2 <= grid.length - 1) {
            nextMoves[grid[row + 2][col + 1] || 'out'] = [row + 2, col + 1]
            nextMoves[grid[row + 2][col - 1] || 'out'] = [row + 2, col - 1]
        }

        if (row - 2 >= 0) {
            nextMoves[grid[row - 2][col + 1] || 'out'] = [row - 2, col + 1]
            nextMoves[grid[row - 2][col - 1] || 'out'] = [row - 2, col - 1]
        }

        return nextMoves
    }

    // create dfs to verify that one of the next possible moves matches i+1
    const dfs = (grid, row, col, i) => {
        if (i === totalMoves) {
            validGrid = true
            return
        }

        let nextMoves = getNextMoves(grid, row, col)

        if (Object.keys(nextMoves).includes(i.toString())) {
            dfs(grid, nextMoves[i.toString()][0], nextMoves[i.toString()][1], i + 1)
        } else {
            return
        }
    }

    dfs(grid, 0, 0, 1)
    return validGrid
};

console.log(checkValidGrid([
    [0, 5, 18, 9, 12, 27],
    [3, 8, 1, 28, 19, 10],
    [6, 17, 4, 11, 26, 13],
    [33, 2, 7, 22, 29, 20],
    [16, 23, 34, 31, 14, 25],
    [35, 32, 15, 24, 21, 30]
]
))