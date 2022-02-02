const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalId = (species.name);
  if (animal === 'string') {
    return (`${species.name}`);
  }

  const ageClassification = (species.age);
  if (age < 10) {
    return ('Young');
  } if (age < 50) {
    return ('Adult');
  } if (age > 50) {
    return ('Senior');
  }
  return (animalId, ageClassification); // Fim da variável ageclassification
}
console.log(getAnimalsOlderThan('lion', 20));
module.exports = getAnimalsOlderThan;
