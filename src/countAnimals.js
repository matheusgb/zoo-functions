const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  const robj = {};

  species.forEach(({ name, residents }) => {
    robj[name] = residents.length;
  });
  if (typeof animal !== 'object') return robj;

  const res = species.find(({ name }) => name === animal.specie).residents;
  const sexlen = res.filter(({ sex }) => sex === animal.sex).length;

  return Object.keys(animal).length === 1 ? res.length : sexlen;
};

console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
