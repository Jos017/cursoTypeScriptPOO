export class MyDate {
  constructor(
    // Always define access "public" or "private" to activate shorcut
    public year: number = 2000,
    public month: number = 1,
    private _day: number = 1 // Refactor _day to use getter
  ) {}

  printFormat(): string {
    const day: string = this.addPadding(this._day);
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
      this._day += amount;
    }
    if (type === 'months') {
      this._day += amount;
    }
    if (type === 'years') {
      this._day += amount;
    }
  }

  // Getter to obtain day
  // It works as a property when used with the object
  get day(): number {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
// Getters not need (), they work as a property but they are methods
myDate.day;
myDate.isLeapYear;
