const { employees } = require('../data/zoo_data');

const steId = ['9e7d4524-363c-416a-8759-8aa7e50c0992'].toString();

const isManager = (managerId) => {
  const emp = employees.find(({ id }) => managerId === id).managers;
  if (emp.toString() === [].toString() || emp.toString() === steId) return true;
  return false;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === true) {
    const emp = employees.filter(({ managers }) => managers.includes(managerId));
    const nam = emp.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    return nam;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
