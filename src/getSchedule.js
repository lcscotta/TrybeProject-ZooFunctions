const data = require('../data/zoo_data');

const { species } = data;

const { hours } = data;

function getAnimalsHour(day) {
  species.filter(({ availability }) => availability.includes(day));
  species.map(({ name }) => name);
}

function hoursDays = () => {
  const funcionaZoo = {};
  workingWeek.forEach((day) => {
    const { open, close } = hours;
    if (day !== 'Monday') {
      funcionaZoo[day] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: getAnimalsHour(day),
      };
    } else {
      funcionaZoo[day] = {
        officeHour: 'Closed',
        exhibition: 'The zoo will be closed!',
      };
    }
    return funcionaZoo;
  });
}

function getSchedule(scheduleTarget) {
  if (hoursDays.includes(scheduleTarget)) {
    return { [scheduleTarget]: hoursDays()[scheduleTarget] };
  }
  if (getAnimalsHour.includes(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget)
    .availability;
  }
  return hoursDays();
}
console.log(getSchedule(scheduleTarget));
module.exports = getSchedule;
