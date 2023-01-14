function getSleepHours(day) {
  if (day == 'monday') {
    return 8;
  } else if (day == 'tuesday') {
    return 8;
  } else if (day == 'wednesday') {
    return 8;
  } else if (day == 'thursday') {
    return 8;
  } else if (day == 'friday') {
    return 8;
  } else if (day == 'saturday') {
    return 8;
  } else if (day == 'sunday') {
    return 8;
  }
};

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

function getIdealSleepHours () {
  const idealHours = 9;
  return idealHours * 7;
};

function calculateSleepDebt () {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours == idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours of extra sleep this week, great job!');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours of sleep less than you needed. You need some more rest :(');
    }
};

calculateSleepDebt();
