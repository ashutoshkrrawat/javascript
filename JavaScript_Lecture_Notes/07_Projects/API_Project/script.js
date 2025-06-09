{
  /* 

    //* KeyTakeaways

    - using keydown event on text type input tag
    - using e.target.value to get the value inputted by the user inside the input tag
    - used some if-elses to tackle edge case where the user might not exist or an error might occur or API request limit might have exceeded!!


*/
}

const inputElement = document.querySelector("input"); //selects the input tag

//we added an keydown event on our input tag. Therefore, whenever we click eneter on our input tag, it triggers the event
inputElement.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    const userName = e.target.value; //this gets the input data from the input tag

    console.log(userName);

    const gitHubApiUrl = `https://api.github.com/users/${userName}`; //used to create an api url based on the input username

    const xhr = new XMLHttpRequest(); //creating a new XMLHttpRequest object

    xhr.open("GET", gitHubApiUrl); //this sets the request method, request url etc
    xhr.send(); //this initiates the request

    //this is the event which gets triggered when a change in readystate occurs
    xhr.onreadystatechange = function () {
      //4 -> operation is complete
      if (xhr.readyState == 4) {
        const data = JSON.parse(this.responseText); //we receive a string data, which we parse into JSON
        console.log("Data fetched!");

        //login is the username we get from the api. If the username exists (i.e. if the user exists then only the below is executed)
        if (data.login) {
          //* Data fetched succesfully! Add DOM here
          document.querySelector(
            "#pfp"
          ).innerHTML = `<a href ="https://github.com/${userName}" target = "_blank"><img src ="${data.avatar_url}"></a>`;

          //checking if the user has set his name. If not just display his username
          data.name
            ? (document.querySelector("#userName").innerHTML = `${data.name}`)
            : (document.querySelector("#userName").innerHTML = `${data.login}`);

          document.querySelector(
            "#followers"
          ).innerHTML = `Followers: ${data.followers}`;

          document.querySelector(
            "#following"
          ).innerHTML = `Following: ${data.following}`;

          document.querySelector(
            "#gitRepo"
          ).innerHTML = `Total Git Repo: ${data.public_repos}`;
        }

        //if 404 is received from the API, it means an error has occured (we also check if the input value is not empty)
        //here we went to each elements and removed the innerText, then we added our text.
        else if (data.status == 404 && e.target.value) {
          Array.from(document.querySelector(".cardHolder").childNodes).forEach(
            (element) => {
              console.log(element);
              element.innerText = "";
            }
          );

          document.querySelector("#userName").innerHTML =
            "No such user exists!";
        }

        //this checks if the API limit exceeds (currently: 60 per hour)
        else if (
          (data.message.includes =
            "API request limit exceeded" && e.target.value)
        ) {
          Array.from(document.querySelector(".cardHolder").childNodes).forEach(
            (element) => {
              console.log(element);
              element.innerText = "";
            }
          );

          document.querySelector("#userName").innerHTML = "API limit exceeded!";
        }

        else {
          Array.from(document.querySelector(".cardHolder").childNodes).forEach(
            (element) => {
              console.log(element);
              element.innerText = "";
            }
          );

          document.querySelector("#userName").innerHTML = "Kindly enter a valid username!";
        }
      }
    };
  }
});
