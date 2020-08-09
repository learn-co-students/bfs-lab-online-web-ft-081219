function findAdjacent(verticeName, vertices, edges){
  let adjacentNames = [];
  for( let i in edges){
    if(edges[i].includes(verticeName)){
      adjacentNames.push(edges[i].find(name => name != verticeName))
    };
  };
  return vertices.filter(v => adjacentNames.includes(v.name) && v.distance === null)
};

function markDistanceAndPredecessor(hearNode, adjacentNodes){
  adjacentNodes.forEach(node => {
    node.distance = 1;
    node.predecessor = hearNode;
  });
};

function bfs(rootNode, vertices, edges){
  let nodesArr = [];

  function addToNodesArr(nodeToAdd){
    nodesArr.push(nodeToAdd);
  };

  addToNodesArr(rootNode);

  while(nodesArr.length > 0){
    let firstNode = nodesArr.shift();
    let adjacentVertices = findAdjacent(firstNode, vertices, edges);
    if (adjacentVertices){
      markDistanceAndPredecessor(firstNode, adjacentVertices);
      for(let i in adjacentVertices){
        addToNodesArr(adjacentVertices[i]);
      };
    };
  };
  return vertices;
};
