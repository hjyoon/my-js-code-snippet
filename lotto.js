const shuffle = (arr) => {
  arr.sort(() => 0.5 - Math.random());
};

const sample = (arr, n) => {
  const _arr = [...arr];
  shuffle(_arr);
  return _arr.slice(0, n);
};

const choice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const nums = [...Array(45)].map((_v, i) => i + 1);
const [bonus, ...win] = sample(nums, 7);

console.log(bonus, win);
const a = [1, 2, 2, 3, 3, 3];
console.log(arr2.filter((v) => v == 2).length); // 2
