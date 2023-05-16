const pacificAtlantic = (heights) => {
    // construct empty result array
    let result = []

    const dfs = (row, col, flowsToAtlantic, flowsToPacific) => {
        // for every cell within heights
        // need to ask
        // do your neighbors have lower heights and hit
        // [0, whatever] (pacific top)
        // [whatever, 0] (pacific left)
        // [4, whatever] (atlantic right)
        // [whatever, 4] (atlantic bottom)
        if (flowsToAtlantic && row === 4 || col === 4) {
            return true
        } else if (flowsToPacific && row === 0 || col === 0) {
            return true
        } else if (flowsToAtlantic && row !== 4 || col !== 4) {
            if (row + 1 < heights.length && heights[row][col] >= heights[row + 1][col]) dfs(row + 1, col, flowsToAtlantic, flowsToPacific)
            if (row + 1 < heights.length && heights[row][col] >= heights[row][col + 1]) dfs(row, col + 1, flowsToAtlantic, flowsToPacific)
        } else if (flowsToPacific && row !== 0 || col !== 0) {
            if (col - 1 >= 0 && heights[row][col] >= heights[row - 1][col]) dfs(row - 1, col, flowsToAtlantic, flowsToPacific)
            if (col - 1 >= 0 && heights[row][col] >= heights[row][col - 1]) dfs(row, col - 1, flowsToAtlantic, flowsToPacific)
        } else {
            return false
        }
    }

    // outer for loop to hit every cell O(m*n)
    for (let row = 0; row < heights.length; row++) {
        for (let col = 0; col < heights[0].length; col++) {
            let flowsToAtlantic = dfs(row, col, true, false)
            let flowsToPacific = dfs(row, col, false, true)

            if (flowsToAtlantic && flowsToPacific) {
                result.push([row, col])
            }
        }
    }

    return result
};

// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

const testHeights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
]

console.log(pacificAtlantic(testHeights))


/**
 * 
 * bard solution:
 * function pacificAtlantic(heights) {
    // construct empty result array
    let result = [];

    // helper function to check if a cell can reach the Pacific Ocean
    const canReachPacific = (row, col) => {
        // if the cell is on the top row or the left column, it can reach the Pacific Ocean
        if (row === 0 || col === 0) {
        return true;
        }

        // if the cell is above or to the left of a cell that can reach the Pacific Ocean, it can reach the Pacific Ocean
        if (row > 0 && heights[row - 1][col] >= heights[row][col]) {
        return canReachPacific(row - 1, col);
        }

        if (col > 0 && heights[row][col - 1] >= heights[row][col]) {
        return canReachPacific(row, col - 1);
        }

        // otherwise, the cell cannot reach the Pacific Ocean
        return false;
    };

    // helper function to check if a cell can reach the Atlantic Ocean
    const canReachAtlantic = (row, col) => {
        // if the cell is on the bottom row or the right column, it can reach the Atlantic Ocean
        if (row === heights.length - 1 || col === heights[0].length - 1) {
        return true;
        }

        // if the cell is below or to the right of a cell that can reach the Atlantic Ocean, it can reach the Atlantic Ocean
        if (row < heights.length - 1 && heights[row + 1][col] >= heights[row][col]) {
        return canReachAtlantic(row + 1, col);
        }

        if (col < heights[0].length - 1 && heights[row][col + 1] >= heights[row][col]) {
        return canReachAtlantic(row, col + 1);
        }

        // otherwise, the cell cannot reach the Atlantic Ocean
        return false;
    };

    // use a queue to store the cells that have already been visited
    const visited = new Set();

    // use a recursive function to find all the cells that can reach both the Pacific Ocean and the Atlantic Ocean
    const dfs = (row, col) => {
        // if the cell has already been visited, return
        if (visited.has(row * heights[0].length + col)) {
        return;
        }

        // if the cell can reach both the Pacific Ocean and the Atlantic Ocean, add it to the result
        if (canReachPacific(row, col) && canReachAtlantic(row, col)) {
        result.push([row, col]);
        }

        // mark the cell as visited
        visited.add(row * heights[0].length + col);

        // recursively search all the neighboring cells
        if (row > 0 && heights[row - 1][col] >= heights[row][col]) {
        dfs(row - 1, col);
        }

        if (col > 0 && heights[row][col - 1] >= heights[row][col]) {
        dfs(row, col - 1);
        }

        if (row < heights.length - 1 && heights[row + 1][col] >= heights[row][col]) {
        dfs(row + 1, col);
        }

        if (col < heights[0].length - 1 && heights[row][col + 1] >= heights[row][col]) {
        dfs(row, col + 1);
        }
    };

    // call the recursive function on all the cells
    for (let row = 0; row < heights.length; row++) {
        for (let col = 0; col < heights[0].length; col++) {
        dfs(row, col);
        }
    }

    return result;
    }
 */