///////////////////////////////
// Promises
//////////////////////////////
// An object with three states (pending, rejected, fulfilled)
// Purpose is to handle asynchronous or time consuming events without blocking the rest of your code.
// Promises are non-blocking so other code will run while the promise is pending
//Chain a .then(callback) function to trigger actions to happen when the promise is fulfilled
//Chain a .catch(callback) function to trigger actions to happen when a promise is rejected

//////////////////////////
//Promise Syntax
//////////////////////////
// const myPromise = new Promise((resolve, reject) => {})
// myPromise.then((result) => {}).catch((error) => {})
