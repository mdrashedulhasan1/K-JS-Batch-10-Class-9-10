const giveNum = () => 5;
const doubleIT = num => num*2;
const add = (num1, num2) => num1+num2;
const someMath = (a,b) =>{
    const sum = a+b; // 5+3 = 8
    const sub = a-b; //5-3 = 2
    const multi = sum*sub; //16
    return multi;
}
const result4 = someMath(5, 3);
const result3 = add(5,10);
const result2 = doubleIT(2);
const result = giveNum();

console.log(result4);
// console.log(result3);
// console.log(result2);
// console.log(result);
