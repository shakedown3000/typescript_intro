// Tuple-TS-Level-1_1

// - Erstelle ein Tuple names starWarsActor vom Typ string, string
// - die beiden Werte sind “Luke Skywalker”, “Mark Hamill”
// - Erstelle jetzt ein Array von diesen Tupeln, das mehrere StarWars-Schauspieler:innen enthält

const starWarsActor: [string, string] = ["Luke Skywalker", "Mark Hamill"]
console.log(starWarsActor);

const starWarsActors: [string, string][] = [
["Darth Vader", "James Earl Jones"],
["Yoda", "Frank Oz"],
["Han Solo", "Harrison Ford"],
["Princess Leia", "Carrie Fisher"]
];

// Lass dir in einer Schleife den Inhalt auf der Konsole ausgeben, z. B. “Mark Hamill spielt Luke Skywalker” etc.

for (let index = 0; index < starWarsActors.length; index++) {
    console.log(`${starWarsActors[index][1]} spielt ${starWarsActors[index][0]}`) 
};

// Tuple-TS-Level-2_1

// - Wir wollen eine Mitarbeitendenverwaltung auf Basis eines Arrays erstellen
// - Erstelle eine Datei employee.ts
// - Dabei wollen wir im Array den Datentyp Tuple verwenden

type Employee = [number, string, string, number];

// - Ein Tuple, das einen Mitarbeitenden repräsentiert besteht aus Nummer (number), Name (string), Abteilung (string) und Jahresgehalt (number)
// - Erstelle jetzt ein Array von diesen Tupeln, das mindestens 5 Mitarbeitende mit beliebigen Daten enthält
// - Lass dir alle Mitarbeitenden mit ihren Daten auf der Konsole ausgeben

const employees: Employee [] = [
    [1, "Hans Dieter", "Personal", 52246],
    [2, "Simone Schmidt", "Buchhaltung", 42458],
    [3, "Robert Schuster", "Recht", 75450],
    [4, "Norbert Rose", "Geschäftsführung", 150789],
    [5, "Bettina Bäcker", "IT", 64288],
]

for(const employee of employees) {
console.log(`ID: ${employee[0]}, Name: ${employee[1]}, Abteilung: ${employee[2]}, Jahresgehalt: ${employee[3]},`);
}

// Alternativ langer for loop:
// for (let i = 0; i < employees.length; i++) {
//     const employee = employees[i];
//     console.log(object);
// }

// Enum-TS-Level-1_1

// - Definiere ein Enum Weekday mit den Wochentagen Monday bis Sunday
// - Erstelle eine Datei days-months.ts
// - Lass dir dort die Werte für Monday bis Sunday auf der Konsole ausgeben
// - Definiere ein Enum Month mit den Monaten January bis December
// - Lass dir alle Werte auf der Konsole ausgeben

enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

for (let day in Weekday) {
      console.log(`${day}: ${Weekday[day]}`);
    }

    // Enum-TS-Level-1_2

// - Definiere ein Enum PizzaSize mit den Größen Small, Medium, Large, Familie
// - Definiere ein weiteres Enum PizzaIngredients mit Werten wie Cheese, Onion, Salami - werde selbst kreativ und denke dir weitere Zutaten aus
// - Lege eine Typ Pizza mit den Eigenschaften size: PizzaSize und ingredients: PizzaIngredients[] an
// - Lege 4 Pizza-Objekte mit verschiedenen Größen und Belägen an

enum PizzaSize {
    Small, 
    Medium, 
    Large, 
    Familie
};

enum PizzaIngredients {
    Cheese, Onion, Spinach, Artichokes, Olives, Basil, Bellpepper
};

type Pizza = {size: PizzaSize, ingredients: PizzaIngredients[]}

let margaritha: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Basil]
};

let vegetaria: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Basil, PizzaIngredients.Artichokes, PizzaIngredients.Bellpepper]
};


// Enum-TS-Level-2_1

// - Das Enum soll sowohl den Fehlernamen als auch den Zahlenwert enthalten
// - Schreibe eine Funktion showHtmlError()
// - Lass dir in der Funktion mit Math.random zufällige Zahlen zwischen 1 - 5 generieren
// - ist der Wert 0, 1 oder 2 gibt den HtmlError.OK aus
// - ist der Wert 3 gibt HtmlError.Redirect aus
// - ist der Wert 4 gib HtmlError.BadRequest aus
// - ist der Wert 5 gibt HtmlError.InternalServerError aus

enum HTMLError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
}

function showHtmlError() {
    let randomNumber = Math.ceil(Math.random()*5);
    console.log(randomNumber);
    if (randomNumber <= 2) {
        console.log(HTMLError.OK);
    }
    if (randomNumber === 3) {
        console.log(HTMLError.Redirect);
    }
    if (randomNumber === 4) {
    console.log(HTMLError.BadRequest);
    }
    else {
        console.log(HTMLError.InternalServerError);
    }
}

showHtmlError();


// Enum-TS-Level-2_2

// - Du sollst eine Farbauswahl mit Hilfe von Buttons in einem Online-Shop erstellen
// ? - Definiere ein Enum ClothingColor mit dem Farbnamen und der Entsprechung in Hex-Werten
// - Es gibt diese Farben: Gelb, Orange, Pink, Blau, Lila, und Grau
// ? - Suche dir im Internet passende Farbwerte (Hex-Werte) für Gelb, Orange, Pink, Blau, Lila und Grau (z. B. Gelb = #FFFF00)

// - Lege dir ein Array mit allen Farben an: allColors: Color[]

// - Gehe in einer Schleife das Array durch und erstelle Buttons mit der jeweiligen Farbe als Hintergrundfarbe

// enum ClothingColor {
//     #FFFF00,
//     #FF8C00,
//     #FF1493,
//     #27408B,
//     #6a5acd
//     #adadad,
// }

// type Color = [string, string, string, string, string, string,];

// const allColors: Color[] = [    
//     "gelb", 
//     "orange", 
//     "pink", 
//     "blau", 
//     "lila", 
//     "grau",
// ],


