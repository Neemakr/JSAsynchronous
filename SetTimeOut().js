//setTimeout() takes the function and attaches a timer to it and continues with the next line of code
//It doesn't wait for 3 secs
function greet(){
    console.log("Hello World");
}
setTimeout(greet, 3000);
console.log("This message is executed first");

function x(){
    var i = 50;
    setTimeout(function(){
        console.log(i);
    }, 3000)
}
x();

let j =99;
setTimeout(function(){
    console.log(j);
}, 5000);

//setTimeout() with parameters
function greet(firstName, lastName){
    console.log("Hi" + " " + firstName + " "+ lastName);
}
setTimeout(greet, 2000, "Kavya", "Kulkarni");