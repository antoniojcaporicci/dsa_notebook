// Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// Output: 700

function findCheapestPrice(n, flights, src, dst, k) {
    // build the graph
    // n nodes, flights [node, neighbor, cost]
    const adjacencyMap = Array.from(Array(n), () => []);

    for (let flight of flights) {
        adjacencyMap[flight[0]].push({ dst: flight[1], cost: flight[2] });
    }

    // breadth first search on graph
    const helper = (adjacencyMap) => {
        let stops = 0;
        let minCost = Infinity;
        let queue = [];

        // Add the source node to the queue along with its cost (which is zero)
        queue.push([src, 0]);

        while (queue.length && stops <= k) {
            const size = queue.length;

            // Explore all the nodes at the current level
            for (let i = 0; i < size; i++) {
                const [currNode, currCost] = queue.shift();

                // If the current node is the destination node, update the minimum cost if necessary
                if (currNode === dst) {
                    minCost = Math.min(minCost, currCost);
                }

                // Otherwise, explore all the neighbors of the current node
                if (stops < k) {
                    for (let neighbor of adjacencyMap[currNode]) {
                        const { dst, cost } = neighbor;
                        const totalCost = currCost + cost;
                        queue.push([dst, totalCost]);
                    }
                }
            }

            stops++;
        }

        return minCost !== Infinity ? minCost : -1;
    };

    return helper(adjacencyMap);
}

const flights = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
console.log(findCheapestPrice(4, flights, 0, 3, 1)); // Output: 200
