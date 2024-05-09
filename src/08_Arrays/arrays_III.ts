// Array-TS-Iteration-Level-1_2 (map)


const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];

// - Nutze die map()-Methode, um in einer neuen Variable upperDrinks alle Getränke in Großbuchstaben zu speichern:
const upperDrinks = drinks.map((drinkItem: string) => drinkItem.toUpperCase())

// - Gib upperDrinks in der Konsole aus.
console.log({upperDrinks});

// - Nutze die Map-Methode um für jedes Element auf der Konsole folgendes auszugeben: ‘I like [drink]’

const iLikeDrinks = drinks.map((drinkItem: string) => 
    {return 'I like ' + drinkItem;
});
console.log(iLikeDrinks);


// Array-TS-Iteration-Level-1_4 (map)

// - Schreibe Code, der mit Hilfe von map() ein Array aus Temperaturen von Fahrenheit in Celsius umwandelt.
// - Verwende die [mathematische Formel celsius = (℉ - 32) / 1.8 zur Umrechnung.
// - Überprüfe das Ergebnis in der Konsole.

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

// Wandelt das Array fahrenheit in ein Array celsius um, indem er die map()-Funktion verwendet

// Die ursprüngliche Schreibweise der Funktion:

function convertToCelsius(temperature: number): number {
    return (temperature - 32) / 1.8;
}
// Arrow-Funktion (wenn die Pfeilfunktion nur einen Ausdruck enthält, kann auf die geschweiften Klammern {} und das return-Schlüsselwort verzichtet werden)
// Merke: Der Name temperature kann beliebig gewählt werden und dient dazu, auf den aktuellen Wert des Elements im Array zu verweisen, auf das die map-Funktion angewendet wird.
let celsius: number[] = fahrenheit.map(temperature => (temperature - 32) / 1.8);
// Die berechnete Celsius-Temperatur wird von der Arrow-Funktion zurückgegeben und automatisch in das neue Array eingefügt, das von der map-Funktion erstellt wird.

console.log(celsius);


// Array-TS-Iteration-Level-1_5 (map)

// - Verwende die Variable checkNumber aus dem Code-Snippet
// - Nutze die Array-Methode map()
// - In der map-Methode soll Folgendes passieren:
//     - Überprüfe mit einem if-Statement, ob die Zahl durch 3 teilbar ist.
//     - Wenn ja: Addiere 100 zu dieser Zahl hinzu.
//     - Wenn nein: Lasse die Zahl so wie sie ist
// 

let checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

//  Überprüfe mit einem if-Statement, ob die Zahl durch 3 teilbar ist.
const testThree: number = checkNumber.map((numberInput: number) => {
    if (numberInput % 3 == 0) {
    //  Wenn ja: Addiere 100 zu dieser Zahl hinzu.
    return numberInput + 100; 
    }
    // Wenn nein: Lasse die Zahl so wie sie ist
    else {
        return numberInput;
    }})
// Das Ergebnis der map-Methode soll in einem neuen Array gespeichert werden
// Gib das Ergebnis in der Konsole aus.

    console.log(testThree);



// Array-TS-Iteration-Level-1_6 (map oder forEach)

let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];

// Erstelle ein neues Array von Dateinamen auf Basis des gegebenen Arrays (siehe Code-Snippet):

let albumCopy: string[] = album.map(element => element);
console.log({albumCopy});

// - Entferne die Dateiendungen (z.B. "image.jpg" => "image")

let removeExtension: string[] = albumCopy.map((filename: string, index: number) => {

    // Dateinamen in Kleinbuchstaben umwandeln
    filename = filename.toLowerCase();

    // Prüfen, ob eine Dateiendung vorhanen ist:
    if (filename.includes('.')) {
    // Dateiendung entfernen mit Slice, wir suchen nach dem letzten Punkt, 0 Startindex, von dem aus die Extraktion beginnt, lastIndex ist der Endindex, bis zu dem die Extraktion erfolgen soll
    filename = filename.slice(0, filename.lastIndexOf('.'));
    }

    // Dateiendung aus dem Dateinamen entfernt & Dateiname ohne Dateiendung zurückgegeben
    // - Falls keine Dateiendung vorhanden ist, soll statt dem Dateinamen der Wert "invalid" gespeichert werden (z.B. "dog" => "invalid").
    else {
    filename = "invalid";
    }
    return `${index + 1} - ${filename}`;
})

