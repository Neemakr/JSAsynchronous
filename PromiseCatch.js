let promise = new Promise(function greet(resolve, reject){
    //resolve("Successfully executed");
    reject("Rejected");
})

promise.then(
    function (value){
        console.log(value);
    },
)
.catch(
    function (value){
        console.log("Promise rejected " +value);
    }
)
