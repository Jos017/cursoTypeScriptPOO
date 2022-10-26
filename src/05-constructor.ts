// public is default, so it's not necesary to include it
export class MyDate {
  constructor(
    // Always define access "public" or "private" to activate shorcut
    public year: number = 2000, // Define default value 2000
    public month: number = 1, // Define default value 1
    private day: number = 1 // Define default value 1
  ) {}

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
}

// If we used default values with properties we can omit them
const myDate1 = new MyDate();
const myDate2 = new MyDate(1993);
const myDate3 = new MyDate(1994, 12);
const myDate4 = new MyDate(1995, 11, 5);
console.log(myDate1); // => {year: 2000, month: 1, day: 1}
console.log(myDate2); // => {year: 1993, month: 1, day: 1}
console.log(myDate3); // => {year: 1994, month: 12, day: 1}
console.log(myDate4); // => {year: 1995, month: 11, day: 5}
