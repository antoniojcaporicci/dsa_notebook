// input - n: 5, edgelist: [[0,1],[1,2],[3,4]]
// ^ output - 2

// input - n: 5, edgelist: [[0,1],[1,2],[2,3],[3,4]]
// ^ output - 1

// Three secions needed for graphs
// 1 - build the graph
// 2 - BFS or DFS
// 3 - outer loop that explores the entire graph
const numberOfConnectedComponents = (n, edgeList) => {
    // create an adjacency list of length n filled with empty arrays
    let adjList = Array.from(Array(n), () => ([]))
    let visited = Array.from(Array(n), () => (-1))

    for (let i = 0; i < edgeList.length; i++) {
        adjList[edgeList[i][0]].push(edgeList[i][1])
        adjList[edgeList[i][1]].push(edgeList[i][0])
    }

    // BFS
    const bfsHelper = (n, adjList, visited) => {
        let queue = []
        let i = 0
        visited[i] = 1
        queue.push(i)

        while (queue.length) {
            // need to know which nodes have been visited
            queue.pop()

            for (let neighbor of adjList[i]) {
                if (visited[neighbor] === -1) {
                    visited[neighbor] = 1
                    queue.push(neighbor)
                }
            }
            i++
        }
    }

    bfsHelper(n, adjList, visited)
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
    let unconnected = 1
    for (let i = 0; i < adjList.length; i++) {
        if (visited[i] === -1) {
            unconnected++
            bfsHelper(i, adjList, visited)
        }
    }

    return unconnected
}

console.log(numberOfConnectedComponents(5, [[0,1],[1,2],[2,3],[3,4]]))