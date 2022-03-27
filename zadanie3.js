function createObj() {
    let obj = Object.create(null);
    return obj;
}
let obj1 = createObj();
obj1.str = "Test";
obj1.num = 1;

console.log(obj1.str);
console.log(obj1.num); 