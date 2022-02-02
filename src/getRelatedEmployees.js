const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  const managers = (id) => employees.some((details) => details.managers.find(id)=(id === id));
}
console.log(isManager(id));

function getRelatedEmployees(managerId) {
  // seu código aqui
  const managersList = [];
  for(let i = 0; i < managersList.length; i += 1) {
   if (managers === 'gerente') { // Começo do if
     return (managersList[i].length);
  } else { // Fim do if
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!')
    }
  } // Fim do for
}
console.log(getRelatedEmployees([ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ]))

module.exports = { isManager, getRelatedEmployees };
