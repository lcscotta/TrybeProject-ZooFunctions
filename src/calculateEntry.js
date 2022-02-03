const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const armazenador = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      armazenador.child += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      armazenador.adult += 1;
    }
    if (entrant.age >= 50) {
      armazenador.senior += 1;
    }
  });
  return armazenador;
}

function calculateEntry(entrants) {
  const totalEntrants = countEntrants(entrants);
  const totalCost =
    prices.adult * totalEntrants.adult +
    prices.child * totalEntrants.child +
    prices.senior * totalEntrants.senior;

  if (prices === undefined || countEntrants[entrants] === undefined) {
    return countEntrants(' 0 '); // Retorna 0 se o argumento ou o objeto forem vazios
  } // fim do IF
  // if (prices === true) {
  //   return countEntrants[entrants].lenght;
  // } // fim do IF
  return totalCost;
}

module.exports = { calculateEntry, countEntrants };
