const main = (number) => {
  let roman = "";
  let romanNumerals = [
    { symbol: "I", value: 1 },
    { symbol: "IV", value: 4 },
    { symbol: "V", value: 5 },
    { symbol: "IX", value: 9 },
    { symbol: "X", value: 10 },
    { symbol: "XL", value: 40 },
    { symbol: "L", value: 50 },
    { symbol: "XC", value: 90 },
    { symbol: "C", value: 100 },
    { symbol: "CD", value: 400 },
    { symbol: "D", value: 500 },
    { symbol: "CM", value: 900 },
    { symbol: "M", value: 1000 },
  ];

  for (let i = romanNumerals.length - 1; i >= 0; i--) {
    while (number >= romanNumerals[i].value) {
      roman = roman + romanNumerals[i].symbol;
      number = number - romanNumerals[i].value;
    }
  }

  console.log(roman);
};

int = 40;
main(int);
