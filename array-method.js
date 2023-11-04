const kana = [2,3,5,6];
let kona = 0;

kana.forEach(x => kona+= x)
console.log(kona);

const fruits = ["Mango","chingo","bango","Tango"];

fruits.map((item,index,arr) => console.log(item, index,arr))