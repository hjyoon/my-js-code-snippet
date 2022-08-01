const lower_bound = (left, right, target, arr) => {
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

const L = [10, 10, 20, 20, 20, 30, 30, 40, 40, 40, 40, 50, 50, 60];

console.log(lower_bound(0, L.length, 5, L));
