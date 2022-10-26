export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const pepe = new Animal('pepe');
pepe.move();
pepe.greet();

const cano = new Dog('cano', 'jose');
cano.move();
cano.greet();
cano.woof(1);
console.log(cano.owner);
