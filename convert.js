const Persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
]
// let obj ={};
// obj.x = "hello";
// obj["y"]="world";
// const property = "phone";
// obj[property]=1258004

let obj = {}

Persons.map(person => {
    const id = person.id
    const name = person.name;
    obj[id] = name
})
console.log(obj);