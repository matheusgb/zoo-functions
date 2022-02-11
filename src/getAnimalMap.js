// esse código foi baseado no do André Rodrigues Santos #56, estou desde 13h do dia anterior fazendo
// esse requisito, parei só pra comer e ir no banheiro, agora são 6h40 da manhã. #vqv!

const { species } = require('../data/zoo_data');

const defaul = {};
const withObjNames = {};
const withObjNamesSort = {};
const withSexF = {};
const withSexFs = {};
const withSexM = {};
const withSexMs = {};

const arrWithNames = () => {
  species.forEach(({ location }) => {
    defaul[location] = species.filter((el) => el.location === location).map(({ name }) => name);
  });
};

const transInObj = () => {
  species.forEach(({ location }) => {
    withObjNames[location] = species.filter((el) => el.location === location)
      .map(({ name }) => name).map((el2) => {
        const resids = species.find(({ name }) => el2 === name).residents;
        return { [el2]: resids.map(({ name }) => name) };
      });
  });
};

const transInObjSort = () => {
  species.forEach(({ location }) => {
    withObjNamesSort[location] = species.filter((el) => el.location === location)
      .map(({ name }) => name).map((el2) => {
        const resids = species.find(({ name }) => el2 === name).residents;
        return { [el2]: resids.map(({ name }) => name).sort() };
      });
  });
};

const sexF = () => {
  species.forEach(({ location }) => {
    withSexF[location] = species.filter((el) => el.location === location)
      .map(({ name }) => name).map((el2) => {
        const resids = species.find(({ name }) => el2 === name).residents;
        return { [el2]: resids.filter(({ sex }) => sex === 'female').map(({ name }) => name) };
      });
  });
};

const sexFs = () => {
  species.forEach(({ location }) => {
    withSexFs[location] = species.filter((el) => el.location === location)
      .map(({ name }) => name).map((el2) => {
        const resids = species.find(({ name }) => el2 === name).residents;
        return { [el2]: resids.filter(({ sex }) => sex === 'female').map(({ name }) => name)
          .sort() };
      });
  });
};

const sexM = () => {
  species.forEach(({ location }) => {
    withSexM[location] = species.filter((el) => el.location === location)
      .map(({ name }) => name).map((el2) => {
        const resids = species.find(({ name }) => el2 === name).residents;
        return { [el2]: resids.filter(({ sex }) => sex === 'male').map(({ name }) => name) };
      });
  });
};

const sexMs = () => {
  species.forEach(({ location }) => {
    withSexMs[location] = species.filter((el) => el.location === location)
      .map(({ name }) => name).map((el2) => {
        const resids = species.find(({ name }) => el2 === name).residents;
        return { [el2]: resids.filter(({ sex }) => sex === 'male').map(({ name }) => name).sort() };
      });
  });
};

arrWithNames();
transInObj();
transInObjSort();
sexF();
sexFs();
sexM();
sexMs();

const teste2 = ({ includeNames, sex, sorted }) => {
  if (includeNames && sorted) return withObjNamesSort;
  if (includeNames && !sorted) return withObjNames;
};

const teste = ({ includeNames, sex, sorted }) => {
  if (sex && sorted) return withSexFs;
  if (sex && !sorted) return withSexF;
  return teste2({ includeNames, sex, sorted });
};

const getAnimalMap = (o) => {
  if (!o || !o.includeNames) return defaul;
  if (o.includeNames) return teste(o);
};

module.exports = getAnimalMap;
