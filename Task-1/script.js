// Task-1 -> Profile section styling (ID)
const profile = document.getElementById("profile");
profile.style.backgroundColor="pink";
profile.style.padding="15px";
profile.style.textAlign="center";
//Task-2 -> Highlight important text
//change text color
//increase font size 
// print total count in console.
const highlight = document.getElementsByClassName("important");
console.log(highlight)
for(let i=0;i<highlight.length;i++){
    highlight[i].style.color = "blue"
    highlight[i].style.fontsize = "20px"
}
console.log 