/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
// eslint-disable-next-line import/extensions
// import { getEmployeeByName } from './getEmployeeByName.js';

const data = require('../data/zoo_data');

// const { getEmployeeByName } = require('./getEmployeeByName');

const { employees } = data;

const { species } = data;

// Função que valida funcionários.
function peopleSearcher(employee) {
  // <Find> bate os dados esperados a serem retornados dos parâmetros fornecidos.
  // Retorna um objeto com os dados desejados, settados ali em cima.
  if (!employee) {
    return employees;
  }
  return employees.find(
    (selectedEmployee) =>
      selectedEmployee.firstName === employee.name
      || selectedEmployee.lastName === employee.name
      || selectedEmployee.id === employee.name,
  );
}
// Função que valida animais.
function animalSearcher(employee) {
  // settando espaço para arrays.
  const animals = [];
  // confere os dados dos animais. O que acha no forEach é jogado na array através do push dos bichim.
  employee.responsibleFor.forEach((specieId) =>
    animals.push(species.find((specie) => specieId === specie.id)));
  return animals;
}

function objectMaker(employee, animals) {
  const maker = {};
  let animalsNames = '';
  let locationNames = '';
  // Percorre o array dos bichim e coloca nomes na variável animalsNames e locationNames.
  // animals.forEach((animal) => {
  // animalsNames += `${animal.name}, `;
  // locationNames += `${animal.location}, `;
  // }); (OUTRO JEITO DE FAZER as 2 próximas linhas)
  animalsNames = animals.map((animal) => animal.name).join(', ');
  locationNames = animals.map((animal) => animal.location).join(', ');
  maker.id = employee.id;
  maker.fullName = `${employee.firstName} ${employee.lastName}`;
  maker.species = animalsNames;
  maker.location = locationNames;
  return maker;
}

function getEmployeeById(idEmployee) {
  // Usando destructor = {}.
  return employees.find(
    ({ id }) =>
      id === idEmployee,
  );
} // Fim da função

function getEmployeeByName(employeeName) {
  return employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName,
  );
} // Fim da função

function getEmployeesCoverage(employees1) {
  // condicional que retorna toda lista de funcionários se não tiver parâmetros
  if (!employees1) {
    return peopleSearcher();
  } // fim do segundo IF.
  const { name, id } = employees1;
  // Interrogação = retorno do true. : = if menor ['false']. Chama outras funções que fiz.
  // Se o obj tiver a propriedade name, retorna só a pessoa correspondente. Id também.
  const employee = name ? getEmployeeByName(name) : getEmployeeById(id);
  const animals = animalSearcher(employee);
  // Condicional de erro caso não exista infos dos funcionários.
  if (!employee.id || !employee.firstName || !employee.lastName) {
    throw new Error('Informações inválidas');
  }
  return objectMaker(employee, animals);
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
