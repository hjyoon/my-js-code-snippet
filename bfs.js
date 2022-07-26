class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // 제일 앞 노드
    this.rear = null; // 제일 뒤 노드
    this.length = 0; // 노드의 길이
  }

  enqueue(data) {
    // 노드 추가.
    const node = new Node(data); // data를 가진 node를 만들어준다.
    if (!this.head) {
      // 헤드가 없을 경우 head를 해당 노드로
      this.head = node;
    } else {
      this.rear.next = node; // 아닐 경우 마지막의 다음 노드로
    }
    this.rear = node; // 마지막을 해당 노드로 한다.
    this.length++;
  }

  dequeue() {
    // 노드 삭제.
    if (!this.head) {
      // 헤드가 없으면 한 개도 없는 것이므로 false를 반환.
      return false;
    }
    const data = this.head.data; // head를 head의 다음 것으로 바꿔주고 뺀 data를 return
    this.head = this.head.next;
    this.length--;

    return data;
  }

  // head를 반환하는 함수
  front() {
    // head가 있을 경우 head의 data를 반환.
    return this.head && this.head.data;
  }

  //큐의 모든 원소를 반환하는 함수
  getQueue() {
    if (!this.head) return false;
    let node = this.head;
    const array = [];
    while (node) {
      // node가 없을 때까지 array에 추가한 후 반환해준다.
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
}

// 인접 행렬 (adjacency matrix)

const graph = [
  [0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0],
];

const bfs = (graph, root) => {
  const n = graph.length; // 노드 개수
  const queue = new Queue();
  const visited = [...Array(n)].fill(0);

  queue.enqueue(root);

  while (queue.length) {
    const now = queue.dequeue();

    if (visited[now] == 1) {
      continue;
    }
    visited[now] = 1;

    // Do Something
    console.log(now);

    for (let to = 0; to < n; to++) {
      if (graph[now][to] == 1) {
        queue.enqueue(to);
      }
    }
  }
};

console.log("인접 행렬");
bfs(graph, 2);

// 인접 리스트 (adjacency list)

const graph_list = [[1, 2, 3], [0, 4, 5], [0], [0], [1], [1]];
const graph_list2 = new Map([
  [0, [1, 2, 3]],
  [1, [0, 4, 5]],
  [2, [0]],
  [3, [0]],
  [4, [1]],
  [5, [1]],
]);

const bfs_list = (graph_list, root) => {
  const n = graph_list.length; // 노드 개수
  const queue = new Queue();
  const visited = [...Array(n)].fill(0);

  queue.enqueue(root);

  while (queue.length) {
    const now = queue.dequeue();

    if (visited[now] == 1) {
      continue;
    }
    visited[now] = 1;

    // Do Something
    console.log(now);

    graph_list[now].sort((a, b) => a - b); // 노드를 오름차순으로 방문해야 할 경우
    for (const to of graph_list[now]) {
      queue.enqueue(to);
    }
  }
};

const bfs_list2 = (graph_list, root) => {
  const n = graph_list.length; // 노드 개수
  const queue = new Queue();
  const visited = [...Array(n)].fill(0);

  queue.enqueue(root);

  while (queue.length) {
    const now = queue.dequeue();

    if (visited[now] == 1) {
      continue;
    }
    visited[now] = 1;

    // Do Something
    console.log(now);

    graph_list.get(now).sort((a, b) => a - b); // 노드를 오름차순으로 방문해야 할 경우
    for (const to of graph_list.get(now)) {
      queue.enqueue(to);
    }
  }
};

console.log("인접 리스트");
bfs_list(graph_list, 2);

console.log("인접 리스트 (Map 사용)");
bfs_list2(graph_list2, 0);

const board = [
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 1, 0],
];

const bfs_LRUD = (board, root_y, root_x) => {
  const [r, c] = [board.length, board[0].length]; // 노드 개수
  const queue = new Queue();
  const visited = [...Array(r)].map(() => Array(c).fill(0));

  queue.enqueue([root_y, root_x]);

  while (queue.length) {
    const [now_y, now_x] = queue.dequeue();

    // 좌표가 맵 밖으로 벗어나는지 체크
    if (now_y < 0 || now_y >= r || now_x < 0 || now_x >= c) {
      continue;
    }

    // 벽 체크
    if (board[now_y][now_x] == 1) {
      continue;
    }

    // 방문 체크
    if (visited[now_y][now_x] == 1) {
      continue;
    }
    visited[now_y][now_x] = 1;

    // Do Something
    console.log(now_y, now_x);

    for (const [dy, dx] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ]) {
      queue.enqueue([now_y + dy, now_x + dx]);
    }
  }
};

console.log("상하좌우 이동");
bfs_LRUD(board, 0, 0);
