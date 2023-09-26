//lec 2
// let rectangle={
//     length:1,
//     breadth:2,
//     draw:function(){
//         console.log('drawing rectangle');
//     }
// };
// //factory function
// function createRectangle(len,bre){
//     return rectangle={
//         length:len,
//         breadth:bre,
//         draw:function(){
//             console.log('drawing rectangle');
//         }
//     };
    
// }
// let rectangleObj1=createRectangle(5,4);
//rectangle.length
//rectangle.breadth
//rectangle.draw()

//constructor function
// function rectangle(){
//     this.length=1;
//     this.breadth=2;
//     this.draw=function(){
//         console.log('drawing');
//     }
// }
//object creation using constructor
// let rectangleObject=new rectangle();
// rectangleObject.color='yellow';
// console.log(rectangleObject);

// delete rectangleObject.color


// let a={value:10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value);

// let rectangle={
//     length:2,
//     breadth:4

// };

//for-in loop
// for(let key in rectangle){
//     //keys are reflected through key variable
//     //value are reflected through rectangle key
//     console.log(key,rectangle[key]);
// }
//for-of loop
//entries value ke liye
// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }

//to find whether the given property exist in object or not

// if('color' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent')
// }
//object clone 1
// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let dest={};

// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);

//object clone 2
let src={
    a:10,
     b:20,
     c:30
};

let src2={value:25};
let dest=Object.assign({},src,src2);
console.log(dest)
src.a++;
console.log(dest)

//lec 3

// let numbers=[1,4,5,7];
// console.log(numbers);
// //end->push
// //begining->unshift
// //middle->splice
// console.log(numbers.indexOf(7));
// //we want to check if a number exist in an array
// if(numbers.indexOf(4)!=-1)
// console.log("present");

// console.log(numbers.includes(7));

// console.log(numbers.indexOf(4,2));

// let courses=[
// {no:1,naam:'love'},
// {no:1,naam:'rahul'}
// ];
// console.log(courses);
//  //console.log(courses.indexOf({no:1,naam:'love'}));

//  let course=courses.find(function(course){
// return course.naam==='love';
//  })
//  console.log(course);

// let numbers=[1,2,3,4,5,6,7];
// numbers.pop();
// //pop used to delete last elements in an array
// numbers.shift();
// //start is used to delete first elements

// numbers.splice(2,1);
// console.log(numbers);
   
//empyting array
// let numbers=[1,2,3,4,5];
// let numbers2=numbers;
// //numbers=[];
// //numbers.length=0;

// numbers.splice(0,numbers.length);
// console.log(numbers)
// console.log(numbers2)

//combining and slicing an array
// let first=[1,2,3];
// let second=[4,5,6];
// let combined=first.concat(second);
// console.log(combined);

// //slice
// let marks=[10,20,30,40,50,60,70,80];
// let sliced=marks.slice(2,6);
// console.log(sliced);

//spread operator
// let first=[1,2,3];
// let second=[4,5,6];
// let combined=[...first,...second];
// console.log(combined);

// //copy kaise create karu
// let another=[...combined];

//iterating an array
// let arr=[10,20,30,40,50,60];
// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(number){
// console.log(number);
// })

//arr.forEach(number=> console.log(number));
    //arrow function

    // //joining array
    // let numbers=[10,20,30,40,50];
    // const joined=numbers.join(',');
    // console.log(joined);

    // let message='This is my first message';
    // let parts=message.split(' ');
    // console.log(parts);
    // let joined=parts.join('_');
    // console.log(joined);

    //sorting
    // let numbers=[40,30,10,20,50];
    // numbers.sort();
    // console.log(numbers)
    // numbers.reverse();
    // console.log(numbers)

    //filtering an array
//     let numbers=[1,2,-1,-4];
//    let filtered= numbers.filter(function(value){
//         return value>=0;
//     });
//     console.log(filtered);

//Mapping arrays
// let numbers=[7,8,9,10];
// let items=numbers.map(function(value){
//     return 'student_no'+value;
// });
// console.log(items);

//Mapping with objects
// let numbers=[1,2,-6,-9];
// let items=filtered.map(function(num){
// return {value:num};
// });
// console.log(items);

//LEC 4
//FUNCTION
// function run(){
//     console.log('runing');
// }
// //function call 
// run();

// // Named function assignment

// let stand=function walk(){
//     console.log('walking');
// };

// stand();

// let jump=stand;
// jump();

// //anonymous function assignment
// let stand2=function(){
//     console.log('walking');
// };
// stand2();

// function sum(a,b){
//     return a+b;
// };

// console.log(sum(1,2));

// function sum(a,b){
//     let total=0;
//     for(let value of arguments)
//     total=total+value;
//     return total;
// };
// let ans=sum(1,2,3,4,5,6);
// console.log(ans);

//REST OPERATOR
// function sum(num,value,...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6);

// //DEFAULT PARAMETERS
// function interest(p,r,y){
//     return p*r*y/100;
// }
// console.log(interest(1000,10,5));

// let person={
//     fName:'Love',
//     lName:'Babbar'
// };
// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());

//TRY AND CATCH
try {
    person.fullName=true;
}
catch(e){
    alert('you have sent a number in fullName');
}

//SCOPE
//REDUCING AN ARRAY
let arr=[1,2,3,4];
let total=0;
for(let value of arr)
total=total+value;
console.log(total);