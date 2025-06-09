{
  //* Parent to Children (.children)
  const parentClass = document.querySelector(".week");

  //! By adding '.children' to the element, we can acess the child elements (in HTMLCollection) 
  
  //? Here we can only access the child elements, but by using .childNodes, we can access other than child elements as well like text node etc

  console.log(parentClass.children);

  //Note: Since, it is HTMLCollection, we can access elements by indexes.

  console.log(parentClass.children[1]);

  //! We can use our classic for-loop on HTMLCollection and NodeList

  //* Using for-loop on HTMLCollection

  for (let i = 0; i < parentClass.children.length; i++) {
    console.log(parentClass.children[i].innerHTML);
  }

  parentClass.children[1].style.color = "red"

}

{

    //* Other properties of parent

    const iAmParent = document.querySelector('.week')

    //* .firstElementChild 
    //? it fetches the first child element of the parent
    console.log(iAmParent.firstElementChild);

    //* .lastElementChild
    //? it fetches the last child element of the parent
    console.log(iAmParent.lastElementChild);

}

//! QuerySelector is an expensive operation as we are traversing the entire tree. Therfore, we can directly go to child from parent using above and from children to parent using below

{

    //* Children to Parent (.parentElement)

    const dayOne = document.querySelector ('.day')

    //? Here, the parent element of the child gets selected
    console.log(dayOne.parentElement);

    //* .nextElementSibling

    //? This fetches the child element below the current child element
    console.log(dayOne.nextElementSibling);

}

{
  
    const iAmParent = document.querySelector('.week')

    //* NodeList

    //? A nodelist is a collection of document nodes which includes text nodes , attribute nodes and element nodes, comment nodes. A line break is also counted in nodelist.

    console.log("Nodes: ", iAmParent.childNodes);
    //! We can see that NodeList also has elements other than our div child. These include text nodes, comments etc 
}