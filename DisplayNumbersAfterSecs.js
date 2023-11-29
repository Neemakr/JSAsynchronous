//Display the numbers after i secs

//This will print 6 after each sec because when a setTimeout() is used setTimeout will take the function and attach the timer to it
//and also the reference to the variable 
//When it executes the first time it will attach a timer to the function also it creates 5 functions with the timer all 5 functions 
//refering to the same reference of i so after i secs the reference to i will be 6 because the environment for all functions are same
function x(){
    for( var i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000);
    }
}
x();

//Let has a block scope so for each function it creates a seperate variable
function show(){
    for(let i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i)
        }, i * 1000)
    }
}
show();

function show1(){
    for(var j = 1; j <= 5; j++){
        function close(j){
            setTimeout(function(){
                console.log(j);
            }, j * 1000)
        }
        close(j);
    }
}
show1();