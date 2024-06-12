// callback-TS-Level-1_1

// - Lege eine Datei add-numbers.ts an
// - Erstelle eine Funktion addNumbers mit drei Parametern
//     - a: number
//     - b: number
//     - callback: (sum: number) ⇒ void
// - in der Funktion addNumbers wird das Ergebnis von a + b an die Callback-Funktion übergeben
// - Rufe addNumbers mit zwei Zahlen auf
// - In der Callback-Function soll nur console.log mit der Summe aufgerufen werden
// → entscheide selbst ob du dafür eine extra Funktion anlegst oder es direkt in der Arrow-Schreibweise umsetzt

function addNumbers(
  a: number,
  b: number,
  callback: (sum: number) => void
): void {
  let addBothNumbers = a + b;
  callback(addBothNumbers);
}

// Callback Funktion
function sumOfTwoNumbers(sum: number): void {
  console.log(`My sum: ${sum}.`);
}

addNumbers(1, 2, sumOfTwoNumbers);
addNumbers(4, 8, sumOfTwoNumbers);

// callback-TS-Level-1_2

// - Schreibe ein Funktion showAlert(sum: number)
// - Die Funktion öffnet ein Alert-Window und zeigt dort das Ergebnis an
// - Übergib showAlert als Callback-Funktion an addNumbers

function showAlert(sum: number): void {
  alert(`Your sum is: ${sum}.`);
}

// addNumbers(2, 4, showAlert);

// callback-TS-Level-1_4

// import { showMaximum, powerOfTen } from "./max.ts";

let ourArray: number[] = [10, 20, 30];
// showMaximum(ourArray, powerOfTen);

// callback-TS-Level-2_1

// - Lege eine Datei callback-cascade.ts an
// - Schreibe dort eine Funktion calculateSumAndMore
//     - Parameter 1: a: number
//     - Parameter 2: b: number
//     - Parameter 3: callback1: (result1: number) ⇒ number
//     - Parameter 4: callback2: (result2: number) ⇒ number
// - Zuerst wird die Summe von a + b ermittelt
// - Dann wird sie an die erste Callback-Funktion übergeben
// - Das Ergebnis der ersten Callback-Funktion wird an die zweite Callback-Funktion übergeben
// - Das Ergebnis der zweiten Callback-Funktion ist dann der Rückgabewert von calculateSumAndMore

// import { calculateSumAndMore } from "./callback-cascade";

function calculateSumAndMore(
  a: number,
  b: number,
  callback1: (result: number) => number,
  callback2: (result: number) => string
) {
  const sum = a + b;
  const result = callback1(sum);
  const result2 = callback2(result);
  return result2;
}

function callBackOne(sum: number): number {
  return sum * 2;
}
function callBackTwo(sumTimesTwo: number): string {
  return sumTimesTwo.toString(2);
}

// Rufe calculateSumAndMore auf und übergebe folgende Callback-Funktionen

let result1 = calculateSumAndMore(2, 4, callBackOne, callBackTwo);
console.log(result1);

let result2 = calculateSumAndMore(5, 7, callBackOne, callBackTwo);
console.log(result2);

let result3 = calculateSumAndMore(10, 20, callBackOne, callBackTwo);
console.log(result3);

// - Die erste Callback-Funktion soll die Summe von a und b verdoppeln zurückgeben
// - Die zweite CallbackFunktion soll dann das Ergebnis in eine Binärzahl umwandeln und zurückgeben (siehe https://www.geeksforgeeks.org/javascript-program-to-convert-a-number-to-binary/)

// - Rufe die Funktion mit mehreren Zahlen auf und lass dir das Ergebnis auf der Konsole ausgeben

// callback-TS-Level-3_2

// Zufallsgenerator für verschiedene Datentypen

// Es soll eine Anwendung erstellt werden, die in einem h1-Element entweder eine random Number, einen random String, ein random Boolean oder ein random Emoji zurückgibt, wenn man auf einen Button klickt

const h1Element = document.getElementById("h1") as HTMLElement;
const buttonElement = document.getElementById("button") as HTMLButtonElement;
buttonElement?.addEventListener("click", () => {
  updateHeadline(event, randomGenerator);
});

