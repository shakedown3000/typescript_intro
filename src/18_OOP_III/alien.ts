class Alien {
  public name: string;
  public planet: string;
  public galaxy: string;
  private _color: string;

  constructor(name: string, color: string, planet: string, galaxy: string) {
    this.name = name;
    this.planet = planet;
    this.galaxy = galaxy;
    this._color = color;
  }

  get color(): string {
    return this._color;
  }
}

export default Alien;
