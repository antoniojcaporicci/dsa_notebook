/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node) => {
    const cloneNode = (val) => {
        let newNode = new Node(val)
        return newNode
    }

    let newGraph = cloneNode(node.val)
    newGraph.neighbors = [...node.neighbors]
    let queue = []

    queue.push(newGraph)

    while (queue.length) {
        let currNode = queue.shift()
        let newNeighbors = []
        for (let neighbor of currNode.neighbors) {
            let newNeighbor = cloneNode(neighbor.val)
            queue.push(newNeighbor)
            newNeighbors.push(newNeighbor)
        }
        currNode.neighbors = newNeighbors
    }

    return newGraph
};

class Node {
    constructor(val, neighbors) {
        this.val = val
        this.neighbors = neighbors
    }
}