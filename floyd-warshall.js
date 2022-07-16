const floyd_warshall = (graph) => {
  const n = graph.length;
  const dist = [...Array(n)].map(() => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dist[i][j] = graph[i][j];
    }
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
};

const graph = [
  [0, 2, Infinity, 4],
  [2, 0, Infinity, 5],
  [3, Infinity, 0, Infinity],
  [Infinity, 2, 1, 0],
];

const dist = floyd_warshall(graph);
dist.forEach((v) => {
  console.log(v);
});
