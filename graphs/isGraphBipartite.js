const isGraphBipartite = () => {
    let nodeIndex = 0
    let graphNodes = Array.from(Array(n), () => (nodeIndex))
    let distance = Array.from(Array(n), () => (-1))
    let parent = Array.from(Array(n), () => (-1))
    let adjList = Array.from(Array(n), () => ([]))

    for (let i = 0; i < edgeList.length; i++) {
        adjList[edgeList[i][0]].push(edgeList[i][1])
        adjList[edgeList[i][1]].push(edgeList[i][0])
    }


}