class Activity {
  private _name: string;
  private _difficulty: number;

  constructor(name: string, difficulty: number) {
    this._name = name;
    this._difficulty = difficulty;
  }

  get name(): string {
    return this._name;
  }
  get difficulty(): number {
    return this._difficulty;
  }

  set difficulty(value: number) {
    if (value < 1 || value > 6) {
      console.error("Wrong value. Must be between 1 and 6");
    } else {
      this._difficulty = value;
    }
  }
  execute(): void {
    console.log(`Name of method is: ${this.name}`);
  }
}

export default Activity;
