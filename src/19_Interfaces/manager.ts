// - Lege dort eine Klasse Manager an, die das Interface IEmployee implementiert
// - Die Klasse Manager hat eine zusätzliche private Eigenschaft assignedEmployees (Array von IEmployee)

import IEmployee from "./contracts/Iemployee";

class Manager implements IEmployee {
  name: string;
  age: number;
  position: string;
  private _assignedEmployees: IEmployee[] = [];

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
    this._assignedEmployees = assignedEmployees;
  }
  // - Erstelle nun eine Methode in der Klasse Manager namens addSubordinate mit einem Parameter vom Typ IEmployee
  // - Die Methode soll den übergebenen IEmployee in das Array assignedEmployees hinzufügen
  addSubordinate(employee: IEmployee): void {
    this._assignedEmployees.push(employee);
  }
}

export default Manager;
