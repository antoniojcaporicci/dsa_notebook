const Graph = class {
    constructor(n) {
        this.vertices = Array.from(Array(n), () => ([]))
    }

    addEdges = (i, j) => {
        if (this.vertices[i] !== undefined && this.vertices[j] !== undefined) {
            this.vertices[i].push(j)
            this.vertices[j].push(i)
        }
    }

    hasEulerianCycle = () => {
        let odd = 0

        for (let edges of this.vertices) {
            if (edges.length % 2 === 1) {
                odd++
            }
        }

        if (odd === 0 || odd === 2) return true
        return false
    }
}

function check_if_eulerian_cycle_exists(n, edges) {
    // create a graph representation of n and edges
    // Graph = Array of length n, with the edges as arguments that build an adjacency list for each node

    const g = new Graph(n)

    for (let i = 0; i < edges.length; i++) {
        g.addEdges(edges[i][0], edges[i][1])
    }

    return g.hasEulerianCycle()
}

const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [3, 0],
    [3, 2],
    [4, 3],
    [4, 0]
]

console.log(check_if_eulerian_cycle_exists(5, edges))