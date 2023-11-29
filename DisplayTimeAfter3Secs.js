//Display time after every 3 secs
function showTime(){
    let timenow = new Date();
    console.log(timenow.toLocaleTimeString());
    setTimeout(showTime, 3000);
}
showTime();