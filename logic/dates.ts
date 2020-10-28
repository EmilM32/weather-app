enum DayOfTheWeek {
  SUN,
  MON,
  TUES,
  WED,
  THURS,
  FRI,
  SAT
}

enum Months {
  JAN,
  FEB,
  MAR,
  APR,
  MAY,
  JUN,
  JUL,
  AUG,
  SEP,
  OCT,
  NOV,
  DEC
}

interface DateInterface {
  today: Date;
  dayTranslation: string;
  monthTranslation: string;
  dateOfMonth: number;
}

export class Dates implements DateInterface {
  constructor(public daysPath: string, public monthsPath: string) {}

  today = new Date();
  get dayTranslation(): string {
    const day = this.today.getDay();

    return `${this.daysPath}.${DayOfTheWeek[day]}`;
  }

  get monthTranslation(): string {
    const month = this.today.getMonth();

    return `${this.monthsPath}.${Months[month]}`;
  }

  get dateOfMonth(): number {
    const dateOfMonth = this.today.getDate();

    return dateOfMonth;
  }
}
