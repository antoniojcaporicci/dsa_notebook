function largest_connected_component(grid) {
    // step one - create a graph representation.
    let visited = Array.from(Array(grid.length), () => Array.from(Array(grid[0].length), () => (-1)))
    let unconnectedComponentSize = [0]
    let unconnectedComponentIndex = 0

    // traverse the graph with dfs
    const dfsHelper = (grid, x, y, unconnectedComponentIndex) => {
        if (x < 0 || y < 0 || x > grid.length-1 || y > grid[0].length-1 || grid[x][y] === 0 || visited[x][y] === 1) return
    
        if (grid[x][y] === 1) {
            unconnectedComponentSize[unconnectedComponentIndex]++
            visited[x][y] = 1
        }
    
        dfsHelper(grid, x + 1, y, unconnectedComponentIndex)
        dfsHelper(grid, x, y + 1, unconnectedComponentIndex)
        dfsHelper(grid, x - 1, y, unconnectedComponentIndex)
        dfsHelper(grid, x, y - 1, unconnectedComponentIndex)
    }

    dfsHelper(grid, 0, 0, unconnectedComponentIndex)


    // find the largest of all the components with an outer for loop
    for (let i = 0; i < visited.length; i++) {
        for (let j = 0; j < visited[0].length; j++) {
            if (grid[i][j] === 1 && visited[i][j] === -1) {
                unconnectedComponentIndex++
                unconnectedComponentSize[unconnectedComponentIndex] = 0
                dfsHelper(grid, i, j, unconnectedComponentIndex)
            }
        }
    }
    return unconnectedComponentSize
}

const grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [1, 0, 0, 1, 1],
]

console.log(largest_connected_component(grid))