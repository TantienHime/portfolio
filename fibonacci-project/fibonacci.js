let fibArr = [0, 1];
let iterNum = 20;

function addNumbers(num1, num2) {
    let num3 = 0;
    num3 = num1 + num2;
    fibArr.push(num3);
}

for (i = 1; i < iterNum; i++) {
    addNumbers(fibArr[i - 1], fibArr[i]);
}

console.log(fibArr);