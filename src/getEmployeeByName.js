const data = require('../data/zoo_data');

const {
  employees,
} = data;

const getEmployeeByName = (name) => {
  if (!name) return {};
  return employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
};

module.exports = getEmployeeByName;

console.log(getEmployeeByName('Emery'));
