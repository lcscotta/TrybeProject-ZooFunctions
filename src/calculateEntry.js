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
  if (!entrants || !entrants.length) {
    return 0;
  }
  const totalEntrants = countEntrants(entrants);
  const adultPrice = prices.adult * totalEntrants.adult;
  const childPrice = prices.child * totalEntrants.child;
  const seniorPrice = prices.senior * totalEntrants.senior;
  const totalCost = childPrice + adultPrice + seniorPrice;
  return totalCost;
}

module.exports = { calculateEntry, countEntrants };
