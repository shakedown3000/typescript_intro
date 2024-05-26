// Dom-Elements-TS-Level-1_9

// - Dieses Mal sollst du eine Function schreiben, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.
// - HTML und CSS ist vorgegeben. Siehe Code-Snippet.
// - Nutze:
//     - [addEventListener()](https://www.w3schools.com/jsref/met%5Fdocument%5Faddeventlistener.asp) für den Klick auf den Button
//     - [selectedIndex()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex) um dir das ausgewählte Element aus dem Select zu holen
//     - [remove()](https://www.w3schools.com/jsref/met%5Felement%5Fremove.asp) um über den Index das Element zu löschen

// Zugriff auf das <form> Element

const form = document.querySelector('form') as HTMLFormElement;

// Zugriff auf das <select> Element
const farbeAuswahlen = document.getElementById('farbeAuswahlen') as HTMLSelectElement;

// Zugriff auf das <button> Element
const button = document.getElementById('button') as HTMLButtonElement;


button?.addEventListener('click', (event) => {
    event.preventDefault();
    // Value holen aus Select
    const selectedIndex = farbeAuswahlen.selectedIndex;
        if (selectedIndex !== -1) {
            // Entferne die ausgewählte Option
            farbeAuswahlen.remove(selectedIndex);
        }
    })

// Dom-Elements-TS-Level-2_2

// - Beim Anklicken des Buttons sollen die Werte aus dem Formular in der Konsole ausgegeben werden.
// - Definiere einen Typ SimplePerson
// - Lege in der jetzt zusätzlich ein Objekt vom Typ SimplePerson an, das die Werte aus dem Formular erhält
// - Lass dir das Objekt auf der Konsole ausgeben

type SimplePerson = {
    vorname: string;
    nachname: string;
    land: string;
};

// Zugriff auf das Formular
const formElement = document.getElementById('form1') as HTMLFormElement;

// Zugriff auf die Eingabefelder und das Select-Element
const vornameInput = document.getElementById('vorname') as HTMLInputElement;
const nachnameInput = document.getElementById('nachname') as HTMLInputElement;
const landSelect = document.getElementById('land') as HTMLSelectElement;

formElement?.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(vornameInput.value);
    console.log(nachnameInput.value);
    console.log(landSelect.value);
    
    const person: SimplePerson = {
        vorname: vornameInput.value,
        nachname: nachnameInput.value,
        land: landSelect.value,
    };
    console.log({person});
}
)


// Dom-Elements-TS-Level-2_4

const bodyElement = document.body;
bodyElement?.classList.add('background');

// Zugriff auf das <select>-Element
const selectElement = document.getElementById('farbeAuswahlen1') as HTMLSelectElement;

// Zugriff auf den Button
const button1 = document.getElementById('button1') as HTMLButtonElement;

// Event Listener adden 
button1?.addEventListener('click', (event) => {
    event.preventDefault();
    //  gibt den Index der ausgewählten Option im <select>-Element zurück.
    // Objekt, das eine Liste aller Optionselemente im entsprechenden <select>-Element darstellt. also gibt es uns durch index den entsprechenden wert aus
    const selectedOption = selectElement.options[selectElement.selectedIndex];

    // Value lesen
    const colorValue = selectedOption.value;

    // Leerzeichen aus dem Farbwert entfernen
    const formattedColorValue = colorValue.replace(/\s+/g, '');
    
    // Hintergrundfarbe des <body>-Elements ändern
    bodyElement.style.backgroundColor = formattedColorValue;
    })



    // Dom-Elements-TS-Level-2_10

    // Schreibe drei Funktionen, die beim Anklicken des Buttons den Style ändern.
    // - Nutze für die Aufgabe:
    // - classList
    // - transition-property
    // - transition-duration
    // - text-shadow

    const allButtons = document.querySelectorAll('button');
    console.log(`Number of Buttons: ${allButtons.length}`);
    // Die letzten drei Buttons wählen
    const buttonSmall = allButtons[allButtons.length - 3] as HTMLButtonElement;
    const buttonMedium = allButtons[allButtons.length - 2] as HTMLButtonElement;
    const buttonBig = allButtons[allButtons.length - 1] as HTMLButtonElement;
    const meinDiv = document.getElementById('element');
    
    // eventlisteners adden Small

    buttonSmall?.addEventListener('click', (event) => {
        event.preventDefault();
        meinDiv?.classList.toggle('transform');
    })


// Dom-Elements-TS-Level-3_1

// Erstelle eine Todo-Liste, die es dir ermöglicht, Aufgaben hinzuzufügen, anzuzeigen, als "erledigt" zu markieren und zu löschen.
// Hinzufügen von Todos:  Schreibe eine Function, um Aufgaben zur Liste hinzuzufügen, wenn der "Add"-Button geklickt wird.
// Anzeigen von Todos:  Aktualisiere die Anzeige der Todo-Liste im DOM, sobald neue Aufgaben hinzugefügt werden.
// Markieren von Todos als "erledigt":  Verwende eine Checkbox, um Todos als "erledigt" markieren zu können.
// Löschen von Todos:  Implementiere die Möglichkeit, Todos aus der Liste zu löschen.

