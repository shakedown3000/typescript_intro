// DOM-TS_Level-1_4

// ? - Erstelle ein Input-Feld und einen Button im HTML.
// - Erstelle eine Function, die die Eingabe aus einem Textfeld ausliest und dann diesen Text mit dem aktuellen Zeitstempel (nutze dafür new Date()) im HTML-Dokument anzeigt.
// - Die Funktion soll aufgerufen werden, wenn auf den Button “Text hinzufügen” geklickt wird
// - Verwende .innerHTML, um dort jeweils den Text und das Datum hinzuzufügen


const inputField = document.getElementById('input_text') as HTMLInputElement;
const inputButton = document.getElementById('button');
const outputField = document.getElementById('result_text') as HTMLDivElement;

function insertText(): void {
    if (inputField && outputField && inputButton) {
        // Zugriff auf Value 
        console.log(inputField.value);
        inputButton.addEventListener('click', () => {
        // Wir kreieren eine Liste für den Output
        const date = new Date();
        const outputList = document.createElement('ul')
        outputField.appendChild(outputList);
        const outputText = document.createElement('li');
        outputList.appendChild(outputText);
        outputText.textContent = `${date.toLocaleString()} ${inputField.value}`;
        })
    }
}

insertText()


// DOM-TS-Level-1_2

// - Hole dir mit document.getElementById(“info”) das Element und nutze dann .innerHTML
// ? Erstelle eine h1 mit dem Text “Hello World”.
// ? Füge noch eine h2 hinzu mit dem Text “How are you?”. Siehe dir anschließend das Ergebnis im Browser an.
// ?  Jetzt arbeitest du weiter mit dem Code und fügst im HTML noch ein <div> mit der ID “container” ein.
// ? Nutze wieder document.getElementById('container')
// ? Erstelle einen <p>-Tag mit dem Text “This is a paragraph” und füge ihn zum container hinzu
// ? Füge ein weiteres Element vom Typ input hinzu. Das Input-Element soll vom Typ text sein


let infoDiv = document.getElementById("info");
if (infoDiv) {
let ueberschrift = document.createElement("h1");
ueberschrift.innerHTML = "Hello World";
infoDiv?.appendChild(ueberschrift)
let ueberschriftH2 = document.createElement("h2");
ueberschriftH2.innerHTML = "How are you";
infoDiv?.appendChild(ueberschriftH2);
let neuesDiv = document.createElement("div");
neuesDiv.id = "container";
infoDiv?.appendChild(neuesDiv);
let newContainer = document.getElementById("container");
let neuesPTag = document.createElement('p');
neuesPTag.innerHTML = "This is a paragraph";
newContainer?.appendChild(neuesPTag);
let inputElement = document.createElement('input');
inputElement.type = 'text';
newContainer?.appendChild(inputElement)
}

// DOM-TS-Level-1_3

// - Erstelle im Code drei <figure> -Elemente für eine Galerie.
// - Sie sollen Child-Element der section “gallery” sein
// - Nutze den vorgegebenen HTML-Code.

const figureWrapper = document.getElementById("gallery");

if (figureWrapper) {
    // Bildinformationen in einem Array speichern
    const images = [
        { src: './img/kitty1.jpeg', alt: 'Süßes Katzenbaby', caption: 'Das ist ein süßes Katzenbaby' },
        { src: './img/kitty2.jpeg', alt: 'Noch mal ein Süßes Katzenbaby', caption: 'Noch ein süßes Katzenbaby'},
        { src: './img/kitty3.png', alt: 'Einfach Süth', caption: 'Einfach süth' }
    ];

    // Erstelle drei figure-Elemente und füge sie zur Galerie hinzu
    images.forEach(imageInfo => {
        const figureElement = document.createElement('figure');
        const image = document.createElement('img');
        image.src = imageInfo.src;
        image.alt = imageInfo.alt;
        image.width = 250;
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = imageInfo.caption;  
        figureElement.appendChild(image);
        figureElement.appendChild(figcaption);
        figureWrapper.appendChild(figureElement);
    });
    }


// let image1 = document.createElement('img');
// image1.src = './img/kitty1.jpeg';
// image1.alt = 'Süßes Katzenbaby'

// let image2 = document.createElement('img');
// image2.src = './img/kitty2.jpeg';
// image2.alt = 'Noch mal ein Süßes Katzenbaby';

// let image3 = document.createElement('img');
// image3.src = './img/kitty3.png';
// image3.alt = 'Einfach Süth';

// figureWrapper?.appendChild(figureElement1);
// figureWrapper?.appendChild(figureElement2);
// figureWrapper?.appendChild(figureElement3);

// Dom-Elements-TS-Level-1_1

// - Erstelle eine einfache Website auf der dynamisch eine Einkaufsliste erzeugt werden soll.
// - Beim Klicken auf den Button sollte der eingegebene Text aus dem Input-Feld der Liste hinzugefügt werden.
// - Das Input-Feld soll nach jedem Hinzufügen geleert werden.
// - Du kannst folgendes nutzen:
//     - createElement
//     - appendChild
//     - getElementById
//     - textContent
//     - EventListener

// To DO:
// ? allen HTML Elementen Variablen zuweisen
// ? Event Listener erstellen auf Button
// ?Array erstellen für Liste
// ?Listenfunktion erstellen
// ?Output erstellen

const eingabefeldSuche = document.querySelectorAll('input');
const eingabefeld = eingabefeldSuche[2] as HTMLInputElement;
const buttonSuche = document.querySelectorAll('button');
const button = buttonSuche[1] as HTMLButtonElement;
const ausgabeliste = document.getElementById('myList');

button?.addEventListener('click', addToList);
const list: string[] = [];

function addToList(): void {
    // Werte aus Eingabefeld holen
    if(eingabefeld) {
    let inputFeldValue = eingabefeld.value.trim();
    if(inputFeldValue) {
    // in Liste pushen
    list.push(inputFeldValue);
    // Neues Listenelement erstellen und zur Ausgabeliste hinzufügen
    const itemListAddition = document.createElement('li');
    itemListAddition.textContent = inputFeldValue;
    ausgabeliste?.appendChild(itemListAddition);
    // Eingabefeld leeren
    eingabefeld.value = '';
    }
    }   
    }
