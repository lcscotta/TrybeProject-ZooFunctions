const data = require('../data/zoo_data');

const { species } = data.species;

const { hours } = data.hours;

function getAnimalsHour() {
  species.filter(({ availability }) => availability.includes(day));
  species.map(({ name }) => name);
}

function hoursDays () {
  const workingWeek = {};
  workingWeek.forEach((day) => {
    const { open, close } = hours;
    if (day !== 'Monday') {
      workingWeek[day] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: getAnimalsHour(day),
      };
    } else {
      workingWeek[day] = {
        officeHour: 'Closed',
        exhibition: 'The zoo will be closed!',
      };
    }
    return workingWeek;
  });
}

function getSchedule(scheduleTarget) {
  if (hours.includes(scheduleTarget.date)) {
    const days = hoursDays();
  }
  if (species.includes(scheduleTarget)) {
    return getAnimalsHour(days);
  }
  return hoursDays();
}
console.log(getSchedule({ date: 'Monday', animal: 'lions' }));
module.exports = getSchedule;
