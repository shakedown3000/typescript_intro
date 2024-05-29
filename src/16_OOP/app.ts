// OOP-Class-TS-Level-1_1

// - Lege 4 Instanzen von IceCreamFlavor an und setze deren Eigenschaften
// - Lege die 4 Instanzen in einem Array ab
// - Lass dir von allen populären Eissorten (isPopular) den Namen auf der Konsole ausgeben

import IceCreamFlavor from "./iceCreamFlavor";

const chocolate: IceCreamFlavor = new IceCreamFlavor ('chocolate', 1.5, true)
chocolate.description = 'Hello';
console.log(chocolate);
const stracciatella: IceCreamFlavor = new IceCreamFlavor ('stracciatella', 1.8, true);
const tomato: IceCreamFlavor = new IceCreamFlavor ('tomato', 2, false);
const mint: IceCreamFlavor = new IceCreamFlavor ('mint', 1.7, false);

let allIcecreamFlavors: IceCreamFlavor[] =  [chocolate, stracciatella, tomato, mint];

console.log(allIcecreamFlavors);

function filterIsPopular(): void {
    allIcecreamFlavors.forEach(flavor => {
        if (flavor.isPopular) {
            console.log(flavor.name);
        }
    });
}
filterIsPopular();

// OOP-Class-T

import { SchoolClass } from './schoolClass';

// - Lege in einer neuen Datei eine Klasse mit dem Namen SchoolClass an

// - Lege drei SchoolClasses an - sie müssen mit Konstruktorparametern angelegt werden

const schoolClassA: SchoolClass = new SchoolClass (1, "Class A")
const schoolClassB: SchoolClass = new SchoolClass (2, "Class B")
const schoolClassC: SchoolClass = new SchoolClass (3, "Class C")

// - Ändere bei zwei SchoolClasses nachträglich den Namen über das Setzen der Eigenschaft

schoolClassB.name = "Class X";
schoolClassC.name = "Class Z";
console.log(schoolClassB);

// OOP-Class-TS-Level-2_1

// Wir wollen unsere Schulklassenverwaltung (SchoolClass) nun weiter ausbauen.

// **a)** Wir möchte die Schulklasse mit Leben füllen und brauchen dafür eine Klasse Person mit folgenden Attributen/Eigenschaften: 

// - id
// - firstName
// - lastName
// - birthday

// Überlege dir hierzu selbst die passenden Datentypen.

// **b)** Füge der Klasse SchoolClass ein weiteres Attribut/eine Eigenschaft hinzu, und zwar ein Array aus Personen. 

import { Person } from "./Person";

const personA: Person = new Person(111, 'Emmy', 'Behringer', '02.06.2027')
const schoolClassD: SchoolClass = new SchoolClass(4, "Class D", personA);
console.log(schoolClassD);

// **c)** Teste deine Klassen und Methoden in der app.ts. Erstelle eine Schulklasse und füge mehrere Personen hinzu

// d) Lass dir alle Personen aus der Schulklasse ausgeben

// **Tip:** du kannst eine Schleife zur Erstellung von den Personen benutzen.

// OOP-Class-TS-Level-2_2

// Erstelle eine Klasse Car mit folgenden Eigenschaften:

// - brand (Marke)
// - constructionYear(Baujahr)
// - currentSpeed (aktuelle Geschwindigkeit)

// Überlege dir sinnvolle Datentypen für die Eigenschaften.

// Erstelle eine separate Klasse Driver mit folgenden Eigenschaften:

// - firstName (Vorname)
// - lastName (Nachname)
// - age (Alter)
// - car (Auto)

// Überlege dir sinnvolle Datentypen für die Eigenschaften.

// Im Konstruktor von Driver soll bereits das zugehörige Auto übergeben und gesetzt werden.

// Zu guter Letzt sollst du in der Datei app.ts, mehrere Autos und Fahrer erstellen und miteinander verknüpfen

import { Car } from "./car";
import { Driver } from "./driver";

// const tesla: Car = new Car("tesla", 2023, 250)  
const tesla = new Car()
tesla.brand = "tesla";
tesla.constructionYear = 2023;
const driverA: Driver = new Driver('Nico', "B.", 30, tesla);
console.log(driverA);

