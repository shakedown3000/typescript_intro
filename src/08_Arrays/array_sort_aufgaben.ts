// Array-TS-Sort-Level-1_1 (sort)

// - In dieser Übung geht es darum, Arrays alphabetisch zu sortieren.
// - Sortiere die Programmiersprachen alphabetisch.
/// - Verwende den Befehl sort(), um die Aufgabe zu erfüllen.
// - Rufe die Funktion sortAlphabetically auf.

let languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

console.log(`Before sortation: ${languages}`);

// - Deklariere die Funktion sortAlphabetically. return element.sort() sortiert lexiklisch alphabetisch :)

function sortAlphabetically(sortingElement: string[]): string[] {
    return sortingElement.sort()
} 

// - Überprüfe den Erfolg in der Konsole.
console.log(`After sortation: ${sortAlphabetically(languages)}`);

// - Lege selbst ein weiteres Array europeanCountries mit einigen Ländern an, z. B.

let europeanCountries: string[] = [
    "France", 
    "Germany", 
    "Sweden", 
    "Great Britain", 
    "Czech Republic", 
    "Switzerland"
];

console.log(`Before sortation: ${europeanCountries}`);

// - Rufe die Funktion sortAlphabetically mit den europeanCountries auf
// - Überprüfe den Erfolg in der Konsole.
console.log(`After sortation: ${sortAlphabetically(europeanCountries)}`);



// Array-TS-Sort-Level-1_2 (sort + reverse)

// - In dieser Übung geht es darum, Arrays nicht alphabetisch von A-Z, sondern von Z-A zu sortieren.
// - Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
// - Nenne die Funktion sortDescending (= sortiere absteigend).
// - Verwende den Befehl sort() und reverse(), um die Aufgabe auszuführen.

function sortDescending(a: string, b: string) {
    // Wie sortiere ich in umgekehrter alphabetischer Reihenfolge? Mit localeCompare :)
    return b.localeCompare(a) // b - a bedeutet Differenz absteigend
}

// - Rufe die Funktion sortDescending auf.
// - Überprüfe das Ergebnis in der Konsole.
// die vorher definierte Funktion setzen wir in die Sort Funktion 

languages.sort(sortDescending);
console.log(`Descending: ${languages}`);

// - Rufe die Funktion auch für europeanCountries auf
// - Überprüfe das Ergebnis in der Konsole.


europeanCountries.sort(sortDescending);
console.log(`Descending: ${europeanCountries}`);



// Array-TS-Sort-Level-1_3 (sort)

// - In dieser Übung lernst du, wie man die Nummern 0-99 aufsteigend sortiert.
let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
console.log(`Before: ${numArray1}`); 

function sortAscendingNumbers(a: number, b:number): number {
    return a-b;
}
numArray1.sort(sortAscendingNumbers);

// - Überprüfe das Ergebnis in der Konsole.
console.log(`After with ascending numbers: ${numArray1}`);


// - Sortiere anschließend die Zahlen aus dem Array absteigend

numArray1.reverse();

// - Überprüfe das Ergebnis in der Konsole.

console.log(numArray1);



// Array-TS-Sort-Level-2_1

// - Schreibe ein kleines Programm, das Zeichenketten umkehrt.
// - Diese Function soll jeden String, der ihr als Parameter übergeben wird umdrehen können
// - Du wirst Array-Methoden verwenden müssen, um den String umzudrehen.
// - Rufe die Function mit deinem Namen als Parameter auf.
// - Überprüfe das Ergebnis in der Konsole.

// - Versuche diese Begriffe umzukehren:
let namesArray: string[] = [
    "Sergio",
    "Hannah",
    "Regallager",
    "Reliefpfeiler",
    "Rentner"
    ];

// Funktion deklarieren, um Strings abzufragen mit map: map erstellt ein neues array indem sie auf jedes element im array eine funktion anwendet
// Ich schreibe eine Funktion, die die Reihenfolge der Buchstaben ändert. Danach eine Funktion, die ein neues Map erstellt.
// Split Methode verwenden (The split() method in TypeScript allows you to split a string into an array of substrings by separating the string using a specified separator) -> Ergebnis ist ein array
// reverse zum Umdrehen aller elemente im array
// join um array wieder zusammenzufügen

