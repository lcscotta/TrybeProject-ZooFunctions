const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

// Função que valida funcionários.
function peopleSearcher(employee) {
  // <Find> bate os dados esperados a serem retornados dos parâmetros fornecidos.
  // Retorna um objeto com os dados desejados, settados ali em cima.
  // return employees.find(() => ({
  //   id: `${employees.id}`,
  //   fullName: `${employees.firstName + employees.lastName}`,
  //   species: `${employees.responsibleFor}`,
  //   locations: `${[]}`,
  // }));
  return employees.find(
    (selectedEmployee) =>
      selectedEmployee.firstName === employee.name ||
      selectedEmployee.lastName === employee.name ||
      selectedEmployee.id === employee.name,
  );
}
// Função que valida animais.
function animalSearcher(employee) {
  // settando espaço para arrays.
  const animals = [];
  // confere os dados dos animais. O que acha no forEach é jogado na array através do push dos bichim.
  employee.responsibleFor.forEach((specieId) =>
    animals.push(species.find((specie) => specieId === specie.id)),
  );
  return animals;
}

function objectMaker(employee, animals) {
  const maker = {};
  const animalsNames = '';
  const locationNames = '';
  // Percorre o array dos bichim e coloca nomes na variável animalsNames e locationNames.
  animals.forEach((animal) => {
    animalsNames.concat(animal.name);
    locationNames.concat(animal.location);
  });
  maker.id = employee.id;
  maker.fullName = `${employee.firstName} + ' ' + ${employee.lastName}`;
  maker.species = animalsNames;
  maker.location = locationNames;
  return maker;
}

function optimizeReturn(employee) {
  const selectedEmployee = peopleSearcher(employee);
  return objectMaker(selectedEmployee, animalSearcher(selectedEmployee));
}

function getEmployeesCoverage(employees1) {
  // condicional que setta os parâmetros dos dados dos funcionários.
  // ATENÇÃO: O segundo parâmetro SEMPRE é a comparação com o valor inserido de teste no final.˜
  if (
    employees.firstName === employees1.Name ||
    employees.lastName === employees1.Name ||
    employees.id === employees1.id
  ) {
    return optimizeReturn(employees1);
  } // fim do primeiro IF.

  // condicional que nega dados inválidos
  if (peopleSearcher().id === undefined) {
    throw new Error('Informações inválidas');
  } // fim do último IF.
  return peopleSearcher();
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
