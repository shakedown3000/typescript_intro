// Intro-TS-Level-1_15   

const num5: number = 5;
const anothernum: number = 8;

console.log(num5 == anothernum);
console.log(num5 === anothernum);
console.log(num5 > anothernum);
console.log(num5 < anothernum);
console.log(num5 >= anothernum);
console.log(num5 <= anothernum);
console.log(num5 == "5");
console.log(anothernum != 8);
console.log(num5 != "5");

// Conditionals-TS-Level-2_1

// - John und Meike spielen ein Spiel, bei dem sie Punkte für Größe und Alter erhalten.
// - Wer bekommt mehr Punkte? John ist 170 cm groß und 22 Jahre alt, Meike ist 168 cm groß und 34 Jahre alt.
// - Multipliziere das Alter mit 5 und addiere die Größe.
// - Vergleiche die Spieler:innenwerte mit if, else if Statements. Wer die meisten Punkte bekommt, gewinnt.
// - Gib die Punkte und den/die Gewinner:in in deiner Konsole aus.
// - Vergiss nicht Unentschieden (draw) zu behandeln.

const heightJohn = 170;
const ageJohn = 22;
const heightMeike = 168;
const ageMeike = 34

console.log({heightJohn, ageJohn, heightMeike, ageMeike});
const resultJohn = ageJohn * 5 + heightJohn
console.log({resultJohn});
const resultMeike = ageMeike * 5 + 168;
console.log({resultMeike});

function play () {
if (resultJohn > resultMeike) {
console.log(`John is the winner with ${resultJohn} points`);
}
else if (resultMeike > resultJohn) {
    console.log(`Meike is the winner with ${resultMeike} points`);
}
else if (resultJohn == resultMeike) {
    console.log("Draw");
}
else {
    console.log("Error");
}
}
// Calling function: 
play()

// Conditionals-TS-Level-2_3

// - Schreibe Code, um die Differenz zwischen einer bestimmten Zahl und 27 zu erhalten.
// - Wenn die Zahl größer als 27 ist, multipliziere die Differenz mit 2.
// - Lass dir das Ergebnis in der Konsole ausgeben.

let number: number = 35;
console.log(number);

function difference() {
    let difference27 = number - 27;
    console.log(`The difference from 27 to ${number} is: ${difference27}`);
    if (number > 27) {
        let result = difference27 * 2;
        console.log({result});
    }
    else {
        console.log("Your number is bigger than 27");
    }
}

difference()

// Conditionals-TS-Level-2_4

// - Lass dir zwei Zufallszahlen zwischen 1 und 77 generieren
// - Wenn beide Zahlen gleich sind, soll auf der Konsole ‘Was für ein Zufall’ ausgeben werden
// - Wenn die erste Zahl größer als die zweite Zahl ist, soll ‘Erste Zahl größer’ ausgegeben werden
// - Wenn die zweite Zahl größer als die erste Zahl ist, soll ‘Zweite Zahl größer’ ausgegeben werden
// - Setze dies zuerst mit if-else um
// - Setze die Logik dann mit switch um

let numberRandom1 = Math.ceil(Math.random()* 77);
console.log({numberRandom1});
let numberRandom2 = Math.ceil(Math.random()* 77) ;
console.log({numberRandom2});

function randomNumberCompare () {
    if (numberRandom1 == numberRandom2) {
        console.log("Was für ein Zufall");
    }
    else if (numberRandom1 > numberRandom2) {
        console.log("Erste Zahl größer");
    }
    else {
        console.log("Zweite Zahl größer");
    }
}

randomNumberCompare()


// switch (numberRandom1) {
//     case 1: numberRandom1 === numberRandom2;
//     console.log("Was für ein Zufall");
//         break;
//     case 2: numberRandom1 > numberRandom2;
//     console.log("Erste Zahl größer");
//         break;
//     default: ("Was für ein Zufall")
//         break;
// }



// Conditionals-TS-Level-1_5

