const data = require('../data/zoo_data');

const { species } = data;

function countResidents(animal) {
  const armazenador = {};
  species.forEach((specie) => {
    armazenador[specie.name] = specie.residents.length;
  });
  return armazenador;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return countResidents(animal);
  }
  if (animal.specie && animal.sex) {
    return species
      .find((specie) => specie.name === animal.specie)
      .residents.filter((resident) => resident.sex === animal.sex).length;
  }
  if (animal.specie) {
    return countResidents(animal)[animal.specie];
  }
}
console.log(countAnimals());

module.exports = countAnimals;
