let countValue = new Promise(function greet(resolve, reject){
    resolve("Promise resolved")
})
console.log(countValue);
countValue.finally(function(){
    console.log("The code is executed regardless of resolve or reject")
})