function reverseNames(name: string): string {
    return name.split('').reverse().join(''); 
}


// Jetzt brauche ich eine Funktion, die es mir ermöglicht alle Namen aus dem Array abzurufen, nicht nur einen

function reverseAllNames(nameListNew: string[]): string[] {
    return nameListNew.map(reverseNames);
}

console.log(reverseAllNames(namesArray));

// - Versuche diese Sätze umzukehren:
//     - Ella mag alle Bohnen
//     - han nesaH has ennaH

// Split Methode um zunächst alle Wörter in einzelne Arrays zu zerlegen. Ich splitte beim Leerzeichen. Dann wende ich die Methode split erneut an um die einzelnen Buchstaben in Arrays zu zerlegen

function splitSentence(sentence: string): string {
    let firstArray: string[] = sentence.split(' '); // haben jetzt die Wörter getrennt in ein array
    console.log(firstArray); // ["Ella", "mag","alle","Bohnen"]
        function arrayReverse(name: string): string {
            return name.split('').reverse().join(''); // Reversen EINES Wortes
        }
        function reverseArray(testWord: string[]): string[] {
            return testWord.map(arrayReverse); // Abrufen aller Namen
        }
        console.log(reverseArray(firstArray))
        return reverseArray(firstArray).reverse().join(' '); // Am Ende noch mal Reverse
    
}

console.log(splitSentence('Ella mag alle Bohnen'));
console.log(splitSentence('han nesaH has ennaH'));



// Array-TS-Sort-Level-2_3 (slice)


// Die concat()-Methode wird verwendet, um zwei oder mehr Arrays zusammenzuführen und ein neues Array zurückzugeben. Die ursprünglichen Arrays bleiben unverändert.
// Der Spread-Operator (...) wird verwendet, um die Elemente eines Arrays in einen anderen Array einzufügen oder um ein Array in einzelne Elemente aufzuteilen.
// Der Hauptunterschied zwischen concat() und dem Spread-Operator besteht darin, dass concat() eine Methode ist, die aufgerufen wird, während der Spread-Operator eine Sprachfunktion ist, die direkt in den Code eingebettet wird

// Lernziel: Arrays zusammenführen

// - Lege ein Array oldPainters von Strings mit folgenden Elementen an:

let oldPainters: string[] = [
    "Caspar David Friedrich", 
    "Mary Cassatt", 
    "Rosa Bonheur", 
    "Francisco de Goya", 
    "Édouard Manet"];

// Lege ein zweites Array newerPainters von String mit diesen Elementen an:

let newerPainters: string[] = 
["Pablo Picasso", 
"Salvador Dalí", 
"Frida Kahlo", 
"Georgia O'Keeffe"]

// - Erstelle die Arrays auf zwei Arten: einmal mit concat und einmal mit dem Spread-Operator

// Concat: 

const combinedArrayConcat = oldPainters.concat(newerPainters);
console.log(combinedArrayConcat);


// Spread Operator

const combinedArraySpread = [...oldPainters, ...newerPainters];
console.log(combinedArraySpread);

// - femalePainters mit den weiblichen Malerinnen aus beiden Arrays

const femaleSliceOld = oldPainters.slice(1,3);
console.log(femaleSliceOld);
const femaleSliceNewer: string[] = newerPainters.slice(2, 3);
console.log(femaleSliceNewer);

const concatFemale: string[] = femaleSliceOld.concat(femaleSliceNewer);
console.log(concatFemale);
const spreadFemale: string[] = [...femaleSliceOld, ...femaleSliceNewer];
console.log(spreadFemale);

// - malePainters mit den männlichen Malern aus beiden Arrays

const malePainters: string[] = 
oldPainters.slice(0,1).concat(oldPainters.slice(3)).concat(newerPainters.slice(0,2));
console.log(malePainters);



// Array-TS-Level-1_14 (copy)

// - Lernziel: Arrays kopieren
// - Erstelle ein Array oldHollywoodActors vom Typ String mit folgendem Inhalt: “Marlon Brando”, “Audrey Hepburn”, “Elizabeth Taylor”, “Cary Grant”, “Paul Newman” und “Doris Day”

