import { translationService } from '@services/translation.service';
import moment from 'moment';

export type DateRangePickerFormatterDayMonth = { day: number; month: number };
export type DateRangePickerFormatterDayReturn = {
  startDate: DateRangePickerFormatterDayMonth | null;
  endDate: DateRangePickerFormatterDayMonth | null;
};

export class DateRangePickerFormatter {
  separator: '-' = '-';
  dayFormat: string = 'DD';
  monthFormat: string = 'MMM';

  formatDate = (val?: string | Date) => {
    return `${moment(val).format(this.dayFormat)} ${translationService.get(moment(val).format(this.monthFormat)).value}`;
  };
  dayPlaceholder: '_' = '_';
  monthPlaceholder: '_' = '_';

  /**
   * Receives 2 dates and returns a string to display in input
   * */
  formatDateRangePickerInput(startDate?: Date, endDate?: Date) {
    return `${this.formatDate(startDate)}${this.separator}${this.formatDate(endDate)}`;
  }

  formatStringToDates(e: string): DateRangePickerFormatterDayReturn {
    const split = e.split(this.separator);
    const startDateString = split[0];
    const endDateString = split[1];
    const toTest = [startDateString, endDateString];
    const conditions = [this.monthPlaceholder, this.dayPlaceholder];
    let containsPlaceholders = false;
    /**
     * Check if a string date contains any of the placeholders
     * If it does it is not a complete date so we do not parse it
     * */
    for (const str of toTest) {
      if (conditions.some((el) => str.includes(el))) {
        containsPlaceholders = true;
        break;
      }
    }

    const toRet: DateRangePickerFormatterDayReturn = {
      startDate: null,
      endDate: null,
    };

    if (containsPlaceholders) {
      return toRet;
    }

    // get the translation key for the startDateString and endDateString
    const startDateStringKey = `${startDateString.trim().split(' ')[0]} ${
      translationService.getTranslationKey(startDateString.trim().split(' ')[1]).key
    }`;
    const startDate = moment(startDateStringKey, `${this.dayFormat} ${this.monthFormat}`);

    const endDateStringKey = `${endDateString.trim().split(' ')[0]} ${
      translationService.getTranslationKey(endDateString.trim().split(' ')[1]).key
    }`;
    const endDate = moment(endDateStringKey, `${this.dayFormat} ${this.monthFormat}`);

    if (startDate.isValid()) {
      toRet.startDate = {
        day: parseInt(startDate.format('D')),
        month: parseInt(startDate.format('MM')),
      };
    }

    if (endDate.isValid()) {
      toRet.endDate = {
        day: parseInt(endDate.format('D')),
        month: parseInt(endDate.format('MM')),
      };
    }

    return toRet;
  }
}

export const dateRangePickerFormatter = new DateRangePickerFormatter();
