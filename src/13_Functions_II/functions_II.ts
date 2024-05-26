
// Functions-TS-Grundlagen-Level-1_1

// - Schreibe - wie du es bisher gewohnt bist - die Funktion intro1() und gib nur "Hello Function" in der Konsole aus.
// - Nun sollst du den Code mit Hilfe der Arrow-Function verkürzen.
// - Schaue dir die Beispiele unter Hinweise an.

function intro1(): void {
    console.log(`Hello Function`);
}
intro1()

const intro2 = (): void => {
    console.log('Hello Arrow Function');
}

intro2();

// Functions-TS-Grundlagen-Level-1_2

// ? - Schreibe eine Function, die "Hallo" in deinem HTML anzeigt.
// ? Schreibe eine 2. Function, die die Summe von zwei Zahlen in deinem Browser (Konsole oder HTML) anzeigt.
// ? Schreibe eine 3. Function, die das Ergebnis der Multiplikation von zwei Zahlen über window.alert ausgibt
// - Schreibe eine 4. Function, die einen Parameter vom Typ Object hat und die alle Eigenschaften (Keys) des Objekts in der Konsole ausgibt.
// - Konvertiere schließlich alle Funktionen in die neue Arrow-Functions Schreibweise.

const myDiv = document.getElementById('hello_div');

function helloInHTML(): void {    
    if (myDiv) {
    myDiv.innerHTML = `Hallo`;
}
}

helloInHTML()

const helloArrow = () => myDiv && (myDiv.innerHTML = `Hallo`);

function zweiZahlen(a: number, b: number): void {
    const mySum = a + b;
    if (myDiv) {
        myDiv.innerHTML += ` meine Summe ${a} + ${b} = ${mySum}`;
    }
}

zweiZahlen(2,2);

const zweiZahlenSumme = (a: number, b: number): void => {
    const mySum = a + b;
    if (myDiv) {
        myDiv.innerHTML += ` meine Summe ${a} + ${b} = ${mySum}`;
    }
}
    

function zweiZahlenMehr(a: number, b: number): void {
    const myProduct = a * b;
    if (myDiv) {
        window.alert(` mein Produkt ${a} * ${b} = ${myProduct}`);
    }
}

zweiZahlenMehr(2,2);

const zweiZahlenProdukt = (a: number, b: number): void => {
    const myProduct = a * b;
    if (myDiv) {
        window.alert(` mein Produkt ${a} * ${b} = ${myProduct}`);
} 
}

// function helloObject(array: string[]) {
// console.log(array);
// }

// const beispielObjekt = { 
//     name: "Anna", 
//     age: 34, 
//     job: "unemployed" 
// };

// This-TS-Level-1_2

// - Baue in der Function zeigeProfil deines Objektes die Ausgabe aller Werte der Person ein
// - Validiere dein HTML auf Korrektheit.
// - Lege dann eine zweite Person mit den gleichen Eigenschaften aber anderen Werten an
// - Die 2. Person soll ebenfalls eine Funktion zeigeProfil habe, die aber dieses Mal als Arrow-Function definiert ist

let person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: 1.78,
    zeigeProfil: function () {
        return `Name: ${this.vorname}<br>
        Nachname: ${this.nachname}<br>
        Alter: ${this.alter}<br>
        Familienstand: ${this.familienstand}<br>
        Größe: ${this.groesse}`;
    }
};

const personElement = document.getElementById('person');
        if (personElement) {
            personElement.innerHTML = `${person.zeigeProfil()}`;
        };

let person2 = {
    vorname: 'Antonella',
    nachname: 'Bird',
    alter: 43,
    familienstand: 'verheiratet',
    groesse: 1.62,
    // geht ned
    // zeigeProfil: () =>
    //     `Name: ${this.vorname}<br>
    //     Nachname: ${this.nachname}<br>
    //     Alter: ${this.alter}<br>
    //     Familienstand: ${this.familienstand}<br>
    //     Größe: ${this.groesse}`;
};

// Functions-TS-Level-2_2

