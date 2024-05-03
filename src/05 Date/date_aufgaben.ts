// Date-TS-Level-1_1

// - In dieser Übung werden wir [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=de)() lernen.
// - Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.
// - Speichere die Werte in Variablen (date1, date2, usw.).
// - Verwende innerHTML, um das Ergebnis darzustellen.
// - Teste die folgenden Werte:  new Date("September 2, 2019 09:00:00")  new Date(0)  new Date(31556908800)  new Date(86400000)


let date1 = new Date(2019, 8, 02, 09, 00);
let date2 = new Date(0)
let date3 = new Date(31556908800)
let date4 = new Date(86400000)
console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);

document.open()
document.write(`${date1}`);
document.write(`${date2}`);
document.write(`${date3}`);
document.write(`${date4}`);
document.close()

// Date-TS-Level-2_1

// - Lernziel: Anwenden von TypeScript-Datumsfunktionen, Auswahl von HTML-Elementen und Anzeige des Ergebnisses im HTML-Dokument.
// - Stelle das aktuelle Datum in folgenden beiden Formen dar:
// tt-mm-jjjj und tt/mm/jjjj. (Tag, Monat, Jahr).
// - Nutze:  
// - getDate()  
// - getMonth()  
// - getFullYear()
// - getElementById() oder querySelector().
// - Stelle anschließend die aktuelle Uhrzeit auf zwei Arten dar
//     - lokal
//     - UTC
// - Lasse dir das Ergebnis im HTML-Dokument anzeigen.

let myDate = getDate()
let month = getMonth()
let fullYear = getFullYear()

const paragraph = document.getElementById('paragraph');
if (paragraph) {
    paragraph.innerHTML = myDate.toString()
}
// Date-TS-Level-3_2

// - Lernziel: Verwendung der Library [date-fns](https://date-fns.org/docs/Getting-Started)
// - Installiere dir mit npm i date-fns die Bibliothek in deinem Projekt
// - Lege zwei Datumsvariablen an: 01.01.1970 und jetzt
// - Nutze die Funktionen differenceInYears, …Hours, …Seconds
    
//     → Lass dir jeweils den Unterschied für die beiden Datumswerte auf der Konsole ausgeben
    
// - Lege eine weitere Variable myBirthday an
// - Berechne mit date-fns dein aktuelles Alter und dein Alter am 07.04.2007
// - Nutze Format um Informationen zu deinem Geburtstag in folgender Weise auszugeben