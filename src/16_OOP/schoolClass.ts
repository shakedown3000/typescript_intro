// - Im Konstruktor der Klasse SchoolClass soll auf der Konsole ausgegeben werden: “School class creation successful”
// - Es sollen zwei Konstruktorparameter übergeben werden: id und name, diese setzen die entsprechenden Eigenschaften der Klasse
// - die Eigenschaft endDate soll optional sein und wird nicht über den Konstruktor angelegt
import { Person } from "./Person";

export class SchoolClass {
    id: number = 0;
    name: string = "";
    endDate?: string = ""; // Optional
    persons: Person;
constructor(id: number, name: string, persons: Person) {
    this.id = id;
    this.name = name;
    this.persons = persons;
    console.log(`School class creation successful`);
}
}
