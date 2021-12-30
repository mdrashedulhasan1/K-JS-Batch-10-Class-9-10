// const ages = [12, 23, 34, 65];
// const ages2 = [23, 34, 45, 56];
// const ages3 = [34, 45, 56, 67];
// const allAges = ages.concat(ages2).concat(ages3);
// const allAges2 = [...ages,...ages2,...ages3]; //ES6
// console.log(allAges2);
// console.log(allAges);

const someNum = [12, 23, 15, 43, 33, 5, 67];
const maxNum = Math.max(...someNum);
console.log(maxNum);
