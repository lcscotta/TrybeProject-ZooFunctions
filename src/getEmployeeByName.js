const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  const colaboradoresId = employees.find(employees);
  if (typeof employees.firstName === 'string' || typeof employees.lastName === 'string') {
    return (colaboradoresId);
  } // Fim do if
  if (colaboradoresId === undefined) {
    return {};
  } // fim do if;
}
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
