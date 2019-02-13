//Promise.all()
//The Promise.all() method returns a single Promise that resolves when all of the promises passed as an iterable have resolved or when the iterable contains no promises. 
//It rejects with the reason of the first promise that rejects.


let p1 = Promise.resolve('Happy Friday!');
let p2 = "End of the Week";
let p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'Thank Goodness!');
});

Promise.all([p1, p2, p3]).then(function (output) {
    console.log(output);
});

//*************************************************************** 

//Promise.race()
//The Promise.race() method returns a promise that resolves or rejects as soon as one of the promises in an iterable resolves or rejects, with the value or reason from that promise.
let racePromise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 200, '1 wins!');
});

let racePromise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 400, '2 does not');
});

Promise.race([racePromise1, racePromise2]).then(function (value) {
    console.log(value);
    // Both resolve, but racePromise1 is faster
});

//*************************************************************** 

//Promise.reject()
//The Promise.reject() method returns a Promise object that is rejected with a given reason.

function resolved(result) {
    console.log('Resolve!');
}

function rejected(result) {
    console.log(result);
}

Promise.reject(new Error('Fail!')).then(resolved, rejected);

//******************************************************************

//The Promise.resolve()
//The Promise.resolve() method returns a Promise object that is resolved with a given value. 
//If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. 
//This function flattens nested layers of promise-like objects (e.g. a promise that resolves to a promise that resolves to something) into a single layer.

let resolvePromise1 = Promise.resolve("Here is the value resolved!");

resolvePromise1.then(function (resolveValue) {
    console.log(resolveValue);

});