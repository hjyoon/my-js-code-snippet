const sieve_of_eratosthenes = (n) => {
  const seive = [false, false, ...Array(n - 1).fill(true)];
  for (let k = 2; k <= Math.floor(n ** 0.5); k++) {
    if (seive[k]) {
      for (let v = k * 2; v <= n; v += k) {
        seive[v] = false;
      }
    }
  }
  const res = [];
  seive.forEach((v, i) => {
    if (v) res.push(i);
  });
  return res;
};

console.log(sieve_of_eratosthenes(101));
