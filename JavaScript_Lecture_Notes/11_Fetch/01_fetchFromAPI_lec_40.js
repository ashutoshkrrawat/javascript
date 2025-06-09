{
    /*

    //* Handeling APIS
    //! There are many ways

    - XMLHttpRequest (XHR) - old and not reccomended - discussed in Advanced JS
    - XMLHttpRequest (XHR) with Promises - not reccomended
    - fetch() (using .then and .catch) - reccomended (modern approach)
    - fetch() (using async, awit, try, catch) - reccomended (modern approach)


     */

}


{

    //* Fetching data from API 


    //* Using async-await


    async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') //! here we have to wait (pause async function) till we get a response from the API

        const data = await response.json() //! here we do await because it takes time to convert to json file. Therefore, we need to wait else we can't acess it if we directly move to next line

        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()



//* Using .then .catch



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

//* HW

// promise.all
// yes this is also available, kuch reading aap b kro.



}


{


    //* Important point for interview

    //! Promise doesn't reject on HTTP errors (like 404 etc), even in such cases it gives response (and not rejects)
}
