let count = 0;
let id = setInterval(function(){
    count += 1;
    if(count == 5){
        clearInterval(id);
    }
    let d = new Date();
    console.log(d.toLocaleTimeString()); 
}, 3000);