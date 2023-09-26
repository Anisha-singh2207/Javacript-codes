const mainButton=document.querySelector("button");
// console.log(mainButton);
const body=document.body;

const CurrentColor=document.querySelector(".current-color");
console.log(CurrentColor)

function randomColorGenerator(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const randomColor=`rgb(${red},${green},${blue})`
    return randomColor;
}








mainButton.addEventListener("click",()=>{
    // console.log("you clicked me!!!!!!!!")
    const randomColor=randomColorGenerator();
    // console.log(randomColor);
    body.style.backgroundColor=randomColor;
    // CurrentColor.textContent="randomColor"
})