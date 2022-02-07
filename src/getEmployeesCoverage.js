const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

function getEmployeesCoverage() {
  // a primeira variável confere os dados dos funcionários.
  const peopleSearcher = employees.find(
    (employee) =>
      employees.firstName === employee.Name ||
      employees.lastName === employee.Name,
    employees.id,
  );
  // a segunda variável confere os dados dos animais.
  const animalSearcher = species.find(
    (specie) =>
      species.name === specie.name || species.id === employees.responsibleFor,
  );
  // condicional que nega dados inválidos
  if (peopleSearcher === undefined) {
    throw new Error('Informações inválidas');
  } // fim do IF
  return peopleSearcher;
}

module.exports = getEmployeesCoverage;
