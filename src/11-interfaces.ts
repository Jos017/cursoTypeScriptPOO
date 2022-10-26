export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23,
// };

// An interface used in a Class with implements
// When implementing an interface in a class shows error
// if not included the properties and methods defined in the interface
class PostgressDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  public connect(): void {
    // code
  }

  public disconnect(): void {
    // code
  }

  public isConnected(name: string): boolean {
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  public connect(): void {
    // code
  }

  public disconnect(): void {
    // code
  }

  public isConnected(name: string): boolean {
    return true;
  }
}
