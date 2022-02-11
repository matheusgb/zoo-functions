const data = require('../data/zoo_data');

const entradas = {
  adult: 0,
  child: 0,
  senior: 0,
};

const countEntrants = (e) => {
  e.forEach(({ age }) => {
    if (age >= 18 && age < 50) entradas.adult += 1;
    if (age < 18) entradas.child += 1;
    if (age >= 50) entradas.senior += 1;
  });
  return entradas;
};

const add = (e) => {
  let total = 0;
  entradas.adult = 49.99;
  entradas.child = 20.99;
  entradas.senior = 24.99;

  e.forEach(({ age }) => {
    if (age >= 18 && age < 50) {
      total += entradas.adult;
    } else if (age < 18) {
      total += entradas.child;
    } else {
      total += entradas.senior;
    }
  });
  return Math.round(total * 100) / 100; // https://www.codingem.com/javascript-how-to-limit-decimal-places/#:~:text=To%20limit%20decimal%20places%20in%20JavaScript%2C%20use%20the%20toFixed(),Converts%20it%20into%20a%20string.
};

const calculateEntry = (e) => {
  if (e === undefined || Object.keys(e).length === 0) return 0;
  return add(e);
};

console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
