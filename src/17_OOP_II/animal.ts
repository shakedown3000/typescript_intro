// sie soll die Eigenschaften species (string), age (number) und color (string) enthalten

class Animals {
  private _species: string = "";
  private _age: number = 0;
  private _color: string = "";

  get species() {
    console.log("Getter is called for species");
    return this._species;
  }
  get age() {
    console.log("Getter is called for age");
    return this._age;
  }
  get color() {
    console.log("Getter is called for color");
    return this._color;
  }

  // Setter

  set species(value: string) {
    console.log("Setter is calles on species");
    if (value === "human") {
      console.log("This is not an animal.");
    } else {
      this._species = value;
    }
  }
  set age(value: number) {
    console.log("Setter is calles on number");
    if (number <= 0) {
      console.log("Age cannot be below zero.");
    } else {
      this._age = value;
    }
  }
  set color(value: string) {
    console.log("Setter is calles on color");
    if (value === "no idea") {
      console.log("This is not a color.");
    } else {
      this._color = value;
    }
  }
}

export default Animals;
