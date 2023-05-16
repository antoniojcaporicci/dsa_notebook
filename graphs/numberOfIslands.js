const numIslands = (grid) => {
    // construct visited grid
    const visited = Array.from(Array(grid.length), () => Array.from(Array(grid[0].length), () => '-'))

    // define bfs to verify neighbors are islands and have not been visited
    const bfs = (grid, row, col) => {
        let queue = []

        queue.push([row, col])

        while (queue.length) {
            let [r, c] = queue.shift()

            // check if current cell is island
            if (grid[r][c] === '1') {
                let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

                for (let [dr, dc] of directions) {
                    let neighborRow = r + dr
                    let neighborCol = c + dc
                    let isInbounds = neighborRow <= grid.length - 1 && neighborCol <= grid[0].length - 1 && neighborRow >= 0 && neighborCol >= 0
                    if (isInbounds && grid[neighborRow][neighborCol] === '1'
                        && visited[neighborRow][neighborCol] === '-') {
                        visited[neighborRow][neighborCol] = 'v'
                        queue.push([neighborRow, neighborCol])
                    }
                }
            }
        }
    }

    // establish island count
    let islands = 0
    // iterate through grid to search for islands
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1' && visited[row][col] !== 'v') {
                visited[row][col] = 'v'
                islands++
                bfs(grid, row, col)
            }
        }
    }

    return islands
}

const test = [
    ['1', '1', '0', '0'],
    ['1', '1', '0', '0'],
    ['0', '1', '1', '0'],
    ['0', '0', '0', '1']
]

console.log(numIslands(test))