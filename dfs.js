// 인접 행렬 (adjacency matrix)

const graph = [
  [0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0],
];

const visited = [...Array(graph.length)].fill(0);

const dfs = (root) => {
  if (visited[root] == 1) {
    return;
  }
  visited[root] = 1;

  // Do Something
  console.log(root);

  for (let i = 0; i < 5; i++) {
    if (graph[root][i] == 1) {
      dfs(i);
    }
  }
};

console.log("인접 행렬");
dfs(2);

// 인접 리스트 (adjacency list)

// const graph_list = [[1], [0, 2, 4], [1, 3], [2], [1]];
const graph_list = [[1, 2, 3], [0, 4, 5], [0], [0], [1], [1]];
const graph_list2 = new Map([
  [0, [1, 2, 3]],
  [1, [0, 4, 5]],
  [2, [0]],
  [3, [0]],
  [4, [1]],
  [5, [1]],
]);
const visited_list = [...Array(graph_list.length)].fill(0);

const dfs_list = (root) => {
  if (visited_list[root] == 1) {
    return;
  }
  visited_list[root] = 1;

  // Do Something
  console.log(root);

  graph_list[root].sort((a, b) => a - b); // 노드를 오름차순으로 방문해야 할 경우
  for (let i of graph_list[root]) {
    dfs_list(i);
  }
};

const visited_list2 = [...Array(graph_list2.size)].fill(0);

const dfs_list2 = (root) => {
  if (visited_list2[root] == 1) {
    return;
  }
  visited_list2[root] = 1;

  // Do Something
  console.log(root);

  graph_list2.get(root).sort((a, b) => a - b); // 노드를 오름차순으로 방문해야 할 경우
  for (let i of graph_list2.get(root)) {
    dfs_list2(i);
  }
};

const visited_list_stack = [...Array(graph_list.length)].fill(0);

const dfs_list_stack = (root) => {
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    if (visited_list_stack[n] == 0) {
      visited_list_stack[n] = 1;

      // Do Something
      console.log(n);

      // stack.push(...graph_list[n]);
      stack.push(...[...graph_list[n]].sort((a, b) => b - a)); // 노드를 오름차순으로 방문해야 할 경우
    }
  }
};

console.log("인접 리스트");
dfs_list(0);

console.log("인접 리스트 (Map 사용)");
dfs_list2(0);

console.log("인접 리스트 (재귀X)");
dfs_list_stack(0);
