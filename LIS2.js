// LIS(Longest Increasing Subsequence) 최장 증가 부분 수열
// 시간복잡도 O(nlogn) (이분 탐색 사용)

const A = [8, 2, 9, 1, 4, 6, 7, 10];
const B = Array(A.length).fill(Infinity);

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

const track = Array(A.length);
let max_length = 0;
A.forEach((v, i) => {
  const pos = lower_bound(0, B.length, v, B);
  if (B[pos] == Infinity) {
    max_length++;
  }
  track[i] = pos;
  B[pos] = v;
});

const chk = Array(A.length).fill(0);
let cnt = max_length;
let i = A.length - 1;

while (cnt) {
  if (track[i] + 1 == cnt) {
    chk[i] = 1;
    cnt--;
  }
  i--;
}

const ans = [];
chk.forEach((v, i) => {
  if (v == 1) {
    ans.push(A[i]);
  }
});

console.log(ans.length);
console.log(ans.join(" "));
