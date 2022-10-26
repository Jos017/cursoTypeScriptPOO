// public is default, so it's not necesary to include it
export class MyDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day: string = this.addPadding(this.day);
    const month: string = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years'): void {
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

  getDay() {
    return this.day;
  }
}

// You can modify a object property from outside
const myDate = new MyDate(1994, 20, 9);
console.log(myDate.printFormat());
// You can obtain a private values from a public method
console.log(myDate.getDay());
