// **a)** Wir möchte die Schulklasse mit Leben füllen und brauchen dafür eine Klasse Person mit folgenden Attributen/Eigenschaften: 

// - id
// - firstName
// - lastName
// - birthday

// Überlege dir hierzu selbst die passenden Datentypen.


export class Person {
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    birthday: string = "";

    constructor(id: number, firstName: string, lastName: string, birthday: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
}