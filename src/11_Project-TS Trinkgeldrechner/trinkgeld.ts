// Project-TS Trinkgeldrechner

// Erstelle einen Rechner, mit dem du aus dem Rechnungsbetrag folgende Sachen machen kannst:
// - 1) Du kannst den Rechnungsbetrag eingeben
// 2) Du kannst angeben, wie viele Leute sich den Betrag teilen und 
// 3) Du kannst das Trinkgeld berechnen, indem du je nach Zufriedenheit mit dem Service einen unterschiedlichen Prozentsatz (Schlechter Service: 2% Trinkgeld, Mittlerer Service: 10% Trinkgeld, Super Service: 20% Trinkgeld) auswählst.

// - Es wird dir angezeigt, wie hoch die Summe des Trinkgeldes ist, wie hoch der insgesamt Rechnungsbetrag ist und wie viel jede:r in der Gruppe zahlen muss.
// - Erstelle ein Flowchart und füge es als Bild in der [README.md](http://README.md) des Projekts ein

// Get Element referenzieren im HTML

const eingabeBetrag = document.getElementById("euro_input") as HTMLInputElement;
const eingabePersonen = document.getElementById("people_input") as HTMLInputElement;
const serviceSelection = document.getElementById("service_select") as HTMLInputElement;
const submitButton = document.getElementById('submitBtn') as HTMLInputElement;
const resultDivElement = document.getElementById('output')

// Event Listener hinzufügen, um die Berechnung bei Klick auf den Button auszuführen

submitButton?.addEventListener('click', calculate);

// Values holen aus der Usereingabe für den Eurobetrag und in eine Zahl umwandeln

const euroValue: number = parseFloat(eingabeBetrag.value);

 
// Funktion zur Berechnung des Trinkgeldes basierend auf dem Servicelevel

function calculateTip(euroValue: number): number {
    let tipPercentage: number = 0;

    // Servicelevel aus dem Dropdown-Menü abfragen
    const serviceValue: string = serviceSelection.value;

    // Prozentsatz des Trinkgeldes basierend auf dem ausgewählten Servicelevel festlegen

    switch (serviceValue) {
        case "super_service": tipPercentage = 0.2;
            break;
        case "mittlerer_service": tipPercentage = 0.1;
            break;
        case "schlechter_service": tipPercentage = 0.02;
            break;
    }
    return euroValue * tipPercentage;
}

// Das Trinkgeld ist: 
let tip = calculateTip(euroValue);

// Hauptfunktion zur Berechnung und Anzeige der Ergebnisse

function calculate(event: MouseEvent) {
    event.preventDefault()

    // Eingabewerte für den Rechnungsbetrag und die Anzahl der Personen abrufen und konvertieren

    const personenValue: number = parseInt(eingabePersonen.value);
    const euroValue: number = parseInt(eingabeBetrag.value)

    // Trinkgeld berechnen
    const tip= calculateTip(euroValue);

    // Gesamtsumme inklusive Trinkgeld berechnen
    const totalSum = euroValue + tip;

    // Betrag pro Person berechnen
    const betragProPerson = totalSum / personenValue;
    
    // Ausgabe HTML

    if(resultDivElement) {
        resultDivElement.innerHTML = "";
    }

    // Ich lege eine Liste für die Ergebnisse an
    const createListElement = document.createElement("ul");
    resultDivElement.appendChild(createListElement);
    // Trinkgeldausgabe im Text
    const createResultList1 = document.createElement("li");
    createResultList1.textContent = `Das Trinkgeld beträgt ${tip.toFixed(2)}`;
    createListElement.appendChild(createResultList1);
    // Gesamtbetrag
    const createResultList2 = document.createElement("li");
    createResultList2.textContent = `Der Gesamtbetrag beträgt ${totalSum.toFixed(2)}`;
    createListElement.appendChild(createResultList2);
    // Betrag pro Person
    const createResultList3 = document.createElement("li");
    createResultList3.textContent = `Der Gesamtbetrag beträgt ${betragProPerson.toFixed(2)}`;
    createListElement.appendChild(createResultList3);
}
