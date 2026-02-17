import { getDatePatternFromLocale } from '@helpers/locale';
// import { useLocationSettings } from "@redux-stores/settings/location-settings.store";
import moment from 'moment';

export const useFormatDateForUi = (locale: string, useAmPm: boolean) => {
  // const { locale, useAmPm } = useLocationSettings();
  const datePattern = getDatePatternFromLocale(locale);
  const defaultPattern = 'YYYY-MM-DD'; // Replace with your default format

  return (date: string) => {
    const formattedDate = moment(date);
    if (formattedDate.isValid()) {
      const hourFormat = useAmPm ? 'hh:mm A' : 'HH:mm';
      return formattedDate.format(`${datePattern} ${hourFormat}`);
    }
    return moment().format(`${defaultPattern} HH:mm`); // Default format if date is invalid
  };
};
