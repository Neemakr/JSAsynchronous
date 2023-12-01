//Generator Functions
function* generatorfunction(){
    console.log("1. Before Yield");
    yield 100;
    console.log("2. After Yield");
    yield 200;
    console.log("3. The End");
}
const generator = generatorfunction();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

//Passing Arguments to a Generator function
function* GeneratorFuncWithArguments(){
    //returns "Hello" at first next()
    let x = yield "Hello";

    //returns the passed arguments in the next()
    console.log(x);
    yield "GoodBye"
}
const gen = GeneratorFuncWithArguments();
console.log(gen.next());
console.log(gen.next(2));
console.log(gen.next());