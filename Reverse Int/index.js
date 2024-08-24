const main = (num) => {
  console.log("Initial Integer : ", num);

  let MAX_NUM = 2 ** 31 - 1;
  let MIN_NUM = -(2 ** 31);

  console.log(`Max Val : ${MAX_NUM} - Min Val : ${MIN_NUM}`);
  let reversedString;
  let reversedInteger;
  if (num < 0) {
    reversedString = num.toString().split("").reverse().join("");
    reversedInteger = parseInt(reversedString);
    reversedInteger = -(1 * reversedInteger);
  } else {
    reversedString = num.toString().split("").reverse().join("");
    reversedInteger = parseInt(reversedString);
  }

  console.log("Revered String : ", reversedString);
  console.log("Revered Integer : ", reversedInteger);

  if (reversedInteger > MAX_NUM || reversedInteger < MIN_NUM) {
    console.log("result : ", 0);
  } else {
    console.log("result : ", reversedInteger);
  }
};

int = -120;

main(int);
