console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1, 2, 2, 8, 1, 0));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}

// const math = new MyMath();
// math.PI;
console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(2, 2, 1, 12, 9));
const numbers = [1, 2, 3, 4, 10, 20, 30, 1];
console.log('MyMath.max', MyMath.max(...numbers));
console.log('MyMath.max', MyMath.max(-1, -2, -10));
