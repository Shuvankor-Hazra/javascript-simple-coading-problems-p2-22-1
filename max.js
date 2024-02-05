const disha = 56;
const salman = 95;

if(disha > salman){
    console.log("Disha will get tha strowberry!");
} else{
    console.log("Salman will get tha strowberry!");
}

// inside a function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}
const max1 = getMax(96, 69);
const max2 = getMax(56, 89);
const ultimateMax = getMax(max1, max2);
console.log("Max of two is:", ultimateMax)





