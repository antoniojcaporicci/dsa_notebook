function number_of_connected_components(n, edges) {
    // create adjList of length n populated by edges
    let adjList = Array.from(Array(n), () => ([]))
    let visited = Array.from(Array(n), () => (-1))

    for (let i = 0; i < edges.length; i++) {
        adjList[edges[i][0]].push(edges[i][1])
        adjList[edges[i][1]].push(edges[i][0])
    }

    // launch bfs on graph and keep track of visited
    const bfsHelper = (graphNode, adjList, visited) => {
        let queue = []
        let i = 0
        queue.push(graphNode)

        while (queue.length) {
            let node = queue.pop()
            let neighbors = adjList[node]

            for (let j = 0; j < neighbors.length; j++) {
                if (visited[neighbors[j]] === -1) {
                    visited[neighbors[j]] = 1
                    queue.push(neighbors[j])
                }
            }
            i++
        }
    }

    // start traversal at node 0
    bfsHelper(0, adjList, visited)

    let unconnected = 1
    // run outer loop to catch any unconnected components
    for (let i = 1; i < visited.length; i++) {
        if (visited[i] === -1) {
            unconnected++
            bfsHelper(i, adjList, visited)
        }
    }

    return unconnected
}

const inputs = {
    "n": 4,
    "edges": [[0 , 1], [0 , 3], [0 , 2], [2 , 1], [2 , 3]]
    }

number_of_connected_components(inputs.n, inputs.edges)