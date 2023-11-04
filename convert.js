const persons = [
    { id: 'ID01', name: "abul vai", age: 23 },
    { id: 'ID02', name: "babul vai", age: 43 },
    { id: 'ID03', name: "habul vai", age: 54 },
    { id: 'ID04', name: "jabul vai", age: 29 }
]
// let obj ={};
// obj.x = "hello"; onj .(.) er por x likhchi tar mane x = hello (equal er por ja likhchi tai asbe)
// obj["y"]="world";
// const property = "phone";
// obj[property]=1258004

let myObj = {}

persons.map(man => {
    const id = man.id;
    const name = man.name;
    myObj[id] = name;
})
console.log(myObj);