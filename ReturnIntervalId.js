//Returns intervalId
function howareyou(){
    console.log(`I'm fine`);
}
let intervalId = setTimeout(howareyou, 5000);
console.log("Id: " + intervalId);