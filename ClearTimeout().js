let counter = 0;
function increaseCount(){
    counter += 1;
    console.log(counter);
}
let id = setTimeout(increaseCount, 1000);
clearTimeout(id);
console.log("SetTimeout is stopped");

//doubt
let count = 0;
function showTime(){
    count += 1;
    if(count == 5){
        clearTimeout(id)
    }
    let d = new Date();
    console.log(d.toLocaleTimeString());
    id = setTimeout(showTime,3000);
}
showTime();