const nextPerm = (s) => {
  let i = s.length - 2;
  let j = 0;

  while (i >= 0 && s[i] >= s[i + 1]) {
    i--;
  }

  if (i === -1) return null;
  else {
    j = i + 1;
    while (j < s.length && s[j] > s[i]) j++;
    [s[i], s[j - 1]] = [s[j - 1], s[i]];
  }

  return s.slice(undefined, i + 1).concat(s.slice(i + 1).reverse());
};

// dfs로 구현
const perm = (visit, pos, ac) => {
  visit[pos] = 1;
  ac.push(pos);

  if (ac.length === visit.length) console.log(...ac);
  else {
    for (let i = 0; i < visit.length; i++) {
      if (visit[i] === 0) perm(visit, i, ac);
    }
  }
  ac.pop();
  visit[pos] = 0;
};

let s = [0, 1, 2, 3];
while (s) {
  console.log(...s);
  s = nextPerm(s);
}

for (let i = 0; i < 4; i++) {
  const visit = Array(4).fill(0);
  perm(visit, i, []);
}
