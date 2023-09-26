
// //it will run after 100000 iteration and hence is time consuming
// for(let i=0;i<100000;i++){
//     console.log("inside the loop ");
// }

//setTimeout

// console.log("script end")

// const id=setTimeout(()=>{
//     console.log("inside setTimeout")
// },1000)

// for(let i=1;i<100;i++){
//     console.log(">>>>>>>>>>")
// }

// console.log("setTimeout id is",id);
// console.log("clearing time out");
// clearTimeout(id);
// console.log("script end")

//SETINTERVAL
// const body=document.body;
// const button=document.querySelector("button");
// const intervalId=setInterval(()=>{
//     const red=Math.floor(Math.random()*256)
//     const blue=Math.floor(Math.random()*256)
//     const green=Math.floor(Math.random()*256)
//     const rgb=`rgb(${red},${green},${blue})`;
//     body.style.background=rgb;
// },1000)

// button.addEventListener("click",()=>{
//     clearInterval(intervalId)
//     button.textContent=body.style.background
// });

// console.log(intervalId)

//understanding callback
// function myFunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// }

// myFunc(()=>{
//     console.log("Function is doing task 2")
// })

// function getTwoNumbersAndAdd(number1,number2,onSucess,onFailure){
//     if(typeof number1=="number" && typeof number2=="number"){
//         onSucess(number1,number2);
//     }else{
//         onFailure();
//     }
// }

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// function onFail(){
//     console.log("Wrong data types");
//     console.log("please pass numbers only ")
// }

// getTwoNumbersAndAdd("4",4,addTwoNumbers,onFail)

