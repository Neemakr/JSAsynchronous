const d = new Date();
console.log(d);

console.log(d.toLocaleTimeString());
console.log(d.toLocaleDateString());

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getMilliseconds());

const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(months[d.getMonth()]);