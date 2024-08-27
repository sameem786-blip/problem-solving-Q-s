//https://www.hackerrank.com/challenges/array-left-rotation/problem

const main = (arr, shift) => {
  let newArray = [];
  console.log("Initial Array", arr);

  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (i < shift) {
      let newIndex = n + (i - shift);
      newArray[newIndex] = arr[i];
    } else {
      newArray[i - shift] = arr[i];
    }
  }

  console.log("New Array", newArray);
};

const array = [1, 2, 3, 4, 5];
const d = 2;

main(array, d);
