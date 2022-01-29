const data = require('../data/zoo_data');

// Declarando variável ESPÉCIE, que inclui o nome da espécie e o registro (id) dela.
const { species } = data;

function getSpeciesByIds(id) {
  // seu código aqui
  // Filtrando o que é ID e separando do resto.
  const seletorId = species.filter((species.id));
  id.find((ids) => ids === data.id);
  return seletorId;
}
// Fim da função getSpeciesByIds
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
