//https://leetcode.com/problems/container-with-most-water/description/

const main = (heights) => {
  let maxVol = 0;
  let currVol = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      let height;
      if (heights[i] < heights[j]) {
        height = heights[i];
      } else {
        height = heights[j];
      }
      let length = j - i;

      currVol = height * length;

      if (currVol > maxVol) {
        maxVol = currVol;
      }
    }
  }
  console.log("Max Vol : ", maxVol);
};

const heights = [3, 1, 2, 4, 5];

main(heights);
