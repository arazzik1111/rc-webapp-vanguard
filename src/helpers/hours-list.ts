export type HourType = 'half' | 'quarter' | 'none';

const parseHourString = (val: string | number, hasMeridiem: boolean = false): string => {
  if (hasMeridiem && val === 0) val = 12;
  return val.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
};

export const generateHoursList = (hourType: HourType, hasMeridiem: boolean = false) => {
  const hours = [];

  for (let i = 0; i <= 23; i++) {
    const meridiem = hasMeridiem ? (i < 12 ? ' AM' : ' PM') : '';

    let prepHour: string = parseHourString(i, hasMeridiem);
    if (hasMeridiem && parseInt(prepHour) > 12) {
      prepHour = parseHourString(parseInt(prepHour) - 12, hasMeridiem);
    } else {
      prepHour = parseHourString(prepHour, hasMeridiem);
    }

    hours.push(`${prepHour}:00${meridiem}`);

    switch (hourType) {
      case 'half':
        hours.push(`${prepHour}:30${meridiem}`);
        break;
      case 'quarter':
        hours.push(`${prepHour}:15${meridiem}`);
        hours.push(`${prepHour}:30${meridiem}`);
        hours.push(`${prepHour}:45${meridiem}`);
        if (i === 23) hours.push(`${prepHour}:59${meridiem}`);
        break;
      default:
        console.log('Something went wrong! You should not get this message');
        break;
    }
  }

  return hours;
};
