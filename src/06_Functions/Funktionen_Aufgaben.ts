// Functions-TS-Level-1_3

// - Deklariere die Funktion showPersonInfo() mit  drei Parametern
//     - name (string)
//     - city (string)
//     - age (number)
// - Gib unter Verwendung der entsprechenden Argumente folgenden Satz in der Konsole aus: "Hallo, mein Name ist SuperCoder. Ich bin 27 Jahre alt. Ich komme aus Düsseldorf."
// - Wenn bei age eine Kommazahl angegeben wurde, runde die Zahl ab
// - Verwende deine persönlichen Daten oder fiktive Daten.

const firstParagraph = document.querySelector('#first')

function showPersonInfo(name: string, city:string, age: number): string {
    let ageRoundown = age.toFixed();
    if (firstParagraph) {
        firstParagraph.textContent = `Hallo, mein Name ist ${name}. Ich bin ${ageRoundown} und komme aus ${city}`;
    }
}

showPersonInfo("Robert", "Lübeck", 54)


// Functions-TS-Grundlagen-Level-1_4

// - Deklariere die Funktion showHero(): void mit drei Parametern heroName, heroPower und heroEnemy. Im Funktionskörper {} sollst du dann Folgendes machen
// - Deklariere drei Variablen nameOutput, powerOutput und enemyOutput.
// - Weise den Variablen dann diese Werte zu   a. Mein:e Lieblingsheld:in ist: xyz   b. Er/sie hat die Fähigkeit: xyz   Sein/ihr größte/r Gegner:in ist: xyz.
// - Füge die Werte der übergebenen Parameter in die Variablen ein.
// - Gib nameOutput + powerOutput + enemyOutput in der Konsole aus.
// - Ruf deine Funktion auf.
// - Übergib Argumente für deine:n Lieblingsheld:in und gib diese in der Konsole aus.

const secondParagraph = document.querySelector('#second')

function showHero(heroName: string, heroPower: string, heroEnemy: string): void { let nameOutput: string = "Mein:e Lieblingsheld:in ist:";
    let powerOutput: string = "Er/sie hat die Fähigkeit:";
    let enemyOutput: string = "Ein/ihr größte/r Gegner:in ist:";
    if (secondParagraph) {
        secondParagraph.textContent = `${nameOutput} ${heroName}. ${powerOutput} ${heroPower}. ${enemyOutput} ${heroEnemy}.`;
    }
}
showHero("Bibi Blocksberg", "Hexenkraft", "der Bürgermeister");

// Functions-TS-Level-1_5

// - Deklariere die Funktion multiplyAndDivide() mit zwei number-Parametern.
// - Im Funktionskörper{} passiert Folgendes:
// - Gib in der Konsole das Ergebnis der Multiplikation der beiden Parameter aus.
// - Gib in der Konsole das Ergebnis der Division der beiden Parameter aus.
// - Rufe die Funktion mit den Argumenten (10, 2) auf.
// - Gib einen Fehler aus, falls der 2. Parameter 0 ist: “Division durch 0 nicht erlaubt”
// - Teste auch andere Werte: 30, 20 // 100, 100 // 5, 0 // 45, 173 // 1, 1000.


function multiplyAndDivide(number1: number, number2: number): number {
    let multiply = (number1 * number2);
    let division = (number1 / number2);
    if (number2 == 0) {
        console.log("Division durch 0 nicht erlaubt.");
    }
    else {
    console.log(multiply);
    console.log(division);
}
}

multiplyAndDivide(10, 2);
multiplyAndDivide(30, 20);
multiplyAndDivide(100,100);
multiplyAndDivide(5, 0);
multiplyAndDivide(45, 173);
multiplyAndDivide(1, 1000);

// Functions-TS-Grundlagen-Level-1_6

// - Lernziel: Der Vergleich von Functions und Variablen.
// - Deklariere die Function returnOne(). Schreibe return 1; in den Funktionskörper.
// - Deklariere die Variable x mit dem Wert 1, außerhalb des Funktionskörpers.
// - Deklariere die Variable y mit dem Wert returnOne(), außerhalb des Funktionskörpers.
// - Wenn x gleich y ist, dann soll in der Konsole “Wird das gedruckt?” angezeigt werden. Wenn x ungleich y ist, dann soll es nicht angezeigt werden.

