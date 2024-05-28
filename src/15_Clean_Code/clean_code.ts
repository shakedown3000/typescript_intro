
// Clean-Code-TS-Level-1_1

// ? Lege eine HTML-Datei mit einem Text-Input und drei Buttons an
// ? Die drei Buttons heißen
//     - Zähle Großbuchstaben
//     - Zähle Leerzeichen
//     - Zähle Vokale

const textEingabe = document.getElementById('textEingabe') as HTMLInputElement;
const buttonGrossbuchstaben = document.getElementById('zaehleGrossbuchstabenBtn') as HTMLButtonElement;
const buttonLeerzeichen = document.getElementById('zaehleLeerzeichenBtn') as HTMLButtonElement;
const buttonVokale = document.getElementById('zaehleVokaleBtn') as HTMLButtonElement;
const ausgabe = document.getElementById('ausgabe');

buttonGrossbuchstaben.addEventListener('click', berechneAnzahlGrossbuchstaben);
buttonLeerzeichen.addEventListener('click', berechneAnzahlLeerzeichen);
buttonVokale.addEventListener('click', berechneAnzahlVokale)

function berechneAnzahlGrossbuchstaben(event: Event): void {
    event.preventDefault();
    if (textEingabe && ausgabe) {
        let ausgangstext = textEingabe.value.split('');
        let grossbuchstabenAnzahl = 0;
        ausgangstext.forEach(char => {
            if (char >= 'A' && char <= 'Z') {
            grossbuchstabenAnzahl++;
            }
        });
        let ergebnisGrossbuchstaben = document.createElement('p');
        ergebnisGrossbuchstaben.innerHTML = `Anzahl Großbuchstaben: ${grossbuchstabenAnzahl}`;
        ausgabe?.appendChild(ergebnisGrossbuchstaben);
    } 
}

function berechneAnzahlLeerzeichen(event: Event): void {
    event.preventDefault();
    if (textEingabe && ausgabe) {
        let ausgangstext = textEingabe.value;
        let anzahlLeerzeichen = ausgangstext.split(' ').length -1;
            let ergebnisLeerzeichen = document.createElement('p');
            ergebnisLeerzeichen.innerHTML = `Anzahl Leerzeichen: ${anzahlLeerzeichen}`;
            ausgabe?.appendChild(ergebnisLeerzeichen); 
        };
}

function berechneAnzahlVokale(event: Event): void {
    event.preventDefault();
    if (textEingabe && ausgabe) {
        let ausgangstext: string = textEingabe.value;
        // anzahlVokale auf null prüfen
        let vokalPrüfung = ausgangstext.match(/[aeiouäöü]/gi);
        let anzahlVokale= vokalPrüfung ? vokalPrüfung.length : 0;
        let ergebnisVokale = document.createElement('p');
        ergebnisVokale.innerHTML = `Anzahl Vokale: ${anzahlVokale}`;
        ausgabe?.appendChild(ergebnisVokale); 
        };
}

// Beim Klick auf den Button
//     - die Anzahl der Leerzeichen  im eingegebenen Text in einem Output-Div ausgegeben
//     - die Anzahl der Vokale (aeiouAEIOU)  im eingegebenen Text in einem Output-Div ausgegeben
// - Achte auf sprechende Variablen- und Funktionsnamen
// - Lagere doppelten Code in eine Funktion aus

// Clean-Code-TS-Level-2_1

// - Schau dir den Code im angehängten Code-Snippet an
// - Er ist nicht auf den ersten Blick verständlich
// - Schreibe ihn so um, dass er künftig besser verständlich für dich und deine Team-Kolleg:innen ist

// const getNumberText = (num: number | undefined): string =>
//     ['One', 'Two', 'Three', 'Four', 'Five'][num ? num - 1 : 0 - 1] ?? 'Unknown';
  
//   const userInput: number = Math.ceil(Math.random() * 7);
//   console.log(userInput);
//   const numberText = getNumberText(userInput);
//   console.log(numberText);

const getNumberText = (num: number | undefined): string => {
const numberTextform = ['One', 'Two', 'Three', 'Four', 'Five'];
// Wenn num in dieser Range liegt
if (num && num >= 1 && num <= 5) {
    return numberTextform[num - 1]
}
else return 'Unknown';
}

const userInput: number = Math.ceil(Math.random() * 7);
console.log(userInput);
const numberText = getNumberText(userInput);
console.log(numberText);