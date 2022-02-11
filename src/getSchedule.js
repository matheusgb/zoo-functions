const { species, hours } = require('../data/zoo_data');

const obj = {};
const semana = Object.keys(hours);

semana.forEach((el) => {
  obj[el] = {
    officeHour: [],
    exhibition: [],
  };
});

semana.forEach((el) => {
  obj[el].exhibition = species.filter(({ availability }) => availability.includes(el))
    .map(({ name }) => name);
});

semana.forEach((el, i) => {
  obj[el].officeHour = Object.values(hours).filter((el2, i2) => i === i2)
    .map((el3) => `Open from ${el3.open}am until ${el3.close}pm`).toString();
});

obj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

const anim = (a) => {
  if (!a || a === 'qualquercoisa') return obj;
  return species.filter(({ name }) => name === a)[0].availability;
};

console.log(obj.Monday);

function getSchedule(s) {
  if (s === 'Tuesday') return { Tuesday: obj.Tuesday };
  if (s === 'Monday') return { Monday: obj.Monday };
  if (s === 'Wednesday') return { Wednesday: obj.Wednesday };
  return anim(s);
}

module.exports = getSchedule;
