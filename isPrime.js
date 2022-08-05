const isPrime = (n) => {
  if (n < 2) return false;
  if ([2, 3].indexOf(n) > -1) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;
  if (n < 9) return true;
  let [k, l] = [5, n ** 0.5];
  while (k <= l) {
    if (n % k == 0 || n % (k + 2) == 0) return false;
    k += 6;
  }
  return true;
};

console.log(isPrime(7331));
