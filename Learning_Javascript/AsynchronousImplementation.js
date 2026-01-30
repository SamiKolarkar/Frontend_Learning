/// Asynchronous implementation using Callback functions
setTimeout(function callback(){
    console.log(">Callback is implemented successfully");
}, 1000);

/// Performing Multiple work without sequential waiting using Asynchronous programming
function one(callback){
    setTimeout(4000);
    callback();
}
function two(callback) {
    setTimeout(4000);
    callback();
}
//Callback hell
one(()=>{
    console.log(">This is the first output...");
    two(()=>{
        console.log(">This is the second output...");
    });
})


/// Using Promises
let promise1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let d1=new Date(Date.now());
        if (d1.getMinutes()%2==0) resolve(">Ran at even minutes...");
        else reject(">Oops minute is odd...");
    }, 11000);
});

let promise2=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(">This is second chaining of promise...");
    }, 12000)
});

console.log(
    promise1.then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error); 
    })
);