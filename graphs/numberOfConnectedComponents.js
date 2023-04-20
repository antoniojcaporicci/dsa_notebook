// input - n: 5, edgelist: [[0,1],[1,2],[3,4]]
// ^ output - 2

const { visitCommaListElements } = require("typescript")

// input - n: 5, edgelist: [[0,1],[1,2],[2,3],[3,4]]
// ^ output - 1

// Three secions needed for graphs
// 1 - build the graph
// 2 - BFS or DFS
// 3 - outer loop that explores the entire graph
const numberOfConnectedComponents = (n, edgeList) => {
    // create an adjacency list of length n filled with empty arrays
    let adjList = Array.from(Array(n), () => ([]))

    for (let i = 0; i < edgeList.length; i++) {
        adjList[edgeList[i][0]].push(edgeList[i][1])
        adjList[edgeList[i][1]].push(edgeList[i][0])
    }

    // BFS
    // let queue = []
    // let visited = []
    // let i = 0
    // visited[i] = 1
    // queue.push(i)

    // while (queue.length) {
    //     // need to know which nodes have been visited
    //     queue.pop()

    //     for (let neighbor of adjList[i]) {
    //         if (visited[neighbor] === undefined) {
    //              visited[neighbor] = 1
    //              queue.push(neighbor)
    //         }
    //     }
    //     i++
    // }

    // DFS
    // explore graph from node 
    // let visited = []
    // const helper = (node) => {
    //     visited[nodeIndex] = 1
    //     for (let neighbor of adjList[i]) {
    //         helper(neighbor)
    //     }

    // }

    // helper(adjList)

    // launch outer loop
    let unconnected = 0
    for (let i = 0; i < adjList.length; i++) {
        if (visited[i] === undefined) {
            unconnected++
            helper(i)
        }
    }

    return unconnected
}