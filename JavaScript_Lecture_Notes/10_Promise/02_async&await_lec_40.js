{
/* 
    //* Important

    //! To handle Async codes, there are two ways:

    -Promise object with .then and .catch
    -Promise with async-await (with try, catch)


    */
}

{

    //* Async-await
    //Note: async/await is a modern way to handle asynchronous code in JavaScript. It makes working with Promises easier and code more readable. Before async/await, we used callbacks (😵 callback hell) or Promises (.then() chains). These worked but made code harder to read.

    //Note: await stops the execution of the async function until the Promise is either resolved or rejected. If we don't await, the code will be immediately executed and hence we won't be able to access data or do a particular task below (which might take some time to execute). Since agar data aane ka wait hi nahi kiya toh, ussse aage acess kaise karenge?? Therefore, we need to stop the execution process till kuch response aaye!

    //? We use this along with try-catch block to do the above things but this time with different approach

    
//! async is a keyword used before the function
//! await stops the execution of the async function, till we get a response
//! try handles the response() and catch handles the error

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){

    try {
        const response = await promiseFive //here the paramter passed in the resolve it stored in the response
        console.log(response);
    } 
    
    //if rejected, catch is triggered
    catch (error) {
        console.log(error);
    }

}

consumePromiseFive() //the async function needs to be obviously called for it to run


}