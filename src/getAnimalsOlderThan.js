const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animalName, residentAge) {
  // seu código aqui
  const animalSearcher = species.find((specie) => specie.name === animalName);
  // O <Every> verifica se todos elementos atendem uma condição!
  return animalSearcher.residents.every(
    (resident) => resident.age >= residentAge,
  );
}
console.log(getAnimalsOlderThan('lions', 5));
module.exports = getAnimalsOlderThan;
