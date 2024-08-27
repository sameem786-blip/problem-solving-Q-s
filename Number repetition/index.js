//https://leetcode.com/problems/remove-k-digits/description/

const main = (s, k) => {
  let result = "";
  let frequencyMap = {};
  let newFrequencyMap = {};

  for (let i = 0; i < s.length; i++) {
    if (frequencyMap[s[i]] == undefined) {
      frequencyMap[s[i]] = 1;
    } else {
      frequencyMap[s[i]] += 1;
    }
  }

  let sortedArray = s.split("");

  sortedArray.sort((a, b) => b - a);

  for (let i = 0; i < sortedArray.length; i++) {
    if (!result.includes(sortedArray[i])) {
      result += sortedArray[i];
      newFrequencyMap[sortedArray[i]] = 1;
    } else {
      if (newFrequencyMap[sortedArray[i]] >= 3) {
        continue;
      } else {
        result += sortedArray[i];
        newFrequencyMap[sortedArray[i]] += 1;
      }
    }
  }

  console.log(`Result :`, result);
};

number = "1121212";
repetition = 3;
main(number, repetition);
