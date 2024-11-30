function fibs(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
}

// function fibsRec(n) {
//   let arr = [0, 1];

//   if (n === 0) return;
//   if (n === 1) return [0];
//   if (n === 2) return arr;

//   let stepTwo = (m) => {
//     if (arr[m] === undefined) {
//       arr[m] = stepTwo(m - 1) + stepTwo(m - 2);
//     }
//     return arr[m];
//   };

//   stepTwo(n - 1);
//   return arr;
// }

function fibsRec(n, arr = [0, 1]) {
  if (n === 0) return;
  if (n === 1) return [0];
  if (n === 2) return arr;

  if (arr[n - 1] === undefined) {
    arr[n - 1] = fibsRec(n - 1, arr)[n - 2] + fibsRec(n - 2, arr)[n - 3];
  }

  return arr;
}

let check = 20;

console.log(fibs(check));
console.log(fibsRec(check));