// - Lernziel: Verstehen und Anwenden von switch-case
// - Lege eine Variable weekdayAsNumber vom Typ Number an
// - Lege eine Variable weekdayAsString vom Typ String an
// - Rufe window.prompt mit dem Text “Please insert a number from 1 to 7” auf
// - Wandle den im Prompt eingegebenen Wert in eine Number um und schreibe diese Zahl in die Variable weekdayAsNumber
// - Schreibe eine switch-case Anweisung für weekdayAsNumber (also für Werte von 1 bis 7)
//     - es soll je nach Wert der entsprechende Wochentag in die Variable weekdayAsString geschrieben werden
//     1 = ‘Montag’, 2 = ‘Dienstag’ etc.
// - Gebe dann weekdayAsString auf der Konsole aus
// - Wird eine andere Zahl angegeben soll ein Fehler auf der Konsole ausgegeben werden: “Weekday must be between 1 and 7”)

let weekdayAsNumber: number;
let enterNumber = window.prompt("Please insert a number from 1 to 7");
weekdayAsNumber = parseInt(enterNumber);
console.log(weekdayAsNumber);

switch (weekdayAsNumber) {
    case 1: console.log("Montag")        
        break;
    case 2: console.log("Dienstag")        
        break;
    case 3: console.log("Mittwoch")        
        break;
    case 4: console.log("Donnerstag")        
        break;
    case 5: console.log("Freitag")        
        break;
    case 6: console.log("Samstag")
        break;
    case 7: console.log("Sonntag");
        break;
    default: console.log("Keine gültige Nummer. Sie muss zwischen 1 und 7 liegen.")
        break;
}


// Conditionals-TS-Level-2_8

// - Lernziel: Verstehen und Anwenden von switch-case
// - Lass dir mit Math.random() eine Zufallszahl zwischen 1 und 10 ausgeben
// - Schreibe diesen Wert in eine Variable schoolGrade
// - Schreibe eine switch-case-Anweisung, die die Werte von schoolGrade überprüft und die entsprechende deutsche Notenbezeichnung auf der Konsole ausgibt
// ( 1 = ‘sehr gut’, 2 = ‘gut’, 3 = ‘befriedigend’, 4 = ‘ausreichend’, 5 = ‘mangelhaft’, 6 = ‘ungenügend’)
// - Bei 7, 8, 9, oder 10 soll ausgegeben werden: “Das ist keine gültige Schulnote.”

let schoolGrade = Math.ceil(Math.random() * 10);
console.log("Unser Schulnotenzufallsgenerator:");
switch (schoolGrade) {
    case 1:
        console.log(`${schoolGrade}: sehr gut`);
        break;
    case 2:
        console.log(`${schoolGrade}: gut`);
        break;
    case 3:
        console.log(`${schoolGrade}: befriedigend`);
        break;
    case 4:
        console.log(`${schoolGrade}: ausreichend`);
        break;
    case 5:
        console.log(`${schoolGrade}: mangelhaft`);
        break;
    case 6:
        console.log(`${schoolGrade}: ungenügend`);
        break;

    default:
        console.log(`${schoolGrade}: Das ist keine gültige Schulnote`);
        break;
}

// Conditionals-TS-Level-3_1

// - Lernziel: Verstehen und Anwenden von switch-case
// - Lass dir mit Math.random() eine Zufallszahl zwischen 1 und 12 generieren und speichere diesen Wert in eine Variable salesMonth
// - Schreibe eine switch-case-Anweisung, die je nach Wert von salesMonth angibt in welchem Quartal wir uns befinden
// (1-3 = “1. Quartal”, 4-6 = “2. Quartal” usw.)

let salesMonth = Math.ceil(Math.random()*12)
console.log(salesMonth);

function salesMonthFunction (salesMonth: number) {
    switch (salesMonth) {
        case 1:
        case 2:
        case 3: 
            console.log(`Monat: ${salesMonth}: 1. Quartal`)
            return "1. Quartal";
        case 4:
        case 5:
        case 6: 
            console.log(`Monat: ${salesMonth}: 2. Quartal`)
            return "2. Quartal";
        case 7:
        case 8:
        case 9:
            console.log(`Monat: ${salesMonth}: 3. Quartal`)
            return "3. Quartal";
        case 10:
        case 11:
        case 12: 
            console.log(`Monat: ${salesMonth}: 4. Quartal`)
            return "4. Quartal";
    }
}

let monthResult = salesMonthFunction(salesMonth);

