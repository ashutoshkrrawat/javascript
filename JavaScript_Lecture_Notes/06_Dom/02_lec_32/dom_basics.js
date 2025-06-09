{
  //* To get the element
  const elem = document.getElementById("title"); //? gets element by its id

  document.getElementsByClassName("heading"); //? gets all elements by its class

  //* To get value of attributes of the element
  document.getElementById("title").id; //? returns the id of the selected element

  //! Note: In the below, we have to use .className to actually get the class of the element (and not works simpley by .class)
  document.getElementById("title").className; //? returns the class of the selected element
}

{
  //* To get any attribute of the element

  document.getElementById("title").getAttribute("id"); //? returns the value of a partiular attribute of the selected element (here its id)
  document.getElementById("title").getAttribute("class"); //? same as above (here its class)

  //* Setting an attribute of an element
  //Note: It overrides the already existing attribute of the element

  document
    .getElementById("title")
    .setAttribute("class", "any-random-class-name"); //? This sets the attribute 'class' to 'any-random-class-name'. It overrides the previous value of the attribute, if present
}

{
  //* Styles

  const elem = document.getElementById("title");

  //* Setting a background-color of the element

  elem.style.backgroundColor = "green"; //this sets the back-ground color of the given element

  //* Setting other properties

  elem.style.padding = "15px";

  elem.style.borderRadius = "15px";
}

{
  const elem = document.getElementById("title");

  //* To return the contents of the tags (elements)

  console.log(elem.innerHTML); //? gives the entire HTML inside the element selected

  console.log(elem.innerText); //? gives only the content visible in the page (not returns the hidden content)

  console.log(elem.textContent); //? gives entire text content inside it (even if something is hidden)

}

{

    //* Query selector - selects the first desired element
    //Note: It uses same selectors as in CSS

    //* To get by type of element (tags)
    document.querySelector ('h1') //? This selects the first h1 element in the page

    //* To get by id
    document.querySelector ("#title") //? This selects the first element that has the id : "title"

    //* To get by class 
    document.querySelector (".heading") //? This selects the first element that has the class as : "heading"

    //* Others (like in CSS)

    document.querySelector ('input[type = "password"]')
    document.querySelector ('p : first-child')
    document.querySelector ('li : nth-child(2)')
}

{

    //* Using querySelector on unordered list (ul)

    const myul = document.querySelector ('ul') //? this selects the first "ul"

    const firstulItem = myul.querySelector ('li') //?This selects the first list-item of the "myul"

    firstulItem.style.backgroundColor = "green" //? this turns the background color of the firstulItem to green

    firstulItem.innerHTML //? return the HTML inside the element

    firstulItem.innerHTML = "I-have-changed!" //? this changes the innerHTML to the set value
}

{

    //* NodeList
    
    //* querySelectorAll - selects all our desired element

    //! Here we get a node list of all elements (which is not an array, but is similar to array in few ways) 

    //Note: In nodeList, we can access elements using indexes, and we can also use forEach loop on it

    const templiList = document.querySelectorAll ('li') //? selects all the elements which are "li" and puts in a  node list - templiList

    console.log(typeof templiList); //object

    //* Changing a particular Node list item

    templiList[1].style.color = "green" //? here we went to second element in the node list (1st index) and changed its color to green

    //* Using forEach on NodeList

    templiList.forEach ( (x) => {
        x.style.color = 'green'
    });

    //* NodeList to Array

    const myArray = Array.from (templiList)

    //! Now we got an array and can use all methods on it like in an array

}

{

    //* HTMLCollection 

    //! Here we get a collection of elements in the form of HTMLCollection
    const tempList = document.getElementsByClassName ('list-item')

    //* HTMLCollection to Array

    const myConvertedArray = Array.from (tempList) //here we got an array
    //? Now we can use all methods of array on it
    
    myConvertedArray.forEach ( (l) => {
        l.style.color = 'orange'
    });


}

{

  //! We can use our classic for-loop on HTMLCollection and NodeList
  
}

