export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }

  protected doSomething() {
    console.log('doo');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log('moving as a dog');
    super.move();
  }
}

// With an abstract class you cannot create a direct instance
// You only can extend a abstract class to use its properties and methods

// const animal = new Animal('elite');
// animal.greet();

const cheis = new Dog('cheis', 'jose');
cheis.greet();
cheis.woof(1);
