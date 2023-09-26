

const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");

child.addEventListener("click",()=>{
    console.log("you clicked my me!!");
});

parent.addEventListener("click",()=>{
    console.log("you clicked parent!!");
});

