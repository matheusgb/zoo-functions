const data = require('../data/zoo_data');

const {
  species,
} = data;

const getSpeciesByIds = (...speId) => species.filter(({ id }) => speId.includes(id));

module.exports = getSpeciesByIds;
