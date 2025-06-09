{
  //* Adding a list item

  function addNewItem(langName) {


    const listItem = document.createElement("li");
    listItem.innerHTML = `${langName}`;


    document.querySelector(".language").appendChild(listItem);
  }

  addNewItem("C++");
  addNewItem("Java");
}

//! The above way of adding is not optimised, since we are adding element at the end, so each time it had to traverse the entire tree till the end. That's why we need an optimised approach for large codebases

{
  //* Optimised Approach

  function addByOptimisedWay(langName) {


    const listItem = document.createElement("li");

    listItem.appendChild(document.createTextNode(langName))


    document.querySelector('.language').appendChild(listItem)
  }

  addByOptimisedWay ("Python")

}

{
    //* Editting a list-item

    //*Method-I (directly changing the innerHTML)

    const secondLang = document.querySelector("li:nth-child(2)")

    secondLang.innerHTML = "Mojo"

    //* Method-II (creating a new element and then replacing it with our target)

    const newli = document.createElement('li')

    newli.innerText = "Mojo" //we can also use .textContent or .innerHTML

    secondLang.replaceWith(newli) //! .replaceWith() is used to replace secondLang with newli

    //* Method-III (chnaging the outerHTML)

    const firstLang = document.querySelector("li:first-child")
    firstLang.outerHTML = '<li>TypeScript</li>'

}

// {

//     //* Removing an list-item

//     const lastLang = document.querySelector('li:last-child')
    
//     lastLang.remove()
  
// }