const nextComb = (flag, n, r) => {
  let i = r - 1;
  while (flag[i] >= n - (r - i)) {
    i--;
    if (i < 0) return false;
  }

  flag[i]++;
  while (i < r - 1) {
    flag[i + 1] = flag[i] + 1;
    i++;
  }
  return true;
};

const gen_combinations = (arr, n) => {
  const ret = [];
  if (n === 0) return [[]];
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    const rest_arr = arr.slice(i + 1);
    for (const v of gen_combinations(rest_arr, n - 1)) {
      ret.push([e].concat(v));
    }
  }
  return ret;
};

const flag = [0, 1];
const target = ["a", "b", "c", "d"];
while (1) {
  console.log(flag.map((v) => target[v]));
  if (!nextComb(flag, 4, 2)) break;
}

console.log(gen_combinations(target, 3));
