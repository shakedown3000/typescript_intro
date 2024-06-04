// - in der Klasse Driver
// - soll es eine weitere Eigenschaft licenseFromYear: number geben, die nur über den Konstruktor gesetzt werden kann
//     → Wert ist nur über einen Getter (get-Methode) abrufbar
//     - soll es eine Methode getCarType(): CarType geben, die den CarType des aktuellen Autos als Text ausgibt

import Car from "./car.ts";
import CarType from "./cartype.ts";

class Driver {
  firstName: string = "";
  lastName: string = "";
  age: number = 0;
  car: Car;
  _liscenceFromYear: number = 0;

  // Getter

  get liscensFromYear() {
    console.log("Getter applied to liscenseFromYear.");
    return this._liscenceFromYear;
  }

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    car: Car,
    liscenseFromYear: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.car = car;
    this._liscenceFromYear = liscenseFromYear;
  }

  getCarType(): string {
    return `The type of car is ${this.car.carType}`;
  }
}
