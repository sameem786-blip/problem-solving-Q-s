const main = (s) => {
  console.log("Given String : ", s);
  let longestSubstring = "";
  let currentSubstring = "";

  for (let i = 0; i < s.length; i++) {
    if (currentSubstring.includes(s[i])) {
      for (let j = 0; j < i; j++) {
        currentSubstring = currentSubstring.slice(1);
        if (currentSubstring.includes(s[i])) {
          continue;
        } else {
          break;
        }
      }
    }
    currentSubstring = currentSubstring + s[i];

    if (currentSubstring.length > longestSubstring.length) {
      longestSubstring = currentSubstring;
    }
  }

  console.log(
    "Longest Substring without repeating characetrs : ",
    longestSubstring
  );
};

string = "abdmdfklmkldllmalcnwlmcabcbb";
main(string);
