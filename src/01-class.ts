// Example of creating object from class
const date = new Date();

const date2 = new Date(1993, 1, 11); //0 enero 11 dic
date.getHours();
date.getTime();
date.toISOString();

console.log(date);
console.log(date2);

// Creating
class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2021, 3, 13);
console.log(myDate);
