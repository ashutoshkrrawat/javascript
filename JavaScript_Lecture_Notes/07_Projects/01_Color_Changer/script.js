const buttons = document.querySelectorAll(".button"); //gives a NodeList of all having class as "button"
const myBody = document.querySelector("body"); //gives us the body of the document

//here we assigned an event listener to each element of the NodeList to change the color to the element's id when clicked

//* KeyTakeawys

/*


- e.target :this gets the target element
- e.target.id : this gets the id of the target element


*/

buttons.forEach((element) => {
  element.addEventListener('click', function (e) {
    myBody.style.backgroundColor = e.target.id;
  });
});