// - randomNumber: Generiert eine zufällige Zahl und gibt sie als string zurück.
function randomNumber(): string {
  let myRandomNumber100 = Math.floor(Math.random() * 100);
  return myRandomNumber100.toString();
}

// - randomText: Generiert einen zufälligen Text und gibt ihn zurück (mit 10 Buchstaben).
function randomText(): string {
  let characterResult = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 25; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    characterResult += characters.charAt(randomIndex); // Returns the character at the specified index.
  }
  return characterResult; // hier 10 Buchstaben
}

// - randomBoolean: Generiert einen zufälligen Wahrheitswert (true oder false) und gibt ihn als string zurück.
function randomBoolean(): string {
  let randomBooleanResult = Math.random();
  if (randomBooleanResult >= 0.5) {
    return "true";
  } else {
    return "false";
  }
}

// - randomEmoji: Gibt einen zufälligen Emoji zurück
function randomEmoji(): string {
  let emojiResult = "";
  let i = Math.floor(Math.random() * emojiArray.length);
  emojiResult = emojiArray[i];
  return emojiResult;
}

let emojiArray: string[] = [
  "✌",
  "😂",
  "😝",
  "😁",
  "😱",
  "👉",
  "🙌",
  "🍻",
  "🔥",
  "🌈",
  "☀",
  "🎈",
  "🌹",
  "💄",
  "🎀",
  "⚽",
  "🎾",
  "🏁",
  "😡",
  "👿",
  "🐻",
  "🐶",
  "🐬",
  "🐟",
  "🍀",
  "👀",
  "🚗",
  "🍎",
  "💝",
  "💙",
  "👌",
  "❤",
  "😍",
  "😉",
  "😓",
  "😳",
  "💪",
  "💩",
  "🍸",
  "🔑",
  "💖",
  "🌟",
  "🎉",
  "🌺",
  "🎶",
  "👠",
  "🏈",
  "⚾",
  "🏆",
  "👽",
  "💀",
  "🐵",
  "🐮",
  "🐩",
  "🐎",
  "💣",
  "👃",
  "👂",
  "🍓",
  "💘",
  "💜",
  "👊",
  "💋",
  "😘",
  "😜",
  "😵",
  "🙏",
  "👋",
  "🚽",
  "💃",
  "💎",
  "🚀",
  "🌙",
  "🎁",
  "⛄",
  "🌊",
  "⛵",
  "🏀",
  "🎱",
  "💰",
  "👶",
  "👸",
  "🐰",
  "🐷",
  "🐍",
  "🐫",
  "🔫",
  "👄",
  "🚲",
  "🍉",
  "💛",
  "💚",
];

// - Definiere eine Funktion updateHeadline, die eine Callback-Funktion (Rückgabewert: string) als Parameter erhält und den Rückgabewert dieser Callback-Funktion in das h1-Element mit der ID "headline" schreibt.

function updateHeadline(event: Event, callback: () => string): void {
  event?.preventDefault();
  let resultOfCallBack: string = callback();
  if (h1Element) {
    h1Element.textContent = resultOfCallBack;
  }
}

// Array der Funktionen annimmt
const functionsArray: Array<(...args: any[]) => string> = [];
functionsArray.push(randomNumber);
functionsArray.push(randomText);
functionsArray.push(randomBoolean);
functionsArray.push(randomEmoji);

function randomGenerator(): string {
  const randomNumberByClick = Math.ceil(Math.random() * 4);
  let caseResult = "";
  console.log(randomNumberByClick);
  switch (randomNumberByClick) {
    case 1:
      caseResult = functionsArray[0]();
      break;
    case 2:
      caseResult = functionsArray[1]();
      break;
    case 3:
      caseResult = functionsArray[2]();
      break;
    case 4:
      caseResult = functionsArray[3]();
      break;
  }
  return caseResult;
}

// - Füge einen Event Listener für den Random-Button hinzu
// - dort soll nach dem Zufallsprinzip eine der zuvor definierten vier Funktionen ausgewählt und an die updateHeadline-Funktion übergeben werden
// - Teste die Anwendung ausführlich

// # 💡 Tipp

// - Nutze ein Array mit einigen Emojis
// - Um eine zufällige Funktion aus den 4 vorgegebenen Funktionen auszuwählen, kannst entweder mit Zufallszahlen und if arbeiten oder ein Array von Functions verwenden
