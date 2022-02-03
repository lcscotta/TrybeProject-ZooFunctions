const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

function getEmployeesCoverage() {
  const peopleSearcher = employees.find(
    (employee) =>
      employees.firstName === employees.Name ||
      employees.lastName === employees.Name,
    employees.id,
  );
}

module.exports = getEmployeesCoverage;
