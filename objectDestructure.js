const mana = {
  name: "goru",
  age: 24,
};
// const kana = {...mana}
// console.log(kana);
mana.address = "Hagu";
console.log(mana);

const { age, ...rest } = mana;
console.log(age, rest);
