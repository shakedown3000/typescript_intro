// OOP-TypeCast-Level-1_1

// - Lege eine neue Datei student.ts an
// - Erstelle ein interface IStudent mit den Eigenschaften
//     - name: string
//     - age: number
//     - grade: number
// - Lege eine neue Datei app.ts an

// - Schreibe dort eine Funktion processStudent(student: IStudent) an
// - Die Funktion gibt “Processing [student.name] …” auf der Konsole aus

// - Lege ein Objekt student1 mit den Eigenschaften name und age an
// - Wandle das Objekt mit as in IStudent um
// - Übergebe das Objekt an die Funktion processStudent
// - Lege ein zweites Objekt student2 mit der Eigenschaft age an
// - Wandle das Objekt in einen IStudent um
// - Übergebe das Objekt an die Funktion processStudent
// - Schreibe in einen Code-Kommentar was im zweiten Fall angezeigt/ausgegeben wird

function processStudent(student: IStudent): void {
  console.log(`Processing ${student.name} ...`);
}

const student1 = {
  name: "Anna",
  age: 34,
};

const student1Converted = {
  ...student1,
  grade: 0,
} as IStudent;

processStudent(student1Converted);

const student2 = {
  age: 33,
};

const student2Converted = {
  ...student2,
  name: "Unknown",
  grade: 0,
} as IStudent;

processStudent(student2Converted); // Ausgabe: Processing Unknown ...

// OOP-UnionType-Level-1_1

// - Erstelle einen Union Type namens Result mit den Werten "success", "error" und "pending"
// - Definiere eine Variable vom Typ Result und weise ihr einen der Werte zu.
// - Schreibe eine Funktion handleResult, die einen Parameter vom Typ Result akzeptiert.
// - Implementiere handleResult so, dass sie je nach übergebenem Wert eine entsprechende Meldung ausgibt.
// - Teste die Funktion, indem du verschiedene Werte an sie übergibst.

type Result = "success" | "error" | "pending";

let currentResult: Result = "success";

function handleResult(result: Result): void {
  switch (result) {
    case "success":
      console.log("Operation was successful.");
      break;
    case "error":
      console.log("There was an error with the operation.");
      break;
    case "pending":
      console.log("The operation is still pending.");
      break;
    default:
      console.log("Unknown status.");
      break;
  }
}

handleResult(currentResult);

currentResult = "error";
handleResult(currentResult);

currentResult = "pending";
handleResult(currentResult);

// OOP-IntersectionType-Level-1_1

// - Lege eine Datei an: alcohol.ts
// - Erstelle dort zwei Types, Alcohol und Mixer, die jeweils Eigenschaften für alkoholische Getränke und Mischgetränke definieren.
// - Alcohol hat die Eigenschaften: name, percentage und type
// - Mixer hat die Eigenschaften: name, type und carbonated
// - Lege anschließend einen Intersection-Typ namens Cocktail an, der sowohl die Eigenschaften von Alcohol als auch von Mixer enthält.
// - Erstelle ein Objekt vom Typ Cocktail und weise ihm entsprechende Eigenschaften zu.
// - Gib die Eigenschaften des Cocktails auf der Konsole aus, um sicherzustellen, dass der Typ korrekt erstellt wurde.

// TS-ErrorHandling-Level-1_1

// - Lege eine Datei an: user-input.ts
// - Schreibe eine Funktion greetUser, die einen Benutzernamen vom Benutzer über ein Window-Prompt abfragt.
// - Verwende einen try-catch-Block, um Fehler beim Abrufen des Benutzernamens abzufangen.
// - Wenn der Benutzer einen Namen eingibt, gib eine personalisierte Begrüßung aus, die den Namen des Benutzers verwendet.
// - Wenn ein Fehler auftritt (z. B. wenn der Benutzer den Dialog schließt), gib eine Standardbegrüßung aus.

function greetUser(): void {
  try {
    const username = prompt("Bitte gib deinen Namen ein:");
    // Wenn der Benutzer abbricht oder keinen Namen eingibt, wird eine Fehlermeldung erzeugt
    if (!username) {
      throw new Error("No username provided");
    }
    alert(`Hallo, ${username}! Willkommen zurück.`);
  } catch (error) {
    console.log("Ein Fehler ist aufgetreten:", error.message);
    alert("Willkommen zurück!");
  }
}

greetUser();

// TS-ErrorHandling-Level-2_1

// - Lege eine Datei an: lotto-numbers.ts
// - Schreibe eine Funktion generateLottoNumber, die eine Lottozahl generiert.
// - generiere dort eine Zufallszahl zwischen 1 und 100 mit Math.random().
// - Wenn die random erstellte Zahl größer als 49 ist, soll ein Fehler ausgelöst werden.
// - Ansonsten wird die Zahl als Rückgabewert zurückgegeben
// - Rufe in einer Schleife so oft generateLottoNumber auf, bis du 7 gültige Zahlen erhältst
// - Verwende einen try-catch-Block, um Fehler abzufangen und zu behandeln.
// Schreib die generierte Lottozahl in ein Array lottoResults: number[], wenn kein Fehler aufgetreten ist.
// - Es dürfen keine doppelten Zahlen in lottoResults aufgenommen werden
// - Lass dir am Ende die Lottozahlenreihe auf der Konsole ausgeben
