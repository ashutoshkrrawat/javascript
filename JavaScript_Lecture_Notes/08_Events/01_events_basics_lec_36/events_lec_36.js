// {

//     //* Important discussion

//     //! Event listeners once attached to an element remains thoroughout until and unless it is removed manually. To do this use named function as an parameter

//     //Named function
//     function handleClick(e) {
//         console.log("Button clicked!");
//     }
    
//     // Select the button
//     let button = document.querySelector("button");
    
//     // Add event listener - we used named functionn reference instead of an anonymous function
//     button.addEventListener("click", handleClick);
    
//     // Remove event listener after 5 seconds
//     setTimeout(() => {
//         button.removeEventListener("click", handleClick); // this removes the event listener from the element
//         console.log("Event listener removed!");
//     }, 5000);
    
// }


// {
//   //* How to deal with clicking an element and doing something

//   //*Method-I (using onclick in the HTML tag itself)
//   //! This method is avoided and not a good practice

//   //<img width="200px" id="prayer" src="" alt="" onclick = "alert ('Prayer done!')">

//   //* Method-II (using .onclick in JS)
//   //! This is also genrally avoided - since this gives us less features and is not the modern approach

//   document.getElementById("prayer").onclick = function () {
//     alert("Prayer done!");
//   };

//   //*Method-III (attachEvent() during early days)

//   //* Method-IV (using .onEvent in jQuery)

//   //* Method-V (using eventListener)
//   //! This is the best approach/practice (use this)

//   // .addEventListener ('event_name', inline function)

//   document.getElementById("owl").addEventListener("click", function () {
//     alert("Owl clicked!");
//   });

//   //Note: There are three parameters in .addEventListener. The third one is by default false.
// }

// {
//   document.getElementById("river").addEventListener(
//     "click",
//     function (e) {
//       console.log(e);
//     },
//     false
//   ); //false is the default value of third parameter

//   //? Types of event object to know (for interviews):

//   /*

// Here's a quick rundown of all these event properties in JavaScript:

// - type → The type of event (e.g., `"click"`, `"keydown"`, `"mouseover"`).  

// - timeStamp → The time (in milliseconds) when the event was created.  

// - preventDefault() → A method that prevents the default action of an event (e.g., stopping a form submission).  

// - target → The actual element that triggered the event.  

// - toElement → The element the pointer moved to (mostly used in `mouseover/mouseout` events, but not standard in modern browsers).  

// - srcElement → Same as `target`, but mainly used in older versions of Internet Explorer.  

// - currentTarget → The element that the event listener is attached to (useful for event delegation).  

// - clientX → The x-coordinate of the mouse relative to the viewport (browser window).  

// - clientY → The y-coordinate of the mouse relative to the viewport.  

// - screenX → The x-coordinate of the mouse relative to the entire screen. 

// - screenY → The y-coordinate of the mouse relative to the screen.  

// - altKey → `true` if the `Alt` key was pressed during the event, otherwise `false`.  

// - ctrlKey → `true` if the `Ctrl` key was pressed.  

// - shiftKey → `true` if the `Shift` key was pressed.  

// - keyCode → The numeric code of the key pressed (deprecated, use `event.key` instead).  

//     */
// }
// {
//     //? The parameter of the function is the event object. You can see by doing console.log ("parameter_name")

//     //? The event object is a built-in object that carries all data about an event whenever an event listener runs.
// }
// {
//   /*

//     The two types of events in JavaScript's event propagation model are:

//     //* Bubble Event (Event Bubbling) and Capture Event (Event Capturing or Trickling)
    
//     1️⃣ Event Bubbling (Default behavior)

//     The event starts at the target element and bubbles up through its ancestors.

//     Example: If you click a button inside a div, the event first triggers on the button, then on the div, and then on the body, etc.

//     Handlers set with .addEventListener(event, handler) by default use bubbling. (the third parameter is by default is false)


//     2️⃣ Event Capturing (Trickling)

//     The event starts at the topmost ancestor (like document or body) and trickles down to the target element.

//     Example: If you click a button inside a div, the event first triggers on body, then the div, then on the button, etc.

//     To enable capturing, you must set the useCapture parameter to true in .addEventListener(event, handler, true).


// */
// }

{

    //* Event Bubbling (default behaviour)


    // document.getElementById('images').addEventListener('click', function (e) {
    //     console.log("Clicked inside images (ul)");
    // })

    // document.getElementById('river').addEventListener ('click', function (e) {
    //     console.log("Clicked river (li)");
    // })

    //! If we run this, we will first get "Clicked river (li)" and then "Clicked inside images (ul)". Since, here by default it is false



    //* Event Capturing


    document.getElementById('images').addEventListener('click', function (e) {
        console.log("Clicked inside images (ul)");
    }, true)

    document.getElementById('japan').addEventListener ('click', function (e) {
        console.log("Clicked japan (li)");
    }, true)

    //! If we run this, we will first get "Clicked inside images (ul)" and then "Clicked japan (li)". Since, here we have set the third parameter to true


}

// {

//     //* .stopPropagation()

//     //? This prevents the event from propagating further

//     document.getElementById('images').addEventListener('click', function (e) {
//         console.log("Clicked inside images (ul)");
//     }, false)

//     document.getElementById('river').addEventListener ('click', function (e) {
        
        
//         console.log("Clicked river (li)");
//         e.stopPropagation() //! This prevents event from propagating (here bubbling). Therfore, only this event is triggered and not the above one (which would have been triggered after this one, due to bubbling)
        
//     }, false)


// }

// {

//     //* preventDefault()
//     //? prevents the default behaviour of a tag

//     document.getElementById('google').addEventListener ('click', function (e) {
//         console.log("Google Clicked!");
//         e.preventDefault()
//     }, false);

//     //! Here by default, google link should have been opened. But due to .preventDefault(), it didn't do so...

//     //* .target
//     //? gives us the target element

//     document.querySelector ('#images').addEventListener ('click', function (e) {
//         console.log(e.target); //gives us the element of images which was selected

//         console.log(e.target.parentNode); //? gives us the parentNode of the target element (here the parent element of the img element is li element)
//     }, false)


//     //* .tagName 
//     //? This gives us the tag name of the target element is uppercase

//     document.querySelector ('#images').addEventListener ('click', function (e) {
//         console.log(e.target.tagName); //? This gives us the tag name of the target element
//     })

// }

// {

//     //* Removing an image when clicked on it

//     document.querySelector('#images').addEventListener ('click', function (e) {

//         //* Method-I (modern approach)

//         const toBeRemoved = e.target.parentNode //if an image was to be clicked, it's parent node would have been the li containign the image...

//         if (e.target.tagName == 'IMG') {

//         toBeRemoved.remove() //? This is the modern approach


//     //? Why the if condition was used above?
//     //! If we click on image then the target becomes img and hence its parent becomes li, which gets removed!! This is what we want.... BUT!!! If we click inside ul anywhere other than the image, the target element becomes li, whose parent element is ul, which when gets removed, removes the ul entirely (which causes every elements inside the ul to get deleted)


//         //* Method-II (used earlier)

//         /*

//         //? This method was used earlier to do the same

//         const toBeRemoved2 = e.target.parentNode

//         toBeRemoved2.parentNode.removeChild(toBeRemoved2) //here toBeRemoved2.parentNode gives us the ul element, of which we removed the toBeRemoved2 child

//         */
//         }

//     })

 
// }
