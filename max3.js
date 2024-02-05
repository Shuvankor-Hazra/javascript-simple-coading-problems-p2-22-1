const jim = 1556;
const tim = 879;
const kim = 168;

if (jim > tim && jim > kim) {
  console.log("Jim is the boss boss boss!");
} else if (tim > jim && tim > kim) {
  console.log("Tim is the boss boss!");
} else {
  console.log("Kim is the boss!");
}

// function------
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return ("num1 is the boss boss boss!");
  } else if(num2 > num1 && num2 > num3) {
    return ("num2 is the boss boss!");
  } else{
    return ("num3 is the boss!");
  }
}
console.log(maxOfThree(500,200,300));

// Math.max--------
const max = Math.max(12,19,35,65,98,48,92,99);
console.log("Max using math.max is: ",max);











