function number_of_connected_components(n, edges) {
    // create adjList of length n populated by edges
    let adjList = Array.from(Array(n), () => [])
    let visited = []

    for (let edge of edges) {
        adjList[edge[0]].push(edge[1])
        adjList[edge[1]].push(edge[0])
    }

    // perform bfs on adjList to determine how many neighbors a node has
    // toggle a neighbor to visited by adding to the visited set
    const bfs = (node, list) => {
        let queue = []
        queue.push(node)

        while (queue.length) {
            let newNode = queue.shift()
            if (!visited.includes(newNode)) {
                visited.push(newNode)

                for (let neighbor of list[newNode]) {
                    queue.push(neighbor)
                }
            }
        }
    }

    bfs(0, adjList)
    let connectedCount = 1

    for (let i = 1; i < adjList.length; i++) {
        if (!visited.includes(i)) {
            visited.push(i)
            connectedCount++
            bfs(i, adjList)
        }
    }

    return connectedCount
}

const inputs = {
    "n": 4,
    "edges": [[0, 1], [0, 3], [0, 2], [2, 1], [2, 3]]
}

console.log(number_of_connected_components(inputs.n, inputs.edges))