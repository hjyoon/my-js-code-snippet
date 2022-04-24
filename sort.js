const arr = [2, 10, 20, 100, 1];

// 문자열 오름차순 (정수형 데이터를 문자열로 생각)
arr.sort();
console.log(arr);

// 문자열 내림차순 (만약 정수형일 경우 문자열로 강제 형변환 후 정렬)
arr.sort((a, b) => {
  if (String(a) > String(b)) {
    return -1;
  }
  return 1;
});
console.log(arr);

// 오름차순
arr.sort((a, b) => a - b);
console.log(arr);

// 내림차순
arr.sort((a, b) => b - a);
console.log(arr);

// 문자열의 길이로 오름차순
arr.sort((a, b) => b.length - a.length);
console.log(arr);

const arr2 = [
  [2, 1],
  [3, 1],
  [1, 2],
  [1, 1],
  [2, 2],
];

// (1순위: 첫번째 원소, 2순위 두번째 원소) 오름차순 정렬
arr2.sort((a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});
console.log(arr2);
