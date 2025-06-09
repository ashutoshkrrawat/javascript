{

    //* Creating and adding a new element

    const myNewElement = document.createElement('div')  //creates a new element of 'div' type

    myNewElement.className = "main" // sets the class to "main"

    myNewElement.id = Math.round(Math.random() * 10 + 1) //sets our id for the tag

    //? in .setAttribute (), we have key-value pairs as an arggument
    myNewElement.setAttribute("title", "generated title") //sets an attribute (here, title)

    //Giving styling to the element
    myNewElement.style.backgroundColor = "green"
    myNewElement.style.padding = "12px"



    //* Adding content in the tag


    //* Method-I 
    myNewElement.innerText = "Chai aur code"


    //*Method-II (generally said to be optimised)
    const addText = document.createTextNode("Chai aur code")
    myNewElement.appendChild(addText)



    //? Below is to add the created element to the page
    document.body.appendChild(myNewElement)
    
}