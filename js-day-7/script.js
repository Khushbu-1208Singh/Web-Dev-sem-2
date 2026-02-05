//create element
const para = document.createElement("p");
para.textContent="This is a dynamically added paragraph";
console.log(para);
// append element
document.getElementById("content").
appendChild(para)
document.querySelector("#content p").remove()
 // we don't use get element by as there could be multiple para and we could not distinguish.
const image = document.getElementById("img");
image.setAttribute("src","https://petapixel.com/assets/uploads/2024/01/The-Star-of-System-Sol-Rectangle-640x800.jpg")
image.setAttribute("alt","strawberry")
const gallery = document.getElementById("gallery");
gallery.appendChild(image);

//date method
// digital clock
setInterval(()=> {
    let date = new Date();
console.log(date);
let hour = date.getHours();
let min = date.getMinutes();
let second = date.getSeconds();
const clock = document.getElementById("digi-clock");
},1000)



