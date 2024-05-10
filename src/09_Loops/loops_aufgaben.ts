// Loops-TS-Level-1_1

// - Schreibe eine [for-Schleife], die genau 10 Mal "Hello World + Nummer" in der Konsole ausgibt
// - Bei jedem Durchlauf soll sich die Nummer um 1 erhöhen

for (let index: number = 0; index < 10; index++) {
    console.log('Hello World ' + (index + 1));
}

// Loops-TS-Level-1_2

// - Erstelle ein Array mit den Zahlen 0-10 mithilfe einer Schleife.
// - Wenn du mit Arrays arbeitest, musst du das Array initialisieren
// - Verwende den Befehl push() im Schleifenkörper.
// - Gib zum Schluss die Variable numbersToTen in der Konsole aus.

let numbersToTen: number[]  = [];

for (let index: number = 0; index <= 10; index++) {
    numbersToTen.push(index);
}

console.log(numbersToTen);


// Loops-TS-Level-1_3

// - Schreibe eine while-Schleife, die "Hallo World + Nummer" 10 mal anzeigt.
// - Lege dazu eine Variable counter mit dem Wert 0 an.
// - Als Bedingung nutze in der Schleife "counter < 10".
// - Gib den String "Hallo World + counter" in der Konsole aus.
// - Erhöhe counter um eins.

let counter = 0;

while (counter < 10) {
    console.log("Hello World " + counter);
    counter++;
}

// Loops-TS-Level-1_4

// - Deklariere ein Array "friendNames" mit den Werten: "Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim" und "Sergio"

let arrayNames: string[] = [
    "Georg", 
    "Anass", 
    "Elaine", 
    "Hakan", 
    "Eric", 
    "Kim",
    "Sergio"
]
// - Dann verwende eine for-Schleife, um alle Namen in der Konsole anzuzeigen
// Auf Array-Elemente können wir ja mit Hilfe des Index zugreifen.

for (let index = 0; index < arrayNames.length; index ++) {
    console.log(arrayNames[index]); // Durchlaufen aller Elemente mit Klammern wird jedes einzeln ausgegeben
}
// - Verwende anschließend eine for … of - Schleife um alle Namen in der Konsole anzuzeigen
// Hier werden alle einzelnen Elemente durchlaufen.

for (let singleName of arrayNames) {
    console.log(singleName);
}

// Loops-TS_Level-1_7

// - Erstelle einen Loop mit [do...while]
// - Es sollen die Nummern von 1 bis 5 (wie im Screenshot zu sehen) im HTML-Dokument ausgeben werden.



// do {
//     console.log(`The number is ${newCounter}`);
//     newCounter++;
// }
// while (counter < 5) {
    
// }

function doWhileLoop() {
    // Initialisiere die Zählervariable
    let newCounter: number = 1;

    // Do...while-Schleife
    do {
        // Füge die Nummer dem HTML-Dokument hinzu
        if (document.getElementById('output')) {
        document.getElementById('output').innerHTML += "The number is " + newCounter + '<br>';
    }
        // Erhöhe die Nummer um 1 für den nächsten Durchlauf
        newCounter++;
    } while (newCounter <= 5);
}

// Führe die Funktion aus
doWhileLoop();  


// Loops-TS-Level-1_8

// - Erstelle einen Loop mit [do...while]
// - Es sollen alle geraden Zahlen bis 20 im HTML-Dokument ausgegeben werden.

// Überschrift 
// if (document.getElementById('output2')) {
//     document.getElementById('output2').innerHTML += '<br>'+"Using do ... while loops" + '<br>';
// }

// let counterForWhile = 0;
// if (document.getElementById('output2')) {
//     do {
//         document.getElementById('output2').innerHTML += counterForWhile + '<br>';
//         counterForWhile += 2;
//     } while (counterForWhile <= 20);
// }


// Loops-TS-Level-2_1

// - Lernziel: Anwendung for-Schleife und Conditional Statements.
// - Nehmen wir an, wir wollen automatisiert 100 Dateinamen für Bilder in unserem Ordner erstellen. Wir erstellen dazu ein Array mit standardisierten Dateinamen – wie in der Ergebnisvorschau.
// - Deklariere dafür die Function createImageNames.
// - Deklariere im Funktionskörper die Variable returnArray als leeres Array.
// - Schreibe eine for-Schleife.
// - Du kannst Conditionals Statements (if, else) nutzen, wenn du den Dateinamen zusammenbaust, um zu ermittelt wie viel Nullen vor der Zahl stehen müssen. Alternativ kannst du die String-Methode einsetzen.
// - Nutze push() um den jeweiligen Dateinamen ins Array zu schreiben
// - Gib das Array mit return aus der Funktion zurück
// - Lasse dir das Ergebnis auf der Konsole ausgeben

function createImageNames() {
    let returnArray: string[] = [];
    for (let i = 0; i < 100; i++) {
        // index erst mal in String, damit ich ihn als namen ausgeben kann, dann padStart für die Nummerierung 000
        let stringNumber: string = i.toString().padStart(3, '0');
        returnArray.push("image_" + stringNumber+".jpg");  
    } return returnArray;
}

console.log(createImageNames())



// Loops-TS-Level-2_2 NOT FINISHED

// - Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// - In deinem HTML ist ein Inputfeld zu sehen, in das User:innen eine Zahl eingeben können. So wird die Anzahl des Buchstabens "o" festgelegt.
// - Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort "Loop" ausgibst, mit der eingegebenen Anzahl an Os aus dem Input-Feld.

let numberOfOs: number;

// elemente aus dem html holen und in variablen speichern
const inputElementUser = document.getElementById('number_input') as HTMLInputElement;
const addButtonElement = document.getElementById('o-generator');
const outputElement = document.getElementById('ad_o');

// Funktion erstellen, um os hinzuzufügen durch user

function addOToLoop(event: Event) {
    event.preventDefault();
    // Checken, ob es Elemente gibt im Doc
    if (inputElementUser || addButtonElement || outputElement) {
        const inputValue = inputElementUser.value;


    }
}