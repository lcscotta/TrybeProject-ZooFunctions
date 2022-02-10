/* eslint-disable import/prefer-default-export */
const data = require('../data/zoo_data');

const { employees } = data;

export function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  } // Fim do <IF>

  return employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName,
  );
} // Fim da função
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
