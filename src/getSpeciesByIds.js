const data = require('../data/zoo_data');

// Declarando variável ESPÉCIE, que inclui o nome da espécie e o registro (id) dela.
const { species } = data;

function getSpeciesByIds(...id) {
  // O "..." serve para colocar todos parâmetros recebidos dentro de um array;
  // OBS: >Filter< retorna 1 array com elementos que atendem sempre a 1 condição. >Find< retorna o primeiro elemento que atende a 1 condição. O >Map< mapeia o array e retorna uma do mesmo tamanho, te permite editar a array. A >callback< tem que OBRIGATORIAMENTE RETORNAR TRUE OR FALSE.
  // Estrutura padrão: const variavel = array.COMANDO(() => {});
  return id.map((aId) => species.find((specie) => aId === specie.id));
} // Fim da função getSpeciesByIds
module.exports = getSpeciesByIds;
