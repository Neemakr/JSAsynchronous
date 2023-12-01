const data = {
    "name" : "Neema",
    "age" : 24 
}
console.log(data);
console.log(data.name);

const arr = [
    {
        "Book" : "IkiGai",
        "description" : "This is a book"
    },
    {
        "Book2" : "Fuck",
        "Description" : "Moye Moye"
    }
]
console.log(arr[0]);

//Converting JSON into Objects
const JsonData = '{"name": "John", "age": 22}';
const obj = JSON.parse(JsonData);
console.log(obj);

//Converting Objects into JSON
const object = {
    car1 : "Benz",
    car2 : "Ferarri" 
}
const json = JSON.stringify(object);
console.log(json);