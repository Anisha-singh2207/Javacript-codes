// select elements ny id only
// console.log(document.getElementById("main-heading"))

// console.dir( typeof document.getElementById("main-heading"))

//select elements by query selector

// const mainHeading=document.querySelector("#main-heading")
// console.log(mainHeading)

// const header=document.querySelector(".header");
// console.log(header)

// const navItems=document.querySelector(".nav-item");
// console.log(navItems);

//change text 
//text content and innertext

// const mainHeading=document.getElementById("main-heading")
//  console.log(mainHeading.textContent);
//  mainHeading.textContent="hii its me im the problem its me"
//   console.log(mainHeading.textContent);

// inner text
// const mainHeading=document.getElementById("main-heading")
//  console.log(mainHeading.innerText);

// change the styles of elements

// const mainHeading=document.querySelector("div.headline h2")
// console.log(mainHeading.style)
// mainHeading.style.backgroundColor="blue";
// mainHeading.style.border="20px solid green";

// // get attributes and set attributes
// const link=document.querySelector("a");
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("href").slice(1))
// link.setAttribute("href","nexthome")
// console.log(link.getAttribute("href"));


// const navItems=document.getElementsByTagName("a");
// console.log(navItems)
// console.log(navItems.length)

// const inputElements=document.querySelector(".form-todo input");
// console.log(inputElements);
// console.log(inputElements.getAttribute("type"));

// for(let i=0;i<navItems.length;i++){
//     const navItem=navItems[i];
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
// }


// const navItems=document.querySelectorAll(".nav-item");
// console.log(navItems[1])

// let navItems=document.getElementsByTagName("a");
// console.log(navItems);

// for(let i=0;i<navItems.length;i++){
//     console.log(navItems[i]);
//     navItems.style.backgroundColor="#fff";
//     navItems.style.color="green";
//     navItems.style.fontWeight="bold"
// }

//inner html
// const headline=document.querySelector(".headline")
//  console.log(headline)
// headline.innerHTML="<h1>Inner html changed</h1>"
// headline.innerHTML+="<button> Learn more"
// console.log(headline.innerHTML)

//DOM TREE

// const rootNode=document.getRootNode();
// console.log(rootNode);//document
// console.log(rootNode.childNodes);//HTML

// const rootNode=document.getRootNode();
// const htmlELementNode=rootNode.childNodes[0];
// console.log(htmlELementNode.childNodes);

// const sectiontodo=document.querySelector(".section-todo");
//  console.log(sectiontodo.classList)

//  sectiontodo.classList.add('bg-dark')
// //  sectiontodo.classList.remove('container')

//   const ans=sectiontodo.classList.contains("container")
//   console.log(ans)

// sectiontodo.classList.toggle("bg-dark")

// sectiontodo.classList.toggle("bg-dark")

// const header=document.querySelector(".header")
// console.log(header.classList);
// header.classList.add("bg-dark");

//sibling relation

// const h1=document.querySelector("h1");
// const body=h1.parentNode.parentNode;
// body.style.color="#efefef";
// body.style.backgroundColor="#333";
// const body=document.body;
// body.style.color="#efefef";
// body.style.backgroundColor="#333";

// console.log(body);




//add new elements to page
//inner html to add html elements

// const todoList=document.querySelector(".todo-list")
// console.log(todoList.innerHTML);
// todoList.innerHTML="<li>new to do</li>"

// todoList.innerHTML=todoList.innerHTML+"<li>new to do</li>"
// console.log(todoList.innerHTML)

// document.createElemnt()
//append
//prepend
//remove

// const newtodoItem=document.createElement("li");
// const newtodoItemText=document.createTextNode("Teach students");
// newtodoItem.appendChild(newtodoItemText);
// console.log(newtodoItem);

// const todo1=document.querySelector(".todo-list li");
// todo1.remove()
// console.log(todo1)

// const newtodoItem=document.createElement("li");
//   newtodoItem.textContent="teach students";
//   const todolist=document.querySelector(".todo-list");
// todolist.before(newtodoItem) 

//  const a= todolist.after(newtodoItem);
//  console.log(a)


//clones

// const ul=document.querySelector(".todo-list");
// const li=document.createElement("li");
// const referenceNode=document.querySelector(".first-todo")
// li.textContent="new todo";
// ul.replaceChild(li,referenceNode)
// ul.insertBefore(li,referenceNode);
// const li2=li.cloneNode(true);
// ul.append(li);
// ul.append(li2)

//static list vs live list
// const listItems=document.querySelectorAll(".todo-list li")
// const sixthLi=document.createElement("li");
// sixthLi.textContent="item 6";
// const ul=document.querySelector(".todo-list");
// ul.append(sixthLi)
// console.log(listItems)

//how to get dimensions of element
// const sectiontodo=document.querySelector(".section-todo");
//  const info=sectiontodo.getBoundingClientRect().height;
//  console.log(info)// gives height and width of the elements;

// intro to EventSource
//click

// 1.

// const btn=document.querySelector(".btn-headline");
// console.dir(btn);

// btn.onclick=function(){
//     console.log("You clicked me!!!!!!!!!")
// }

//method>>>>>>>>>>>>>>>>add event listener
//2.
// const btn=document.querySelector(".btn-headline");
// function Clickme(){
//     console.log("You clicked me !!!");
// }

// btn.addEventListener("click",Clickme)

//keypress event
//mouseover event
// const body=document.body;

// // body.addEventListener("keypress",(e)=>{
// //     console.log(e.key)
// // });

// const mainButton=document.querySelector(".btn-headline");
// console.log(mainButton)

// mainButton.addEventListener("mouseover",()=>{
//    console.log("mouseover even occured!!!!!!!!")
// });

// mainButton.addEventListener("mouseleave",()=>{
//     console.log("mouseleave even occured!!!!!!!!")
//  });
 
//event building
//event capturing
//event delegation


// const todoForm=document.querySelector(".form-todo");
// // console.log(todoForm)
// const todoInput=document.querySelector(".form-todo input[type='text']");
// console.log(todoInput)
// todoForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     // console.log("form submitted!!!")
//     console.log(todoInput.value)
//     todoInput.value=""
// });



