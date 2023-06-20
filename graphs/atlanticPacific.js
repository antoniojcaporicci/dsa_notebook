/*
 * Input: heights = [
 *   [1,2,2,3,5],
 *   [3,2,3,4,4],
 *   [2,4,5,3,1],
 *   [6,7,1,4,5],
 *   [5,1,1,2,4]
 * ]
 * Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
 * Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
 * [0,4]: [0,4] -> Pacific Ocean 
 */
const pacificAtlantic = (heights) => {
    // look at every cell (iterate through r & c)
    // ask - does this cell have a path that leads to atlantic and pacific
    // ^ bfs
    // can mark boxes as visited to denote that that particular cell has been seen and which water it flows to
    // Value, A, P?
    // if so - add to res
    // if not, continue iterating
    for (let row = 0; row < heights.length; row++) {
        for (let col = 0; col < heights.length; col++) {

        }
    }

}


heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
]

pacificAtlantic(heights)