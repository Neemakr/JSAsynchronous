function greet(name, cb){
    cb();
    console.log("Hi!" + " " + name);
}

function callMe(){
    console.log("Hello world!")
}

setTimeout(greet, 2000, "Neema", callMe);