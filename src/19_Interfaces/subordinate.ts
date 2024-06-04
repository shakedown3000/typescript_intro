// - Erstelle dort eine Klasse Subordinate, die das Interface IEmployee implementiert
// - Erstelle nun eine Methode in der Klasse Manager namens addSubordinate mit einem Parameter vom Typ IEmployee
// - Die Methode soll den übergebenen IEmployee in das Array assignedEmployees hinzufügen

import IEmployee from "./contracts/Iemployee";

class Subordinate implements IEmployee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
}

export default Subordinate;
