async function Async(){
    console.log("Hello")
    return new Promise((res, rej) => {
        res(1)
    })
}
Async().then(value => console.log(value));