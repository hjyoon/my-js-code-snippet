// 시계방향으로 90도 회전
const rotate_clockwise_90 = (points) => {
  for (let i = 0; i < points.length; i++) {
    [points[i][0], points[i][1]] = [points[i][1], -points[i][0]];
  }
};

// 시계방향으로 180도 회전
const rotate_clockwise_180 = (points) => {
  for (let i = 0; i < points.length; i++) {
    [points[i][0], points[i][1]] = [-points[i][0], -points[i][1]];
  }
};

// 시계방향으로 270도 회전
const rotate_clockwise_270 = (points) => {
  for (let i = 0; i < points.length; i++) {
    [points[i][0], points[i][1]] = [-points[i][1], points[i][0]];
  }
};

// y축 대칭
const symmetry_y = (points) => {
  for (let i = 0; i < points.length; i++) {
    points[i][1] = -points[i][1];
  }
};

// x축 대칭
const symmetry_x = (points) => {
  for (let i = 0; i < points.length; i++) {
    points[i][0] = -points[i][0];
  }
};

// 원점 대칭
const symmetry_origin = (points) => {
  for (let i = 0; i < points.length; i++) {
    [points[i][0], points[i][1]] = [-points[i][0], -points[i][1]];
  }
};

// y = x 대칭
const symmetry_y_eq_x = (points) => {
  for (let i = 0; i < points.length; i++) {
    [points[i][0], points[i][1]] = [points[i][1], points[i][0]];
  }
};

// y = -x 대칭
const symmetry_y_eq_nagative_x = (points) => {
  for (let i = 0; i < points.length; i++) {
    [points[i][0], points[i][1]] = [-points[i][1], -points[i][0]];
  }
};

const rotate_array_clockwise_90 = (array) => {
  const res = [...Array(array[0].length)].map(() => Array(array.length));
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      res[j][array.length - i - 1] = array[i][j];
    }
  }
  return res;
};

const points = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 2],
];

symmetry_y(points);

console.log(points);

const A = [
  [1, 2, 3],
  [4, 5, 6],
];

const A2 = rotate_array_clockwise_90(A);
console.log(A2);
