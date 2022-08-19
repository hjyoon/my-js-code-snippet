// 시간복잡도 O(N^(1/2))
const get_divisor = (n) => {
  const divisors = [];
  const divisors_back = [];
  for (let i = 1; i <= Math.floor(n ** (1 / 2)); i++) {
    if (n % i == 0) {
      divisors.push(i);
      if (i == Math.floor(n / i)) continue;
      divisors_back.push(Math.floor(n / i));
    }
  }
  return divisors.concat(divisors_back.reverse());
};

console.log(get_divisor(60));
