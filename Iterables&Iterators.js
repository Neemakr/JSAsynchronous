const arr = []; //Iterable - arr
const arrIterator = arr[Symbol.iterator](); //Iterator - arrIterator
console.log(arrIterator);

const str = "Hello";
const strIterator = str[Symbol.iterator]();
console.log(strIterator);

//The Symbol.iterator method is called automatically by for..of.
//But we can also do it "manually":
for(let i of str[Symbol.iterator]()){ //or simply use str
    console.log(i);
}

console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());

//User Defined next()
function DisplayName(){
    const name = ["N", "E", "E", "M", "A"];
    let n = 0;
    return{
        next(){
            if(n < name.length){
                return{
                    value : name[n++],
                    done : false
                }
            }
            return{
                value : undefined,
                done : true
            }
        }
    }
}
let nameIterator = DisplayName();
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());

