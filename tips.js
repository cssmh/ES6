const person = {
    name: "moa",
    age: 26
}

function show (gua){

    const {name,age} = gua;

    console.log(`my name is ${name}. My age is ${age}`)
}

show(person)