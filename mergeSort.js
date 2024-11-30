function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let arr1 = arr.slice(0, arr.length / 2);
  let arr2 = arr.slice(arr.length / 2, arr.length);
  let arr3 = [];

  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);
  let bigArr, smallArr;
  if (arr1.length > arr2.length) {
    bigArr = arr1;
    smallArr = arr2;
  } else {
    bigArr = arr2;
    smallArr = arr1;
  }

  while (bigArr.length > 0) {
    if (bigArr[0] > smallArr[0]) {
      arr3.push(smallArr.shift());
    } else {
      arr3.push(bigArr.shift());
    }
  }
  if (bigArr.length !== 0) {
    arr3.push(...bigArr);
  }
  if (smallArr.length !== 0) {
    arr3.push(...smallArr);
  }
  return arr3;
}

let check = [3, 2, 1, 13, 8, 5, 0, 1];
let check2 = [105, 79, 100, 110];

console.log(mergeSort(check2));

/*
we have an array
spit the array into two halves
check if one of the halves has single item
    if no, keep splitting
    if yes, return the half
compare first item of two halves and rearrange it



*/
