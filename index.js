function findAdjacent(verticeName, vertices, edges){
    let adjacentNames = []
    for (let i in edges) {
        if (edges[i].includes(verticeName)) {
            adjacentNames.push(edges[i].find(name => name != verticeName))
        }
    }
    return vertices.filter(vertice => adjacentNames.includes(vertice.name) && vertice.distance === null)
}

function markDistanceAndPredecessor(headNode, adjacentNodes){
    adjacentNodes.forEach(node => {
        node.distance = 1
        node.predecessor = headNode
    })
}

function bfs(rootNode, vertices, edges){
    let queue = []

    function addToQueue(nodeToAdd){
        queue.push(nodeToAdd)
    }

    addToQueue(rootNode)

    while(queue.length > 0) {
        const firstNode = queue.shift()
        const adjacentVertices = findAdjacent(firstNode, vertices, edges)
        if (adjacentVertices) {
            markDistanceAndPredecessor(firstNode, adjacentVertices)

            for (let i in adjacentVertices) {
                addToQueue(adjacentVertices[i])
            }
        }
    }

    return vertices
}