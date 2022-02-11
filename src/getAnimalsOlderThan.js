const data = require('../data/zoo_data');

const {
  species,
} = data;

const getAnimalsOlderThan = (animal, idade) => {
  const nome = species.find(({ name }) => name === animal).residents;
  return nome.every(({ age }) => age >= idade);
};

module.exports = getAnimalsOlderThan;
