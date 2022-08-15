// LIS(Longest Increasing Subsequence) 최장 증가 부분 수열
// 시간복잡도 O(n) (2중 for문 사용)

const A = [8, 2, 9, 1, 4, 6, 7, 10];
const dp = Array(A.length).fill(0);
let max_length = 0;

for (let i = 0; i < A.length; i++) {
  let tmp = 1;
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j]) {
      tmp = Math.max(tmp, dp[j] + 1);
    }
  }
  dp[i] = tmp;
  max_length = Math.max(max_length, dp[i]);
}

console.log(max_length); // 최대 길이 출력

const chk = Array(A.length).fill(0);
let cnt = max_length;
let i = A.length - 1;
while (cnt) {
  if (dp[i] == cnt) {
    chk[i] = 1;
    cnt--;
  }
  i--;
}

const ans = [];
chk.forEach((v, i) => {
  if (v) {
    ans.push(A[i]);
  }
});

console.log(...ans); // LIS 출력