function returnOne() {
    return 1;
}
let x = 1;
let y = returnOne();

if (x == y) {
    console.log("Wird das gedruckt?");
}
else {
    // Do nothing
}

// Functions-TS-Grundlagen-Level-1_7

// - In dieser Aufgabe soll geübt werden, wie Parameter eingesetzt werden können.
// - Erstelle dazu eine Funktion, die einen Parameter vom Typ number hat und multipliziere diesen mit 2.
// - Gib das Ergebnis mit return zurück und schaue dir das Ergebnis schließlich in der Konsole an.

function functionParameter (numberA: number): number {
    let multiplyA = (numberA * 2);
    console.log({multiplyA});
    return multiplyA; // nach Return macht Funktion nichts mehr!
}

functionParameter(4);

// Functions-TS-Grundlagen-Level-1_8

// - Dieses Mal sollst du eine Funktion zur Berechnung deines Alters schreiben. Setze dafür folgende Schritte nacheinander um
// - Überlege dir einen eindeutigen, sprechenden Namen
// - Definiere eine Funktion, die einen Parameter hat: birthYear.
// - Berechne im Funktionskörper dein Alter
// - Nutze return, um dein Alter zurückzugeben.
// - Gib dein Alter schließlich außerhalb der Funktion in der Konsole aus.
// - Die erste Funktion ist geschafft - super!
// - Schreibe nun eine Funktion, die dein Alter mit dem Alter einer/s anderen Teilnehmer:in vergleicht.
// - Definiere eine Funktion die zwei Parameter hat.
// - Benutze im Funktionskörper die Parameter um die Differenz eurer Alter zu berechnen und speichere dir das Ergebnis in der Variablen altersDifferenz ab.
// - Returne das Ergebnis und speichere das Ergebnis in einer Variablen
// - Gib die Altersdifferenz in der Konsole aus

function calculateMyAge(birthyear: number): number {
    let today = new Date();
    var myAge = today.getFullYear() - birthyear;
    return myAge;
}

var ageCalculatedMe = calculateMyAge(1990);
console.log({ageCalculatedMe});
var ageCalculatedSomeoneElse = calculateMyAge(1985)
console.log(ageCalculatedSomeoneElse);

function compareAge(ageCalculatedMe, ageCalculatedSomeoneElse): number {
    let comparisonOutput = Math.abs(ageCalculatedMe - ageCalculatedSomeoneElse);
    return comparisonOutput;
}

let ageDifference = compareAge(ageCalculatedMe, ageCalculatedSomeoneElse); // is there are shorter way to get the return from a function?
console.log(ageDifference);

// Functions-TS-Grundlagen-Level-1_9

// - Schreibe eine Function, die dich vorstellt und einen Text über dich ausgibt. Verwende folgende Parameter:
// vorname,  nachname,  geburtsort,  alter und  wohnort
// - Überlege dir einen guten sprechenden Namen
// - In der Konsole soll Folgendes ausgegeben werden: 
// Mein Name ist Aurora Stardust.  Ich bin in New York geboren.  Ich lerne bei SuperCode.  Ich bin 20 Jahre alt.  Ich wohne in Celestia.
// - Nutze String Concatenation: "string text " + Parameter + " string text"
// - Vergiss nicht, die Function mit deinen Daten/Argumenten aufzurufen.


function aboutMe(vorname: string, nachname: string, alter: number, wohnort: string, geburtsort: string): void {
    let thirdParagraph = document.querySelector('#third');
    if (thirdParagraph) {
        thirdParagraph.textContent = `Mein Name ist ${vorname} ${nachname}.  Ich bin in ${geburtsort} geboren.  Ich lerne bei SuperCode.  Ich bin ${alter} Jahre alt.  Ich wohne in ${wohnort}.`;
    }    
}

aboutMe("Friedrich", "Merz", 68, "Berlin", "Brilon")