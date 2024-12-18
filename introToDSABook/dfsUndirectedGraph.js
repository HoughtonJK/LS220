// Implement a function `dfs` that accepts two arguments: an adjacency
// list representing an undirected graph, and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

function dfs(adjList, source) {
  let visited = new Set();
  let stack = [source];
  visited.add(source);
  while(stack.length !== 0) {
    let current = stack.pop();
    console.log(current);
    adjList.get(current).forEach(neighbor => {
      if(!visited.has(neighbor)) stack.push(neighbor);
      visited.add(neighbor);
    });
  }
}

const adjList = new Map();
adjList.set(1, [2]);
adjList.set(2, [1, 3]);
adjList.set(3, [2]);

console.log('dfs');
dfs(adjList, 1); // 1, 2, 3


// Implement a function `bfs` that accepts two arguments: the adjacency list
// representing an undirected graph and a starting vertex (source).
// The function should print the vertices in breadth-first
// traversal order.

function bfs(adjList, source) {
  let visited = new Set([source]);
  let queue = [source];
  while(queue.length > 0){
    let current = queue.shift();
    console.log(current);
    adjList.get(current).forEach(neighbor => {
      if(!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }
}

const adjList1 = new Map();
adjList1.set(1, [2, 3]);
adjList1.set(2, [1, 4]);
adjList1.set(3, [1, 4, 5]);
adjList1.set(4, [2, 3]);
adjList1.set(5, [3, 6]);
adjList1.set(6, [5]);

console.log('bfs');
bfs(adjList1, 1); // 1, 2, 3, 4, 5, 6 or 1, 3, 2, 5, 4, 6
