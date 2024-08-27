//https://www.hackerrank.com/challenges/new-year-chaos/problem

const main = (a) => {
  let n = a.length;
  let bribes = 0;

  let initialArray = [...a];

  a.sort();

  console.log("Initial Array", initialArray);
  console.log("Sorted Array", a);

  for (let i = n - 1; i >= 0; i--) {
    console.log(`Initial Array index ${i} : ${initialArray[i]}`);
    console.log(`Sorted Array index ${i} : ${a[i]}`);
  }

  return bribes;
};

const queue = [1, 2, 5, 3, 7, 8, 6, 4];

console.log(main(queue));
