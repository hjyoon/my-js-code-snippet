// 유클리드 호제법 O(logN)
const gcd = (x, y) => {
  while (y) [x, y] = [y, x % y];
  return x;
};

const lcm = (x, y) => {
  return (x * y) / gcd(x, y);
};

console.log(gcd(12, 16)); // 4
console.log(lcm(5, 6)); // 30
