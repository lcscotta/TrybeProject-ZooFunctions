const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

function getEmployeesCoverage() {
  // EXEMPLO PARA FIXAÇÃO:
  // const peopleSearcher = (LETICIA) => employees.find((OBJETOATUAL) =>
  //  OBJETOATUAL.firstName === LETICIA || OBJETOATUAL.lastName === LETICIA);
  const peopleSearcher = employees.find(
    (employee) =>
      employees.firstName === employee.Name ||
      employees.lastName === employee.Name,
    employees.id,
  );
}

module.exports = getEmployeesCoverage;
