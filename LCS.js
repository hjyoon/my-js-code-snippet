let S1 = "ACAYKP";
let S2 = "ACAK";

if (S1.length > S2.length) {
  [S1, S2] = [S2, S1];
}

const shorter = Math.min(S1.length, S2.length);
const longer = Math.max(S1.length, S2.length);

const dp = [...Array(shorter + 1)].map(() => Array(longer + 1).fill(0));

for (let i = 1; i <= shorter; i++) {
  for (let j = 1; j <= longer; j++) {
    if (S1[i - 1] == S2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}

dp.forEach((v) => {
  console.log(...v);
});

console.log(dp[shorter][longer]);

// 역추적
const ans = [];
let i = shorter;
let j = longer;
while (i > 0 && j > 0) {
  if (S1[i - 1] == S2[j - 1]) {
    ans.push(S1[i - 1]);
    i--;
    j--;
  } else if (dp[i - 1][j] == dp[i][j]) {
    i--;
  } else if (dp[i][j - 1] == dp[i][j]) {
    j--;
  }
}

console.log(ans.reverse().join(""));
