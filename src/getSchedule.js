const { species, hours } = require('../data/zoo_data');

function checkWeekDay(string) {
  // 1 ! => nega/false. 2 ! => transforma em booleano (= ou é true ou false).
  // O retorno da função verifica se o parâmetro recebido é true ou false.
  return !!hours[string];
}

function animalChecker(nameSpecie) {
  // Recebe o nome de uma espécie e compara se o dado inserido é igual ao recebido. Se sim, retorna o nome.
  return species.some(({ name }) => nameSpecie === name);
}

function workingWeek(dayWeek, { open, close }) {
  if (open === close && open === 0) {
    return { [dayWeek]: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    } };
  }
  return { [dayWeek]: {
    officeHour: `Open from ${open}am until ${close}pm`,
    // Mostra os animais disponíveis, filtrados do array de espécies disponíveis.
    exhibition: species.filter((specie) => specie.availability.includes(dayWeek))
      .map(({ name }) => name),
  } };
}

function getSchedule(scheduleTarget) {
  // 'scheduleTarget' atua como o alvo do calendário.
  // condicional que bate os dias.   {} => . [] => . () => .
  if (checkWeekDay(scheduleTarget)) {
    return workingWeek(scheduleTarget, hours[scheduleTarget]);
  }
  // condicional que vê se os animais estão disponíveis no dia da semana.
  if (animalChecker(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }

  const weeklyFunctioning = Object.entries(hours);
  return weeklyFunctioning.reduce((acumulador, [weekDay, { open, close }]) => ({
    ...acumulador,
    ...workingWeek(weekDay, { open, close }),
  }), {});
  // USA REDUCE!!!!! EXEMPLO: PARAMETRO.reduce((acumulador, PARAMETRO2), NUMERO ACUMULADOR OU VAZIO OU A PALAVRA QUE PRECISA SER CONCATENADA);
  // obj.keys(parametros das chaves) entries(separa tudo) values(valores das chaves)
}
console.log(getSchedule());
module.exports = getSchedule;
