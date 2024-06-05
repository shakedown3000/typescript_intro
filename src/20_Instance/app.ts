import InstanceChecker from "./instanceChecker";
import Unicorn from "./unicorn";

// OOP-Class-TS-Level-1_7

// - Lege eine Datei unicorn.ts
// - Lege dort eine Klasse Unicorn an
// - Lege eine Datei instance-checker.ts an
// - Erstelle dort eine Klasse InstanceChecker
// - Lege eine statische Methode isUnicorn an
// - Die Methode hat einen Parameter namens objectToCheck - ausnahmsweise vom Typ any ;)
// - Die Methode gibt true zurück, wenn das objectToCheck eine Instanz der Klasse Unicorn ist
// - Die Methode gibt false zurück, wenn das objectToCheck keine Instanz der Klasse Unicorn ist

// - Lege eine Datei app.ts an
// - Rufe die Methode InstanceChecker.isUnicorn mit einem leeren Objekt auf und lass dir das Ergebnis auf der Konsole ausgeben
// - Erstelle eine Instanz der Klasse Unicorn
// - Rufe die Methode InstanceChecker.isUnicorn dieser Instanz auf und lass dir das Ergebnis auf der Konsole ausgeben

const check1 = InstanceChecker.isUnicorn({});
console.log(check1);

let newUnicorn = new Unicorn();
const check2 = InstanceChecker.isUnicorn(newUnicorn);
console.log(check2);

// OOP-Class-TS-Level-1_8

// ? Lege eine Datei car.ts an
// ? Lege dort eine Klasse Car an
// ? Lege eine weitere Datei electric-car.ts an
// ? Lege dort eine Klasse ElectricCar an
// - Verwende den InstanceChecker aus [OOP-Class-TS-Level-1_7](https://www.notion.so/OOP-Class-TS-Level-1_7-90d06102759c4869afdd4d5a33d3ec48?pvs=21)  weiter
// ? Lege eine statische Methode isCar an
// ? Die Methode hat einen Parameter namens objectToCheck - ausnahmsweise vom Typ any
// ? Die Methode gibt true zurück, wenn das objectToCheck eine Instanz der Klasse Car ist
// ? Die Methode gibt false zurück, wenn das objectToCheck keine Instanz der Klasse Car ist

// ? Lege eine statische Methode isElectricCar an
// ? Die Methode hat einen Parameter namens objectToCheck - ausnahmsweise vom Typ any
// ? Die Methode gibt true zurück, wenn das objectToCheck eine Instanz der Klasse ElectricCar ist
// ? Die Methode gibt false zurück, wenn das objectToCheck keine Instanz der Klasse ElectricCar ist
// ? Lege eine Datei app.ts an
// ? Lege dort eine Instanz der Klasse Car und eine der Klasse ElectricCar an
// - Rufe die Methode InstanceChecker.isCar mit den gerade erstellten Variablen auf und lass dir das Ergebnis auf der Konsole ausgeben
// - Rufe die Methode [I](http://InstanceChecker.is)nstanceChecker.isElectricCar mit den gerade erstellten Variablen auf und lass dir das Ergebnis auf der Konsole ausgeben

import { InstanceCheckerCar } from "./InstanceCheckerCar";
import { InstanceCheckerElectricCar } from "./InstanceCheckerCar";
import ElectricCar from "./electric-car";

let newcar = new ElectricCar();
let newElectricCar = new ElectricCar();

console.log(InstanceCheckerCar.isCar(newcar));
console.log(InstanceCheckerElectricCar.isElectricCar(newElectricCar));

// OOP-Class-TS-Level-1_11

// ? Erstelle eine neue Klasse Activity in einer Datei activity.ts
// ? Die Klasse hat die Eigenschaften name (string) und difficulty (number von 1 - 6)
// ? difficulty soll eine get- und eine set-Methode haben und nur die gültigen Werte zulassen, andernfalls kommt eine Fehlermeldung
// ? Lege eine Methode execute an, die auf der Konsole “Executing [Name der Aktivität]…” ausgibt
// ? Leite eine neue Klasse Yoga davon ab (yoga.ts)
// ? Die Klasse hat die zusätzliche Eigenschaft type vom Datentyp Enum
// ? Werte sind: Hatha, Vinyasa, Ashtanga und Bikram

// - Leite eine neue Klasse Running von Activity ab
// - Lege dort die Eigenschaft distance vom Typ number an
// - Distance muss immer über den Konstruktor gesetzt werden
// - Lege zwei Methoden warmUp und coolDown an
// - Je nach Länge (distance) soll dort “Warming up for x minutes”, “Cooling down for x minutes” stehen
//     - ab 3 km: 2 Minuten Warmup und Cooldown
//     - ab 4.5 km: 3 Minuten
//     - ab 7 km: 4 Minuten
//     - mehr als 10 km: 5 Minuten
// - Achte darauf, dass du keinen doppelten Code schreibst (DRY-Prinzip)

//! OOP-Class-TS-Level-2_6
// ? Lege eine Klasse Singer an, die eine Eigenschaft name: string hat
// - Lege 4 Klassen, die von Singer erben, die zusätzlich die Methode sing() haben, die einen String zurückgibt
// - Setze den Namen und gib bei der Methode in jeder Klasse eine bekannte Liedzeile zurück

// ```tsx
// class Beyonce extends Singer {
//     constructor(name: string) {
//        super(name);
//     }
//     sing(): string {
//         return "I'm a survivor, I'm gonna make it!";
//     }
// }
// ```

// - Lege eine Datei app.ts an
// - Schreibe eine Function letsSing in app.ts mit einem Parameter singer
// - Je nach Typ der Klasse soll ein passendes Emoji, das den/die Sänger:in repräsentiert, mit dem Songtext ausgegeben werden, z. B.

// ```tsx
// 👨🏻‍🦱 "Freddy Mercury" sings "We will, we will rock you."
// ```

// - Denk dir etwas aus, was ausgegeben wird, wenn kein passender Klassen-Typ gefunden wird
// - Rufe letsSing für alle Instanzen deiner Klassen auf und lass dir das Ergebnis auf der Konsole ausgeben

// Group Work Mit Christian und Lisa zusammen

import {
  Singer,
  TaylorSwift,
  JohnnyCash,
  HansiHinterseer,
  Adele,
} from "./singer";

function letsSing(singer: Singer): void {
  if (singer instanceof TaylorSwift) {
    console.log(`👱🏻‍♀️ ${taylor.name} sings ${singer.sing()}`);
  } else if (singer instanceof JohnnyCash) {
    console.log(`💀 ${johnny.name} sings ${singer.sing()}`);
  } else if (singer instanceof HansiHinterseer) {
    console.log(`👴🏼 ${hansi.name} sings ${singer.sing()}`);
  } else if (singer instanceof Adele) {
    console.log(`👩🏻 ${adele.name} sings ${singer.sing()}`);
  } else {
    console.error("Error");
  }
}

const taylor = new TaylorSwift("Taylor Swift");
letsSing(taylor);
const johnny = new JohnnyCash("Johnny Cash");
letsSing(johnny);
const hansi = new HansiHinterseer("Hansi Hinterseer");
letsSing(hansi);
const adele = new Adele("Adele");
letsSing(adele);
