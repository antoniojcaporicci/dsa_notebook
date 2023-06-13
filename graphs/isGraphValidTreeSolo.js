const isGraphValidTree = (n, edges) => {
    // create adj list
    let adjList = Array.from(Array(n), () => [])
    let visited = []
    let graphIsTree = true

    for (let edge of edges) {
        adjList[edge[0]].push(edge[1])
        adjList[edge[1]].push(edge[0])
    }

    // create parent and visited arrays
    let parent = Array.from(Array(n), () => null)

    // establish and launch bfs function
    const bfs = (node, list) => {
        // create a queue
        let queue = []

        // push node into queue
        queue.push(node)
        visited.push(node)

        // while queue has length
        while (queue.length) {
            // shift off first node
            let newNode = queue.shift()
            visited.push(newNode)

            // gather neighbors
            for (let neighbor of list[newNode]) {
                parent[neighbor] = newNode
                for (let nextNeighbor of list[neighbor]) {
                    // ask if neighbor has any neighbors with the same parent
                    if (visited.includes(nextNeighbor) && parent[nextNeighbor] === parent[neighbor]) {
                        graphIsTree = false
                    }
                }
                queue.push(neighbor)
            }
        }
    }

    bfs(0, adjList)

    return visited.length === n && graphIsTree
}