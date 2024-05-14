const arrowFunc = () => {
    return {
        name : "Min Thu Khant"
    }
}
console.log(arrowFunc());

const info = {
    companyName: "codehub",
    address: "yangon",
    job:{
        fisrtJob:"laravel developer",
        secondaryJob:"NodeJS developer"
    }
}
const {companyName,job:{
    secondaryJob
}} = info;
console.log(companyName);
console.log(secondaryJob);

//map,filter,find

const numbers =[1,2,3,4,5,6,7,8,9,10];

numbers.map( num =>{
    console.log(num ** 2);
})

const newArr = numbers.filter(num =>{
    return num >5;
})
console.log(newArr)

const findNumber = numbers.find(num =>{
    return num == 3;
});
console.log(findNumber);

//spread operator
const newNumber = [20,30,40,50];
const all = [...numbers,...newNumber];
all.map(num =>{
    console.log(num);
})


const myInfo = {
    name:"Min"
}
const updateInfo = {...myInfo,
    address:"yangon"
}

console.log(updateInfo);

//rest parameter and default parameter
const arrow = (x,y = 0,...tmp) =>{
    return console.log(x,y,tmp);
};

arrow(1);