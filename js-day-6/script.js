const headingElement = document.getElementById('myHeading');
console.log(headingElement);
headingElement.textContent="New Heading";
headingElement.style.color="blue";
headingElement.style.backgroundColor="pink";
//select the first <p> element inside the #content div using queryselector
//#content div using querySelector
const paragraph = document.querySelector("#content p");
//change the text content of the selected paragraph
paragraph.textContent = "This paragraph has been updated using queryselector.";
//change the style of the selected paragraph
paragraph.style.color="violet";