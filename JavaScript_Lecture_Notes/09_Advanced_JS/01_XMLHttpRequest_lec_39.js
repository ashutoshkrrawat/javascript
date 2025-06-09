{

  //! This is the old method of handling APIs
  //*XMLHttpRequest
  //? XMLHttpRequest (XHR) objects are used to interact with servers.

  /*

  .readyState  State and   meaning
  
    0	   UNSENT	            Client has been created. open() not called yet.
    1	   OPENED	            open() has been called.
    2	   HEADERS_RECEIVED	  send() has been called, and headers and status are  available.
    3	   LOADING	          Downloading; responseText holds partial data.
    4	   DONE	              The operation is complete.
  
  
  */

  const requestUrl =
    "https://api.github.com/users/prana-w";

  //* Creating an instance of the object (XMLHttpRequest)

  const xhr = new XMLHttpRequest();


  //* .open()
  //? Sets the request method, request URL, and synchronous flag.

  xhr.open("GET", requestUrl); //! this sets the request method, request url etc
  xhr.send(); //! This actually initiates the request


  //* .onreadystatechange()
  //? activates everytime the state changes (this is an event)

  xhr.onreadystatechange = function () {

    console.log(xhr.readyState); //? Prints the code for current state

    //4 means when the operation is done
    if (xhr.readyState === 4) {
      //! The response sheet is the API response we receive. It comes as a string and hence needs to be converted into JSON format to do any thing

      const data = JSON.parse(this.responseText);

      console.log(typeof data); //now object (if was not parsed into JSON, it would have been string)

      console.log(data.followers); //Now we can access any property/method of the response (object)
    }
  };

}
