{

    //* fetch
    //? The global fetch() method starts the process of fetching a resource from the network. returning a promise which is fulfilled once the response is available.

    //! fetch() promise doesn't reject HTTP errors (like 404 etc), in such cases it still gives response in the form of error code and doesn't rejects or give error. Therefore, a .then() handler needs to be used to check the Response.ok or Response.status

    //Note: We can add objects as second parameter as well

    fetch ('url', {object})


}