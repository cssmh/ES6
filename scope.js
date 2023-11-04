const x = 5;

{
    const x = 10;
    console.log('inside block: ',x)
}
console.log("outside block: ",x)