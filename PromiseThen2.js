let z = 5;
let promise1 = new Promise(
    function checkValue(resolve, reject){
        if(z == 0){
            resolve("Okayyyy")
        }
        else{
            reject("Errorrrr");
        }
    }
)

//Having two parameters in .then then it will execute only success or failure 
promise1.then(
    function (value){
        console.log(value);
    },
    function (error){
        console.log(error);
    }
)