const { employees } = require('../data/zoo_data');

const data = require('../data/zoo_data');

const { species } = data;

function getOldestFromFirstSpecies(id) {
  // Variável que pega o empregado pelo ID gerado.
  const employeeSearcher = employees.find((employee) => employee.id === id);
  // Variável que pega o animal mais velho do primeiro animal da lista do responsável pelo bicho.
  const firstAnimalId = employeeSearcher.responsibleFor[0];
  const firstAnimalEmployee = species.find(
    (specie) => firstAnimalId === specie.id,
  );
  const animalSearcher = firstAnimalEmployee.residents.sort(
    (a, b) => a.age - b.age,
  );
  const getOldestAnimal = animalSearcher[animalSearcher.length - 1];
  const oldestAnimalInfos = [
    getOldestAnimal.name,
    getOldestAnimal.sex,
    getOldestAnimal.age,
  ];
  return oldestAnimalInfos;
} // Fim do IF
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

// OBSERVAÇÕES/ANOTAÇÕES:
// O >Filter< retorna 1 array com elementos que atendem sempre a 1 condição.
// O >Find< retorna o primeiro elemento que atende a 1 condição.
// O >Map< mapeia o array e retorna uma do mesmo tamanho, te permite editar a array.
// A >CallBack< tem que OBRIGATORIAMENTE RETORNAR TRUE OR FALSE.
// Estrutura padrão: const variavel = array.COMANDO(() => {});
module.exports = getOldestFromFirstSpecies;
