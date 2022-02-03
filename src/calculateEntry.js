const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const armazenador = {};
  prices.forEach((entrant) => {
    armazenador[entrants] === prices.child.lenght, prices.adult.lenght;
    prices.senior.lenght;
  });
  return armazenador;

  if (entrants == 18) {
    return (entrants.child);
  }
  if (entrants >= 18 && entrants <= 50) {
    return (entrants.adult);
  }
  if (entrants >= 50){
    return (entrants.senior);
  }
}

function calculateEntry(entrants) {
  let child = { entrants.child };
  let senior = { entrants.senior };
  let adult = { entrants.adult };
  const totalSum = child + senior + adult;

  if (prices === undefined || countEntrants[entrants] === undefined) {
    return countEntrants(' 0 '); // Retorna 0 se o argumento ou o objeto forem vazios
  } // fim do IF
  if (prices === true) {
    return countEntrants[entrants].lenght;
  } // fim do IF
}

module.exports = { calculateEntry, countEntrants };
