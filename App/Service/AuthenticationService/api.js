// a library to wrap and simplify api calls
import apisauce from 'apisauce';


// our "constructor"
const create = (baseURL = 'https://localhost:9999/v1/auth/') => {

    // Create and configure an apisauce-based api object.
    //
    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL,
        // here are some default headers
        headers: {
            'Cache-Control': 'no-cache'
        },
        timeout: 100000
    });


    //
    const loginUser = userCredentials => api.get('/login', userCredentials);

    //
    // Return back a collection of functions that we would consider our
    // interface.  Most of the time it'll be just the list of all the
    // methods in step 2.
    //
    // Notice we're not returning back the `api` created in step 1?  That's
    // because it is scoped privately.  This is one way to create truly
    // private scoped goodies in JavaScript.
    //
    return {
        // a list of the API functions from step 2
        loginUser,
    };
};

// let's return back our create method as the default.
export default {
    create
};
