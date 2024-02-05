const hights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMaxHeight(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
const maxHeight = getMaxHeight(hights);
console.log("max value is:", maxHeight);


// Homework: min number

function getMinHeight(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
      if (num < min) {
        min = num;
      }
    }
    return min;
  }
  const minHeight = getMinHeight(hights);
  console.log("min value is:", minHeight);
  