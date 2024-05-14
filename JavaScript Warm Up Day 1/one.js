console.log("Hello World");


// global scope 
let a = "hello a"

//block scope
for(let i = 0;i<5;i++){
    var b = "hello b";
}

//function scope 
function sum(){
    let c = "hello c";
}


const arrowFunc = (a,b) => a+b; 
const greeting = _ => "Hello World";


let myObj = {
    name : "Min Thu Khant",
    address :"YGN"
}

let {name} = myObj;
console.log(name);


if( 1 === 1){
    console.log("match")
}else{
    console.log("not match");
}

1 === 1 ? console.log("match") : console.log("not match");

true && console.log("True statement");


let myInfo = {
    name : "Min Thu Khant",
    address  :  "Yangon"
}

export let myFriend = {
    name:"Kyaw Kyaw",
    address:"Yangon"
}

export default myInfo;