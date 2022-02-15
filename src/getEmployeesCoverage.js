/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
// eslint-disable-next-line import/extensions
// import { getEmployeeByName } from './getEmployeeByName.js';

const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

// Função que valida funcionários.
function peopleSearcher({ id, firstName, lastName, responsibleFor }) {
  // <Find> bate os dados esperados a serem retornados dos parâmetros fornecidos.
  const [specieName, locationSpecie] = species.filter((spc) => responsibleFor
    .includes(spc.id)).reduce(([spcName, spcLocation], { name, location }) =>
    ([[...spcName, name], [...spcLocation, location]]), [[], []]);
  // o uso desse return é uma Propert Short-Hand (usa as mesmas chaves do parametro)
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: specieName,
    locations: locationSpecie,
  };
}
// employees.find(
//   (selectedEmployee) =>
//     selectedEmployee.firstName === employees.name
//     || selectedEmployee.lastName === employees.name
//     || selectedEmployee.id === employees.name,
// );
// // // Função que valida animais.
// function animalSearcher(employee) {
//   // settando espaço para arrays.
//   const animals = [];
//   // confere os dados dos animais. O que acha no forEach é jogado na array através do push dos bichim.
//   employees.responsibleFor.forEach((specieId) =>
//     animals.push(species.find((specie) => specieId === specie.id)));
//   return animals;
// }

// function animalIdSearch({ responsibleFor }) {
//   // Variável que vê se o ID está incluso em responsibleFor.
//   // Reduce => api das criptos (puxar coins, fazer com reduce).
//   const speciesSearcher = species.filter((specie) => responsibleFor.includes(specie.id));
//   return speciesSearcher;
// }

// function objectLocationMaker(employee, animals) {
//   const maker = {};
//   let animalsNames = '';
//   let locationNames = '';
//   // Percorre o array dos bichim e coloca nomes na variável animalsNames e locationNames.
//   animalsNames = animals.map((animal) => animal.name);
//   locationNames = animals.map((animal) => animal.location);
//   maker.id = employee.id;
//   maker.fullName = `${employee.firstName} ${employee.lastName}`;
//   maker.species = animalsNames;
//   maker.locations = locationNames;
//   return maker;
// }

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
    // mapeia o employee porque não quer todas as chaves
    return employees.map(peopleSearcher);
  } // fim do primeiro IF.
  const { name, id } = employees1;
  // Interrogação = retorno do true. : = if menor ['false']. Chama outras funções que fiz. => Se o obj tiver a propriedade name, retorna só a pessoa correspondente. Id também.
  const employee = name ? getEmployeeByName(name) : getEmployeeById(id) || {};
  // const animals = animalIdSearch(employee);
  // Condicional de erro caso não exista infos dos funcionários.
  if (!employee.id) {
    throw new Error('Informações inválidas');
  } // fim do segundo IF.
  return peopleSearcher(employee);
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
