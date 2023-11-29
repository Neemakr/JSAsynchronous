let x = 0;
function y(myResolve, myReject){
    if(x == 0){
        myResolve("Ok")
    }
    else{
        myReject("Error")
    }
}
const promise = new Promise(y);
console.log(promise);

//Chain of then it will execute all thens it is optional to have two parameters we can mention only for a success or for a failure
promise.then(
    function Successvalue(value){
        console.log(value);
    }
)

promise.then(
    function (value){
        console.log("Successfully executed" + " " +value)
    }
)