const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(f) {
  const fil = employees.filter(({ id }) => id === f).map(({ responsibleFor }) => responsibleFor)[0]
    .map((el) => species.filter(({ id }) => el === id))[0].map(({ residents }) => residents)[0];
  const max = Math.max(...fil.map((o) => o.age), 0); // https://stackoverflow.com/a/39461900/17687777
  return fil.filter(({ age }) => age === max).map(({ name, sex, age }) => [name, sex, age])[0];
}

module.exports = getOldestFromFirstSpecies;