console.log(removeExtension);




// Array-TS-Iteration-Level-1_7 (map)

let fruits: string[] = ['🍇', '🍌', '🍒', '🍎']

// - Schreibe Code, der dir aus dem Array fruits jeweils Fruchtsaft macht, indem ein Saftglas angehängt wird

let juice: string[] = fruits.map((fruitChoice: string) => fruitChoice + "🍹");

// - Gib nun die Fruchtsäfte in der Konsole aus.
console.log({juice});

// Alternative mit return: 

let newJuice: string[] = fruits.map(function(fruitChoice: string, index: number): string {
    return `${fruitChoice}🍹`;
});

console.log(newJuice);



// Array-TS-Iteration-Level-1_8 (filter)

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// - Schreibe eine Function printEvenNumbers(), wobei die Elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die geraden Zahlen zeigt

function printEvenNumbers(): number[] {
    return zahlen.filter((element: number) => element % 2 === 0);
}

// Gewohnte Schreibweise:

function printEvenNumbers2(): number[] {
    return zahlen.filter(function(element: number) { // function ist eine anonyme Funktion, die als Argument in Filter übergeben wird. Filter braucht eine Bedingung und erstellt Array nur für jene Elemente, für die Bedingung wahr ist
        // Merke: Die filter()-Methode erwartet eine Funktion als Argument, die für jedes Element des Arrays ausgeführt wird.
        return element % 2 === 0;
    });
}

console.log(`Gerade Zahlen: ${printEvenNumbers()}`);

// Schreibe nun die selbe Logik noch einmal in der Arrow-Function-Schreibweise

let printEvenArrown: number[] = zahlen.filter((element1: number) => element1 % 2 === 0);

// - Schreibe eine Function printOddNumbers(), wobei die Elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die ungeraden Zahlen zeigt


function printOddNumbers(): number[] {
    return zahlen.filter((element: number) => element % 2 !== 0)
} 

console.log(printOddNumbers());

// Schreibe nun die selbe Logik noch einmal in der Arrow-Function-Schreibweise

const printOddArrow: number[] = zahlen.filter((element: number) => element % 2 !== 0);
console.log(printOddArrow);



// Array-filter-TS-Level-1_2


// - In dieser Übung setzt du die filter()-Methode ein, um gezielt Elemente auszusortieren und ein neues Array zu erzeugen, das nur die übriggebliebenen Elemente enthält.
// - Ziel ist es alle “null” und “undefined”-Elemente zu entfernen.

const heroArr: (string | null | undefined)[] = ["Superman", "Batman", undefined, undefined, "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", undefined, null];

// - Zur besseren Darstellung lass dir das Array vor und nach dem Aufruf der Function ausgeben.

console.log(`Before Cleaning: ${heroArr}`);

// - Schreibe die Function showHeroesCleaned(), die das Array mit Hilfe der filter()-Methode aufräumt.

function showHeroesCleaned() {
    return heroArr.filter(heroName => heroName !== null && heroName !== undefined)
}

// - Gib das Ergebnis nun in der Konsole aus.
console.log(`After Cleaning: ${showHeroesCleaned()}`);



// Ternary-Operator-TS-Level-2_1

// - In dieser Übung wendest du die filter()-Methode an, um ein Array von Strings zu filtern.


const woerter: string[] = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

// - Schreibe eine Function, die das vorgegebene Array woerter durchläuft.
// - Die Function soll alle Zeichenketten filtern, die 6 Zeichen oder weniger lang sind.

// Wenn Index >5 do not return 
// Wie zähle ich die anzahl der buchstaben? wort.length
function filterWoerterSix(): string[] {
    return woerter.filter((wort: string) => wort.length < 5)
}

// Mit Ternary Operator sähe es so aus:

function filterWoerterSixAlternative(): string[] {
    return woerter.filter((wort: string) => wort.length < 5 ? wort : '');
}

// - Gib das Ergebnis in der Konsole aus.
console.log(filterWoerterSix()); // [ "Ente", "Auto" ]

// - Schreibe eine zweite Funktion, die alle Wörter, die ein großes oder kleines ‘E’ enthalten, herausfiltert

// wie suche ich nach einem E? -> includes Funktion
function filterE(): string[] {
    return woerter.filter((wort: string) => wort.includes('e'||'E') )
}

// - Gib das Ergebnis in der Konsole aus.

console.log(`Includes E: ${filterE()}`);