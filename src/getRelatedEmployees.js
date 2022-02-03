const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // Começo do if
  if (isManager(managerId)) {
    // Recebe cada funcionário existence, filtra a lista
    return employees
      .filter((employee) => employee.managers.includes(managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`); // Separar os funcionários gerenciados pela pessoa
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
} // fim do IF

// console.log(getRelatedEmployees(['Burl Bethea', 'Ola Orloff', 'Emery Elser']));

module.exports = { isManager, getRelatedEmployees };
