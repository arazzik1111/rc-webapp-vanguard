import { translationService } from '@services/translation.service';
import moment from 'moment';

export const dateFormatter = new Intl.DateTimeFormat(navigator.language);
export const currencyFormatter = new Intl.NumberFormat(navigator.language, {
  style: 'currency',
  currency: 'eur',
});

export const convertSecondsToTimeString = (seconds?: number) => {
  if (!seconds) {
    return '';
  }
  return moment.utc(seconds * 1000).format('DD');
};

export const secondsToTimeDuration = (seconds?: number) => {
  if (!seconds) {
    return '0:00';
  }

  if (seconds < 3600) {
    return moment.utc(seconds * 1000).format('m:ss');
  }

  return moment.utc(seconds * 1000).format('H:mm:ss');
};

export const secondsTo = (seconds?: number, what: 'days' | 'hours' | 'minutes' = 'days') => {
  if (!seconds) {
    return 0;
  }
  switch (what) {
    case 'days': {
      return Math.floor(seconds / (60 * 60 * 24));
    }
    case 'hours': {
      return Math.floor(seconds / (60 * 60));
    }
    case 'minutes': {
      return Math.floor(seconds / 60);
    }
  }
  return seconds;
};

export const formatDuration = (timeToCreate?: number): string => {
  const days = secondsTo(timeToCreate);
  const hours = secondsTo(timeToCreate, 'hours');
  const minutes = secondsTo(timeToCreate, 'minutes');

  if (days === 1) {
    return translationService.get('1 day').value;
  }
  if (days > 1) {
    return translationService.get('%days_nr% days', {
      days_nr: secondsTo(timeToCreate),
    }).value;
  }
  if (hours === 1) {
    return translationService.get('1 hour').value;
  }
  if (hours > 1) {
    return translationService.get('%hours_number% hours', {
      hours_number: secondsTo(timeToCreate, 'hours'),
    }).value;
  }
  if (minutes > 1) {
    return translationService.get('%minutes_number% minutes', {
      minutes_number: secondsTo(timeToCreate, 'minutes'),
    }).value;
  }

  return translationService.get('%seconds_number% seconds', {
    seconds_number: timeToCreate,
  }).value;
};
