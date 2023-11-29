//promise.all
let promise1 = new Promise((res, rej) => {
    res("Hi")
});
let promise2 = Promise.resolve("Hello World");
let promise3 = 10;
let promise4 = new Promise((res, rej) => {
    setTimeout(res, 2000, "GoodBye");
});
Promise.all([promise1, promise2, promise3, promise4]). then(values => console.log(values));