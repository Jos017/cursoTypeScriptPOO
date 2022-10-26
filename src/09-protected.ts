export class Animal {
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

const pepe = new Animal('pepe');
pepe.move();
pepe.greet();

const cano = new Dog('cano', 'jose');
// cano.name = 'otro nombre';
cano.woof(1);
cano.move();
