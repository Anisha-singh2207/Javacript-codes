// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// const heading8 = document.querySelector(".heading8");
// const heading9 = document.querySelector(".heading9");
// const heading10 = document.querySelector(".heading10");

//callbackhell
// setTimeout(()=>{
//     heading1.textContent="one";
//     heading1.style.color="violet";
//     setTimeout(()=>{
// heading2.textContent="two";
// heading2.style.color="purple"
// setTimeout(()=>{
//     heading3.textContent="three";
//     heading3.computedStyleMap.color="red"
//     setTimeout(()=>{
//         heading4.textContent="four";
//         heading4.computedStyleMap.color="pink"
//         setTimeout(()=>{
//             heading5.textContent="five";
//             heading5.computedStyleMap.color="green"
            
//                 },2000)
//             },1000)
//         },2000)
//     },2000)
// },1000)


// function changeText(element,text,color,time,onSuccessCallback,onFailureCallBack){
//     setTimeout(()=>{
//         if(element){
//             element.textContent=text;
//             element.style.color=color;
//             if(onSuccessCallback){
//                 onSuccessCallback();
//             }
//         }else{
//             if(onFailureCallBack){
//                 onFailureCallBack();
//             }
//         }
//     },time)
// }


// changeText(heading1, "one","violet",1000,()=>{
//     changeText(heading2, "two","purple",2000,()=>{
//       changeText(heading3, "three","red",1000,()=>{
//         changeText(heading4, "four","pink",1000,()=>{
//           changeText(heading5, "five","green",2000,()=>{
//             changeText(heading6, "six","blue",1000,()=>{
//               changeText(heading7, "seven","brown",1000,()=>{
//                 changeText(heading8, "eight","cyan",1000,()=>{
//                   changeText(heading9, "nine","#cda562",1000,()=>{
//                     changeText(heading10, "ten","dca652",1000,()=>{
                      
//                     },()=>{console.log("Heading10 does not exist")})
//                   },()=>{console.log("Heading9 does not exist")})
//                 },()=>{console.log("Heading8 does not exist")})
//               },()=>{console.log("Heading7 does not exist")})
//             },()=>{console.log("Heading6 does not exist")})
//           },()=>{console.log("Heading5 does not exist")})
//         },()=>{console.log("Heading4 does not exist")})
//       },()=>{console.log("Heading3 does not exist")})
//     },()=>{console.log("Heading2 does not exist")})
//   },()=>{console.log("Heading1 does not exist")})


// / Promise
console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];



const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
})

// produce 



// consume 
// how to consume 

friedRicePromise.then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })


setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")
  
