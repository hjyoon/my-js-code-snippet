const find = (node) => {
  // path compression 기법
  if (parent.get(node) != node) {
    parent.set(node, find(parent.get(node)));
  }

  return parent.get(node);
};

const union = (v, u) => {
  const root1 = find(v);
  const root2 = find(u);

  // union-by-rank 기법
  if (rank.get(root1) > rank.get(root2)) {
    parent.set(root2, root1);
  } else {
    parent.set(root1, root2);
    if (rank.get(root1) == rank.get(root2)) {
      rank.set(root2, rank.get(root2) + 1);
    }
  }
};

const parent = new Map([
  ["A", "A"],
  ["B", "B"],
  ["C", "C"],
  ["D", "D"],
  ["E", "E"],
  ["F", "F"],
  ["G", "G"],
]);

const rank = new Map();
for (let k of parent.keys()) {
  rank.set(k, 0);
}

union("B", "A");
console.log(parent);

union("D", "C");
console.log(parent);

union("D", "B");
console.log(parent);
