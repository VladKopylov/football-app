export const MONTHS: any = {
  ru: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};
export const WEEKDAYS_LONG: any = {
  ru: [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воссрексение',
  ],
  en: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
};
export const WEEKDAYS_SHORT: any = {
  ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  en: ['Mn', 'Tu', 'Wd', 'Th', 'Fr', 'St', 'Sn'],
};

const FIRST_DAY: any = {
  en: 0,
  ru: 1, // Use Monday as first day of the week
};

function formatDay(d: Date, locale = 'en'): string {
  return `${WEEKDAYS_LONG[locale][d.getDay()]}, ${d.getDate()} ${
    MONTHS[locale][d.getMonth()]
  } ${d.getFullYear()}`;
}

function formatMonthTitle(d: Date, locale = 'en'): string {
  return `${MONTHS[locale][d.getMonth()]} ${d.getFullYear()}`;
}

function formatWeekdayShort(i: number, locale: string): string {
  return WEEKDAYS_SHORT[locale][i];
}

function formatWeekdayLong(i: number, locale: string): string {
  return WEEKDAYS_SHORT[locale][i];
}

function getFirstDayOfWeek(locale: string): string {
  return FIRST_DAY[locale];
}

export const localeUtils = {
  formatDay,
  formatMonthTitle,
  formatWeekdayShort,
  formatWeekdayLong,
  getFirstDayOfWeek,
};
