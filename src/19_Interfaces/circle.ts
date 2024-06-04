import IShape from "./contracts/IShape";

class Circle implements IShape {
  name: string;
  color: string;
  isRound: boolean;
  radius: number;

  constructor(name: string, color: string, radius: number) {
    this.name = name;
    this.color = color;
    this.radius = radius;
    this.isRound = true;
  }

  public draw(): void {
    console.log("Drawing Circle");
  }
}

export default Circle;
