// const personInfo = {name:"A", age:12, job:"ABC"};
// // const name = personInfo.name;
// // const age = personInfo.age;
// // const job = personInfo.job;
// const {name, age, job} = personInfo;
// console.log(name,age,job);

const multiObject = {
    name:"abc",
    info:{
        address:"Tangail",
        phone: 235435
    }
}
const {address} = multiObject.info;
console.log(address);