let oldHollywoodActors: string [] = [
    "Marlon Brando", 
    "Audrey Hepburn",
    "Elizabeth Taylor", 
    "Cary Grant",
    "Paul Newman",
    "Doris Day"
];

// - Erstelle eine neue Variable actorsReference und weise ihr direkt das Array zu

let actorsReference = oldHollywoodActors;

// - Füge “Marilyn Monroe” hinzu

actorsReference.push("Marilyn Monroe")

// - Lass dir die Inhalte von oldHollywoodActors und actorsReference ausgeben
console.log(oldHollywoodActors); // bei beiden wurde Marilyn hinzugefügt
console.log(actorsReference);

// - Erstelle mit concat() eine Kopie von oldHollywoodActors
let oldHollywoodActorsCopy = oldHollywoodActors.concat()
console.log({oldHollywoodActorsCopy})

// - Erstelle eine weitere Kopie mit slice()
let oldHollywoodActorsSlice = oldHollywoodActors.slice()
console.log({oldHollywoodActorsSlice});

// - Erstelle eine dritte Kopie mit dem Spread-Operator

let oldHollywoodActorsSpread = [...oldHollywoodActors]
console.log({oldHollywoodActorsSpread});

// - Ändere jeweils einen anderen Wert in den drei Kopien

oldHollywoodActorsCopy.splice(0,1, "Charlie Chaplin"),
console.log({oldHollywoodActorsCopy});

oldHollywoodActorsSlice.splice(1,1, "Humphrey Bogart")
console.log({oldHollywoodActorsSlice});

oldHollywoodActorsSpread.splice(2,1, "Rita Hayworth");
console.log({oldHollywoodActorsSpread});

// - Lass dir den Inhalt des ursprünglichen Arrays und aller Kopien ausgeben

console.log({oldHollywoodActors}); // behält Ursprung


// Array-TS-Level-3_1

// Lernziel: In Arrays suchen und Inhalte aufbereiten

// - Gegeben sind zwei Arrays vom Typ String
// - artworks

let artworks: string[] = [
    "Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Die Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"
];

let artworkDates: string[] = [
    "Die Sternennacht - 1889",
    "Guernica - 1937",
    "Die Geburt der Venus - 1486",
    "Die Nachtwache - 1642",
    "Die Mona Lisa - 1503",
    "Die Kartoffelesser - 1885",
    "Die Schrei - 1893",
    "Das letzte Abendmahl - 1495",
    "Die freudige Botschaft - 1885",
    "Der Garten der Lüste - 1505"
];

// - Schreibe eine Funktion, die einen Parameter artworkName übergeben bekommt
// - Die Funktion soll in artworks und artworkDates nach dem Namen suchen
// - wird nichts gefunden, wird “Artwork [artworkName] not found” auf der Konsole ausgegeben
// - Nutze für die Suche die Methode [find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find?retiredLocale=de) und recherchiere selbst, wie sie verwendet werden kann
// - Nutze split() und trim() um die Jahreszahl und den Namen jeweils aus dem gefundenen Ergebnis auszuschneiden


function art(artworkName: string): string {
    console.log(artworkName)
    // Suche Index im ersten Array
    let index = artworks.indexOf(artworkName.trim());
    console.log("Index gefunden:", index);
    console.log(index);
    // Wenn vorhanden
    if (index !== -1) {
        // Das Kunstwerk und das dazugehörige Datum extrahieren
        let artwork = artworks[index];
        let date = artworkDates[index];
        // Den Namen des Künstlers extrahieren mit Split
        let artistName = artwork.split(" - ")[1];
        console.log(artistName);
        // Das Jahr extrahieren
        let year = date.split(" - ")[1];
        console.log(year);
        return `${artwork} wurde von ${artistName} im Jahre ${year} gemalt`;
    } else {
        return `Artwork ${artworkName} not found`;
    }
}

console.log(art("Die Nachtwache"));;

// "'Die Sternennacht' wurde von Vincent van Gogh im Jahre 1889 gemalt"