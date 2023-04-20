// a tree is a connected graph with no cycles
// input - n: 5, edgelist: [[0,1],[0,2],[0,3],[1,4]]
// ^ output - true

// input - n: 5, edgelist: [[0,1],[0,2],[2,3],[0,3],[1,4]]
// ^ output - false

const isGraphValidTree = (n, edgelist) => {

    let nodeIndex = 0
    let graphNodes = Array.from(Array(n), () => (nodeIndex))
    let adjList = Array.from(Array(n), () => ([]))

    for (let i = 0; i < edgeList.length; i++) {
        adjList[edgeList[i][0]].push(edgeList[i][1])
        adjList[edgeList[i][1]].push(edgeList[i][0])
    }

    // BFS
    const bfsHelper = () => { 
        let queue = []
        let visited = Array.from(Array(n), () => (-1))
        let parent = Array.from(Array(n), () => (-1))
    
        let i = 0
        visited[i] = 1
        queue.push(i)
    
        while (queue.length) {
            // need to know which nodes have been visited
            let node = queue.pop()
    
            for (let neighbor of adjList[i]) {
                if (visited[neighbor] === -1) {
                     visited[neighbor] = 1
                     parent[neighbor] = node
                     queue.push(neighbor)
                } else if (neighbor !== parent[node]) {
                    // if neighbor is not my own parent
                    // then return true because I am looking at a cross edge
                    return true
                }
    
            }
            i++
        }
    }

    bfsHelper(adjList[0])

    // outer loop
    for (let i = 0; i < graphNodes.length; i++) {
        if (visited[i] === undefined) {
            return false
        }
    }

    return true
}