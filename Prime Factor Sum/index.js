//write a program in javascript that take a postive number n as a puzzle. your challenge is fo keep breaking it down into its prime pieces and adding them up. youll do this repeatedly until n cant be broken down anymore. what youre looking for is the smallest number that n can become after all these additions
//example:
//input : 9
//output : 5

const primeFactors = (n) => {
  //function to fetch an array of prime factors of n
  let primeFactorsArray = []; //array to store prime factors after processing
  for (let i = 2; n > 1; i++) {
    //loop starting from smalles possible prime number and continues until n is greater than 1
    while (n % i === 0) {
      //iteration to check if n is divisible by i, if yes then i is a prime factor of n
      primeFactorsArray.push(i); // add i to the array
      n = n / i; //divide n by i t remove this factor from n until no longer divisible
    }
  }
  return primeFactorsArray;
};

const mainFunction = (n) => {
  while (n > 4) {
    // a loop that continues till 4 because 4 and below cannot be further factorized meaningfully (as they either consist of small primes or are primes themselves)
    let primeFactorsArray = primeFactors(n);
    let sumOfFactors = 0;

    console.log(`Prime Factors of ${n} : ${primeFactorsArray}`);

    if (primeFactorsArray.length < 2) {
      //Checks if primeFactorsArray contains fewer than 2 factors, meaning n is either a prime number or a very small number that can’t be reduced further.
      console.log(`${n} cannot be further processed`);
      break;
    } else {
      for (const factor of primeFactorsArray) {
        sumOfFactors += factor;
      }
      console.log(`Sum of prime factors of ${n} is ${sumOfFactors}`);
      n = sumOfFactors; // Update n to the sum of its prime factors
    }
  }

  console.log(`Smallest number after processing: ${n}`);
};

mainFunction(9);