// - Lass dir mit Math.random() eine Zufallszahl zwischen 1000 und 10000 generieren und speichere diesen Wert in einer Variable totalSales
// - Schreibe eine switch-case-Anweisung, die je nach Wert von totalSales in einer String-Variable speichert, wie der Umsatz einzuordnen war
//     - 1000 - 2500 → “schlecht”
//     - 2501 - 5000 → “mittelmäßig”
//     - 5001 - 7500 → “hoch”
//     - 7501 - 10000 → “unglaublich”
// - Lass dir auf der Konsole ausgeben wie der zufällige Umsatz im zufälligen Quartal war
// - Beispiel: 'Im 3. Quartal war der Umsatz unglaublich!'

let totalSales = Math.ceil((Math.random()* (10000-1000)+1000))
console.log({totalSales});

function switchResult(totalSales) {
    switch (true) {
        case totalSales >= 1000 && totalSales <= 2500: console.log(`${totalSales}: schlecht`);
            return "schlecht";
            break;
        case totalSales >= 2501 && totalSales <= 5000: console.log(`${totalSales}: mittelmäßig`);
        return "mittelmäßig"
            break;
        case totalSales >= 5001 && totalSales <= 7500: console.log(`${totalSales}: hoch`);
            return "hoch"
            break;
        case totalSales >= 7501 && totalSales<= 10000: console.log(`${totalSales}: unglaublich`);
        return "unglaublich"
            break;
    }
}

let totalSalesResult = switchResult(totalSales);
console.log(`Im ${monthResult} war der Umsatz ${totalSalesResult}`);



// Ternary-Operator-TS-Level-2_2

// Lernziel: Ternary Operator anwenden

// - Lass dir folgende Variablen mit zufälligen boolean-Werten befüllen
//     - isOnline
//     - isPremiumUser
//     - isAdult
// - Folgende Logik soll über den Ternary Operator umgesetzt werden
//     - Wenn isOnline true ist, soll ‘online’ auf der Konsole ausgegeben werden, sonst ‘offline’
//  - Wenn isPremiumUser true ist, soll eine neue Variable monthlyFee (number) auf 19.99 gesetzt werden, ansonsten auf 12.99
//  - Wenn isAdult false ist soll ein window.alert ausgeben werden “Keine Berechtigung” ansonsten ein window.confirm “Willkommen”


let isOnline: boolean = Math.random() >= 0.5;
console.log({isOnline});
let isPremiumUser: boolean = Math.random() >= 0.5;
console.log({isPremiumUser});
let isAdult: boolean = Math.random() >= 0.5;
console.log({isAdult});

function online () {
    if (isOnline = true) {
        console.log("User is online");
    }
    else console.log("User is offline.");
}

function isPremiumUserFunction() {
    if(isPremiumUser = true) {
        let monthlyFee: number = 19.99;
        console.log({monthlyFee});
    }
    else {
        let monthlyFee: number = 12.99;
        console.log(monthlyFee);
    }
}

function isAdultFunction () {
    if (isAdult = true) {
        window.alert("Willkommen")
    }
    else {
        window.alert("Keine Berechtigung")
    }
}

online()
isPremiumUserFunction()
isAdultFunction()


// - Lass dir folgende Variablen mit zufälligen Werten befüllen
// - randomAge (zwischen 0 und 120)
// - randomSalary (zwischen 0 und 15000)
// - Folgende Logik soll über den Ternary Operator umgesetzt werden
// - Wenn randomAge zwischen 40 und 65 liegt soll eine neue Variable isMiddleAged auf true gesetzt werden ansonsten auf false → gib isMiddleAged auf der Konsole aus
//  - Wenn randomSalary > 10000 ist, soll auf der Konsole “You are rich” ausgeben werden, wenn
//     randomSalary > 1500 ist “Not too bad” ansonsten “Not that much”


let randomAge = Math.round(Math.random()*120)
let randomSalary = Math.round(Math.random()*15000)
console.log({randomAge, randomSalary});

function ternaryFunction () {
    let isMiddleAged: boolean;
    if (randomAge >= 40 && randomAge <= 65) {
        isMiddleAged = true;
        console.log({isMiddleAged});
    }
    else {
        isMiddleAged = false;
        console.log({isMiddleAged});
    }
}
ternaryFunction()

function ternaryFunctionSalary () {
    if (randomSalary > 10000) {
        console.log({randomSalary});
        console.log("You are rich");
    }
    else if (randomSalary > 1500) {
        console.log({randomSalary});
        console.log("Not too bad.");
    }
    else {
        console.log({randomSalary});
        console.log("Not that much");
    }
}
    ternaryFunctionSalary()