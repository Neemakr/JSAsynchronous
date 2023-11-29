//Promise is used to find out whether Asynchronous function is executed successfully or not. When a promise is started it will be in pending state, so if the operation is successful, the process is ends in a fulfilled state if an error occcurs it ends in a rejected state.
//To create a promise we use promise() constructor.
const promise = new Promise(function(resolve, reject){
    //Function code
});

let count = false;
let countValue = new Promise(function(resolve, reject){
    if(count){
        resolve("Resolved successfully");
    }
    else{
        reject("Rejected")
    }
})
console.log(countValue);

let count1 = true;
let countValue1 = new Promise(greet);
function greet(resolve, reject){
    if(count1){
        resolve("Count1 Resolved successfully");
    }
    else{
        reject("Count1 rejected");
    }
}
console.log(countValue1);