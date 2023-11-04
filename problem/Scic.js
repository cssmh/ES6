const students = [
  { name: "mehedi", email: "mehedi@gamil.com", avg: 56, fiftyPercent: true },
  { name: "rokib", email: "rokib@gamil.com", avg: 57, fiftyPercent: false },
  { name: "sakib", email: "sakib@gamil.com", avg: 42, fiftyPercent: false },
  { name: "sojib", email: "sojib@gamil.com", avg: 52, fiftyPercent: true },
  { name: "sunny", email: "sunny@gamil.com", avg: 32, fiftyPercent: false },
  { name: "saki", email: "sunny@gamil.com", avg: 37, fiftyPercent: true },
  { name: "jack", email: "jack@gamil.com", avg: 57, fiftyPercent: true },
  { name: "kona", email: "kona@gamil.com", avg: 60, fiftyPercent: true },
];

const kana = students.filter((student) => student.avg >= 50 && 
student.fiftyPercent === true
);
const emailGula = kana.map((gula) => gula.email).join("/ ");
console.log(emailGula);