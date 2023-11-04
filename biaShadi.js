const polapain = [
  { name: "Abul", job: "sorkari", salary: 17000 },
  { name: "Babul", job: "besorkari", salary: 25000 },
  { name: "Kabul", job: "sorkari", salary: 21000 },
  { name: "Habul", job: "besorkari", salary: 47000 },
  { name: "Jabul", job: "sorkari", salary: 23000 },
  { name: "Mabul", job: "besorkari", salary: 55000 },
];

const vagggoBan = polapain.filter(tara => (tara.job === "sorkari" && tara.salary >= 20000) || (tara.job === "besorkari" && tara.salary >= 40000));
console.log(vagggoBan);