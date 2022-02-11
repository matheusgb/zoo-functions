// código baseado no do Leonidas Ferreira #3

const { species, employees } = require('../data/zoo_data');

const obj = employees.map(({ firstName, lastName, id, responsibleFor }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: responsibleFor.map((el) => species.find((el2) => el2.id === el).name),
  locations: responsibleFor.map((el) => species.find((el2) => el2.id === el).location),
}));

const getEmployeesCoverage = (p) => {
  if (!p) return obj;

  const val = Object.values(p);
  const idInc = obj.find(({ id }) => id.includes(val));
  const nameInc = obj.find(({ fullName }) => fullName.includes(val));

  if (nameInc) return nameInc;
  if (idInc) return idInc;
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
