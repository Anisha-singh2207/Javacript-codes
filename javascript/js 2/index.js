// const myArray=["value1","value2","value3","value4"];
// // let myvar1=myArray[0];
// // let myvar2=myArray[1];
// // console.log(myvar1);
// // console.log(myvar2);


//   let[myvar1,myvar2,...myNewArray] =myArray
   
//   console.log(myvar1);
//   console.log(myvar2)
//   console.log(myNewArray)
//   console


//for-in lop

// const fruits=["apple" ,"banana","gauava","santra"];
// const fruits2=[];

// for(let index in fruits){
//   fruits2.push(fruits[index].toUpperCase());
// }

// console.log(fruits2)

//for-of loop in Array

// const fruits=["apple" ,"banana","gauava","santra"];
// const fruits2=[];
 
// for(let fruit of fruits){
//   fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);


//   const fruits=["apple" ,"banana","gauava","santra"];
//   fruits2=[];
// // console.log(fruits[fruits.length-2]);

// // fruits.push("hii");
// // console.log(fruits)

// for(let i=0;i<fruits.length;i++){
//   fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits);

//cloning Array
// 1.
// let originalArray=[1,2,3,4,5];

// let clonedArray=originalArray.slice();

// console.log(clonedArray);

// 
// 2 
// const originalArray = [1, 2, 3];
// const clonedArray = [...originalArray];
// console.log(clonedArray);

// 3.
// const originalArray = [1, 2, 3];
// const clonedArray = Array.from(originalArray);
// console.log(clonedArray);

// 4.
// const arr1=["item1","item2","item3","item4"];
// const clonedArray=[].concat(arr1);
// console.log(clonedArray);

// let fruits=["apple","gauava","grapes","santra"];

// let obj={};

// console.log(Array.isArray(fruits));


// let total=0;

// for(let i=0;i<100;i++){
//   total=total+i
// }
// console.log(total);

//object creation

// const person={
//   name:"Anisha Singh",
//   age:20,
  
//   hobbies:["sleeping","eating","travelling","listening music"]
// }

// // console.log(person.name)
// // console.log(person);

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["hobbies"]);

// person["gender"]="female";
// console.log(person)


// const key="email"

// const person={
//   name:"harshit",
//   age:22,
//   "person hobbies":["guitar","sleeping","listening music"]
// }

// console.log(person["person hobbies"]);
// person[key]="anisha@gmail.com";
// console.log(person)
  
  
//   const person={
//   name:"harshit",
// age:22,
// "person hobbies":["guitar","sleeping","listening music"]
// }
 
// for(let key in person){
//   console.log(`${key}:${person[key]}`);
//   console.log(key," : ",person[key]);
// }
  
  
  //computed properties
  
  // const key1="objkey1";
  // const key2="objkey2";
  
  
  // const value1="myvalue1";
  // const value2="myvalue2";
  
  
  // const obj={
  //   [key1]=value1,
  //   [key2]=value2
  // }
  
  
  // const obj={};
  
  // obj[key1]=value1,
  // obj[key2]=value2,
  // console.log(obj)


//spread operator

// const array1=[1,2,3];
// const array2=[5,6,7];

// const newArray=[...array1,...array2];
// console.log(newArray)
// //sperad operator in objects

// const obj1={
//   key1:"value1",
//   key2:"value2",
// };

// const obj2={
//   ley1:"valueUnique",
//   key3:"value3",
//   key4:"value4",
// };

// const newObj={...obj2,...obj1,key69:"value69"}
// //const newObject={...["item1","item2"]}
// console.log(newObj);

//object destructing

// const band={
//   bandName:"led zepplin",
//   famousSong:"stairway to heaven",
//   year:1968,
//   anotherFamousSong:"kashmir",
// };

// let{bandName,famousSong, ...restProps}=band;
// console.log(bandName);
// // console.log(famousSong);
// console.log(restProps);

//objects inside array

// const users=[
//   {userId:1,firstName:"harshit",gender:"male"},
//   {userId:2,firstName:"mohit",gender:"male"},
//   {userId:3,firstName:"nitish",gender:"male"},
// ]