// ? Lege im HTML ein kleines Formular zur Kundenanlage mit folgenden Eingabefeldern an
//     - firstName: string
//     - lastName: string
//     - email: string
//     - phone: string

// - Lege einen Submit-Button für das Formular an und erstelle einen EventHandler

const customerForm = document.getElementById('customerForm');

// ? Lege einen Typ NewCustomer mit diesen Eigenschaften an
//     - firstName: string
//     - lastName: string
//     - email: string (optional)
//     - phone: string (optional)

type NewCustomer = {
    firstName: string,
    lastName: string,
    email?: string, // (optional)
    phone?: string, // (optional)
}

const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;


// - Lege zwei Funktionen an, die jeweils das gleiche Ergebnis liefern, nämlich einen Begrüßungstext als String zurückgeben

// - Der Begrüßungstext lautet, je nachdem ob email und/oder phone oder nichts von beiden angegeben wurden folgendermaßen:

// 'Hello Suzy Sue. We will not contact you'
// 'Hello Suzy Sue. We will contact you via suzy@gmail.com'
// 'Hello Suzy Sue. We will contact you via 0178 / 645464'
// 'Hello Suzy Sue. We will contact you via suzy@gmail.com and 0178 / 645464'

// - greetNewUser1 mit einem Parameter vom Typ NewCustomer
// Nimmt Parameter als Objekt
function greetNewUser1(customer: NewCustomer): string {
    if (customer.firstName && customer.lastName) {
        return `Hello ${customer.firstName} ${customer.lastName}. We will not contact you.`
    }
    else if (customer.email) {
        return `Hello ${customer.firstName} ${customer.lastName}. We will contact you via ${customer.email}.`
    }
    else if (customer.phone) {
        return `Hello ${customer.firstName} ${customer.lastName}. We will contact you via ${customer.phone}.`
    }
    else {
        return `Hello ${customer.firstName} ${customer.lastName}. We will contact you via ${customer.email} and ${customer.phone}.`
    }
}

// - greetNewUser2 mit 4 Parametern (firstName, lastName, email, phone)
// Nimmt Parameter direkt an als Usereingabe
function greetNewUser2(firstName: string, lastName: string, email: string, phone: number): string {
    if (firstName && lastName) {
        return `Hello ${firstName} ${lastName}. We will not contact you.`
    }
    else if (email) {
        return `Hello ${firstName} ${lastName}. We will contact you via ${email}.`
    }
    else if (phone) {
        return `Hello ${firstName} ${lastName}. We will contact you via ${phone}.`
    }
    else {
        return `Hello ${firstName} ${lastName}. We will contact you via ${email} and ${phone}.`
    }
}

// - Diese Aktionen sollen ausgeführt werden, wenn man auf den Submit-Button klickt
//     - ein Objekt vom Typ NewCustomer wird angelegt
//     - greetNewUser1 wird aufgerufen
//     - greetNewUser2 wird aufgerufen
//     - das Ergebnis von greetNewUserVar1 wird auf die Konsole geloggt
//     - das Ergebnis von greetNewUserVar2 wird im HTML unterhalb des Submit-Buttons ausgegeben


customerForm?.addEventListener('submit', function(event) {
    event?.preventDefault();
    const firstNameValue  = firstNameInput?.value;
    const lastNameValue = lastNameInput?.value;
    const emailValue = emailInput?.value;
    const phoneValue = phoneInput?.value;
    
    const newCustomer: NewCustomer = { 
        firstName: firstNameValue,
        lastName: lastNameValue,    
        email: emailValue,
        phone: phoneValue
    };

    const greetMessage1 = greetNewUser1(newCustomer);
    console.log(greetMessage1);
    const greetMessage2 = greetNewUser2(newCustomer.firstName, newCustomer.lastName, newCustomer.email, newCustomer.phone);

    const newElement = document.createElement('p');
    newElement.innerHTML = greetMessage2;
    const divContainer = document.getElementById('customer_output');
    divContainer?.appendChild(newElement)
})