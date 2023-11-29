let promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Resolved")
    }, 1000);
})
async function f(){
    let result = await promise;
    console.log(result);
    console.log("hello");
}
f();