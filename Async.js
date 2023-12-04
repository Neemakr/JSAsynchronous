async function Async(){
    console.log("Hello")
    return new Promise((res, rej) => {
        res(1)
    })
}
Async().then(value => console.log(value));

//Always returns a promise even if the return is a normal string or number it wraps inside a promise and returns a promise
async function f(){
    return "Namaste";
}
console.log(f());