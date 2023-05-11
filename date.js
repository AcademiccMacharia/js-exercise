const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();

const dashAmerican = `${month}-${date}-${year}`;
const slashAmerican = `${month}/${date}/${year}`;

const dashEuropean = `${date}-${month}-${year}`;
const slashEuropean = `${date}/${month}/${year}`;

console.log(dashAmerican.toString());
console.log(slashAmerican.toString());

console.log(dashEuropean.toString());
console.log(slashEuropean.toString());