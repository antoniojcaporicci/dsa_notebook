function uniquePathsWithObstacles(obstacleGrid) {
    // [
    //     [1,1,1],
    //     [1,0,1],
    //     [1,1,0]
    // ]

    // iterate through rows
    // iterate through cols
    // otherwise 

    for (let row = 0; row <= obstacleGrid.length - 1; row++) {
        for (let col = 0; col <= obstacleGrid[row].length - 1; col++) {
            if (obstacleGrid[row][col] === 1) {
                // if value equals one
                // flip value to 0
                obstacleGrid[row][col] = 0
                continue
            }
            // if we are in row 0 or col 0             
            if (row === 0) {
                obstacleGrid[row][col] = 1
            } else if (col === 0) {
                obstacleGrid[row][col] = 1
            } else {
                obstacleGrid[row][col] = obstacleGrid[row - 1][col] + obstacleGrid[row][col - 1]
            }
        }
    }
    return obstacleGrid[obstacleGrid[0].length - 1][obstacleGrid.length - 1]
};



const testGrid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

console.log(uniquePathsWithObstacles(testGrid))