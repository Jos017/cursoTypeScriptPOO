// public is default, so it's not necesary to include it
export class MyDate {
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.day += amount;
    }
    if (type === 'years') {
      this.day += amount;
    }
  }
}

// You can modify a object property from outside
const myDate = new MyDate(1994, 20, 9);
myDate.year = 1990; // ok if public
