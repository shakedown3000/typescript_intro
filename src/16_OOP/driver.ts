// Erstelle eine separate Klasse Driver mit folgenden Eigenschaften:

// - firstName (Vorname)
// - lastName (Nachname)
// - age (Alter)
// - car (Auto)

import { Car } from "./car";

export class Driver {
    firstName: string = "";
    lastName: string = "";
    age: number = 0;
    car: Car;  

    constructor(firstName: string, lastName: string, age: number, car: Car) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.car = car;
    }
}