// for(let user of users){
//   console.log(user.firstName)
// }

//nested destructing

//  const users=[
//    {userId:1,firstName:"harshit",gender:"male"},
//   {userId:2,firstName:"mohit",gender:"male"},
//   {userId:3,firstName:"nitish",gender:"male"},
//  ]

//  const[{firstName:user1firstname,userId}, ,  {gender:user3gender}]=users;
// console.log(user1firstname);
// console.log(userId)
// console.log(user3gender);


//function

// function firstChar(anyString){
//   return anyString[0]
// }

// console.log(firstChar("zbc"))

// function isEven(numbers){
//   return numbers%2===0;
// }

// console.log(isEven(5))

// function findTarget(array,target){
//   for(let i=0;i<array.length;i++){
//     if(array[i]==target)
//     return i;
//   }
//   return -1;
// }

// const myArray=[1,3,8,90]
// const ans=findTarget(myArray,7)
// console.log(ans)

//rest parameter

// function myFunc(a,b,...c){
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is ${c}`);
// }

// myFunc(4,5,6,7,8,9)

//default parameter

// function addTwo(a,b=0) {
//   return a+b;
// }

// const ans=addTwo(4,8);
// // console.log(ans)
// console.log(ans)


// function addAll(...numbers){
//   let total=0;

//   for(let number of numbers){
//     total=total+number;
//   }
//   return total;
// }

//  const ans=addAll(5,6,7,8);
//  console.log(ans)

//parm destructing

// const person={
// firstName:"harshit",
// gender:"male",
// age:500
// }

// function printDetails(obj){
//   console.log(obj.firstName)
//   console.log(obj.gender)
// }

// function printDetails({firstName,gender,age}){
// console.log(firstName)
// console.log(gender)
// console.log(age)
// }

// console.log(person)

//important array methoda

// const numbers=[4,2,5,8]

// function muFunction(number,index){
//   console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function(number,index){
//   console.log(`index is ${index} number is ${number}`)
// });

// numbers.forEach(function(numbers,index){
//   console.log(numbers*3,index)
// })

// const users=[
//  {firstName:"harshit", age:23},
//  {firstName:"mohit", age:21},
//  {firstName:"nitish", age:22},
//  {firstName:"garima", age:20},
// ]

// // users.forEach(function(user)
// // {
// //   console.log(user.firstName);
// // });


// for(let user of users){
//   console.log(user.firstName)
// }


//map method

// const array1=[1,4,9,16];

// const map1=array1.map((x)=>x*2);

// console.log(map1)

// const numbers=[1,4,16];
// const roots=numbers.map((num)=>Math.sqrt(num));
// console.log(roots)

// arrow functions

// const user1={
//   firstName:"harshit",
//   age:8,

//   about:()=>{
//     console.log(this.firstName,this.age);
//   }


// }
// user1.about(user1);

// const user1={
//   firstName:"harshit",
//   age:8,

//   about:function(){
//     console.log(this.firstName,this.age);
//   }


// }

// //user1.about()

//  const myFunc=user1.about.bind(user1);
//  console.log(myFunc)


// function about(hobby,favMusician){
//   console.log(this.firstName,this.age,hobby,favMusician)
// }

// const user1={
//   firstName:"harshit",
//   age:8,

// }

// const user2={
//   firstName:"mohit",
//   age:9,

// }
// //apply

// about.apply(user1,["guitar","bach"])

// //bind

// const func=about.bind(user2,"guitar","bach");
// func()

//methods

// function personInfo(){
//   console.log(`person name is ${this.firstName} and age is ${this.age}`);

// }

// const person1={
//   firstName:"harshit",
//   age:9,
//   about:personInfo
// }

// const person2={
//   firstName:"mohit",
//   age:10,
//   about:personInfo
// }

// const person3={
//   firstName:"garima",
//   age:11,
//   about:personInfo
// }

// //person1.about();
// // person2.about();
//   person3.about()

//optional chaining

// const user={
//   firstName:"harshit",
// //  address:{houseNumber:'1234'}
// }

// // console.log(user?.firstName)

// console.log(user?.address?.houseNumber)


//clone using Object.assign

// const obj={
//   key1:"value1",
//   key2:"value2"
// }

// // const Obj2={"key69":"value69",...obj}
// // console.log(Obj2)

// const obj2=Object.assign({"key69":"value69"},obj)
// console.log(obj);
// console.log(obj2);

//MAP
// const person={
//   firstName:"harshit",
//   age:7,
//   1:"one"
// }

// // console.log(person[1]);

// for(let key in person){
//   console.log(key)
//   console.log(typeof key)
// }

//key value pair

// const person=new Map();
// person.set('firstName','Harshit');
// person.set('age',7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1:'one'},'onetwothree');
// // console.log(person)
// console.log(person.get(1))
//     for(let keys of person.keys()){
//       console.log(keys)
//       console.log(typeof keys)

//     }


// const person1={
//   id:1,
//   firstName:'harshit',
// }

// const person2={
//   id:2,
//   firstName:'harshita',
// }

// const extraInfo=new Map();
// extraInfo.set(person1,{age:8,gender:"male"});
// extraInfo.set(person2,{age:9,gender:"female"});
    

//        //console.log(person1.id)

//        console.log(extraInfo.get(person1).gender);
//        console.log(extraInfo.get(person2).gender);


//SETS
// const items=["items1","items2","items3","items4"];
// const numbers=new Set();
// numbers.add(1)
// numbers.add(2)
// numbers.add(3)
// numbers.add(4)
// numbers.add(5)
// numbers.add(6)
// numbers.add(7)
// numbers.add(8)
// // console.log(numbers)
//       let a=numbers.add(items);
//       console.log(a)


// if(numbers.has(2)){
//   console.log("1 is present");
// }else{
//   console.log("1 is not present ")
// }

// for(let number of numbers){
//   console.log(numbers)
// }

// const myArray=[1,2,4,4,5,6,5,6];
// const UniqueElement=new Set(myArray)
// let length=0;

// for(let elements of UniqueElement){
//   length++;
// }

// console.log(length++)

// const firstName="harshit";
// for(let char of firstName){
//   console.log(char)
// }

// const items=["item1","item2","item3"]

// for(let item of items){
//   console.log(item);
// }

// console.log(firstName[2])

//splice method
// start, delete,insert

// const myArray=['item1','item2','item3'];
// // //delete

// // const deletedItem=myArray.splice(1)
// // console.log(deletedItem)

// //insert and delete
// const deletedItem=myArray.splice(1,2,"inserted item1","inserted item2")
// console.log(deletedItem)
// console.log(myArray)

//FILL METHOD
// VALUE START END
// const myArray=[1,2,3,4,5,6,7,8];
//     myArray.fill(0,2,5)
//     console.log(myArray)

//*SORTING*

// const username=['harshit','abcd','mohit','nitish','aabc','ABC',];
// username.sort()
// console.log(username)

// const numbers=[5,9,1200,410,3000];
//    numbers.sort((a,b)=>{
// return b-a;
//    });
//    console.log(numbers)


 //REDUCE
//  const numbers=[1,2,3,4,5,10];
   
//  const sum=numbers.reduce((accumulator,currentValue)=>{
//        return accumulator+currentValue
//  },1000);
//  console.log(sum)

// const userCart=[
//   {productId:1,productName:"mobile",price:1200},
//   {productId:2,productName:"laptop",price:22000},
//   {productId:3,productName:"tv",price:15000},
// ];
//   const total=userCart.reduce((totalPrice,currentProduct)=>{
//          return totalPrice+currentProduct.price;
//   },0);
//   console.log(total)

// MAP METHOD

// const users=[
//   {firstName:"harshit",age:23},
//   {firstName:"mohit",age:21},
//   {firstName:"nitish",age:22},
//   {firstName:"garima",age:20},
// ]

// const userNames=users.map((user)=>{
// return user.firstName
// });

// console.log(userNames)
 


































