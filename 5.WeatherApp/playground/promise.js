var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(typeof b);
            if (typeof a != 'number' || typeof b != 'number') {
                reject('not numbers');
            } else {
                resolve(a + b);
            }
        }, 1000)
    })
}

var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hey it worked');
    }, 2500);
});

//reject if error
// can only resolve or reject - not twice

somePromise.then((message) => {
    console.log('message : ' + message);
}, (error) => {
    console.log('error : ' + error);
})

var addPromise = asyncAdd(5, 7);
addPromise.then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
})

asyncAdd(1, 'b').then((message) => {
    console.log(message);
}, (error) => {
    console.log(error);
});

asyncAdd(1, 'b').then((message) => {
    console.log(message);
}).catch((error)=>{
    console.log(error);
});