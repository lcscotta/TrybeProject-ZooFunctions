const data = require('../data/zoo_data');

// Declarando variável ESPÉCIE, que inclui o nome da espécie e o registro (id) dela.
const { species } = data;

function getSpeciesByIds(...id) {
  // O "..." serve para colocar todos parâmetros recebidos dentro de um array;

  // OBS: Filter retorna 1 array com elementos que atendem sempre a 1 condição. Find retorna 1 elemento.
  // Exemplo de filter: const seletorId = species.filter(() => { });
  return id.map((aId) => species.find((specie) => aId === specie.id));
  // return seletorId;
}
// Fim da função getSpeciesByIds
module.exports = getSpeciesByIds;
