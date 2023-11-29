function showTime(){
    let d = new Date();
    console.log(d.toLocaleTimeString());
}
setInterval(showTime, 3000);