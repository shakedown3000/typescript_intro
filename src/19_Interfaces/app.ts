import Circle from "./circle";
import IShape from "./contracts/IShape";
import Rectangle from "./rectangle";

// OOP-Interfaces-TS-Level-1_1

// - Erstelle einen Ordner contracts
// - Erstelle ein Interface IShape mit den Eigenschaften
//     - name: string
//     - color: string
// - Lege eine Klasse Circle an, die IShape implementiert
// - Die Klasse soll die zusätzliche Eigenschaft haben
//     - radius: number
// - Außerdem gibt es die public Methode draw, die auf der Konsole “Drawing circle” ausgibt
// - Lege drei Instanzen von Circle an, der name ist immer ‘circle’

const circle1 = new Circle("Circle", "pink", 20);
console.log(circle1);
const circle2 = new Circle("Circle", "pink", 30);
console.log(circle2);
const circle3 = new Circle("Circle", "pink", 10);
console.log(circle3);
circle1.draw();
circle2.draw();
circle3.draw();

// OOP-Interface-TS-Level-1_2

// - Erstelle eine weitere Datei im Hauptordner rectangle.ts
// - Erstelle dort eine Klasse Rectangle, die das Interface IShape implementiert
// - Die Klasse soll diese zusätzlichen Eigenschaften haben
//     - width: number
//     - height: number
// - Außerdem gibt es eine Methode draw, die auf der Konsole “drawing rectangle” ausgibt

// - Nimm die Methode draw ins Interface IShape auf
// - Nimm eine weitere Eigenschaft isRound (boolean) in IShape auf
// - Implementiere die Eigenschaft mit sinnvollen Werten in den Klassen Circle und Rectangle

const rectangle1 = new Rectangle("Rectangle One", "Yellow", 10, 20);
const rectangle2 = new Rectangle("Rectangle Two", "Purple", 15, 25);
const rectangle3 = new Rectangle("Rectangle Three", "Orange", 20, 30);

console.log(rectangle1);
rectangle1.draw();
rectangle2.draw();
rectangle3.draw();

// OOP-Interface-TS-Level-2_1

// - Lege dort eine Datei employee.ts an
// - Erstelle ein Interface IEmployee mit den Eigenschaften
//     - name (string)
//     - age (number)
//     - position (string)
// - Lege im Hauptordner eine Datei manager.ts an
// - Lege dort eine Klasse Manager an, die das Interface IEmployee implementiert
// - Die Klasse Manager hat eine zusätzliche private Eigenschaft assignedEmployees (Array von IEmployee)

// - Lege in einer neuen Datei subordinate.ts an
// - Erstelle dort eine Klasse Subordinate, die das Interface IEmployee implementiert
// - Erstelle nun eine Methode in der Klasse Manager namens addSubordinate mit einem Parameter vom Typ IEmployee
// - Die Methode soll den übergebenen IEmployee in das Array assignedEmployees hinzufügen
// - Lege eine Datei app.ts an
// - Erstelle dort drei Instanzen der Klasse Subordinate
// - Erstelle eine Instanz der Klasse Manager
// - Weise die Subordinates über die Methode addSubordinate dem Manager zu

import Manager from "./manager";
import Subordinate from "./subordinate";

const subordinate1 = new Subordinate("Alice", 28, "Developer");
const subordinate2 = new Subordinate("Bob", 32, "Designer");
const subordinate3 = new Subordinate("Charlie", 25, "Tester");

const manager = new Manager("Eve", 40, "Team Lead");

manager.addSubordinate(subordinate1);
manager.addSubordinate(subordinate2);
manager.addSubordinate(subordinate3);
