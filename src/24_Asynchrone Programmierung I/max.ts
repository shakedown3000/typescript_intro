// callback-TS-Level-1_4

// - Lege eine Datei max.ts an
// - Schreibe dort eine Funktion showMaximum
//     - Parameter 1: numbers: numbers[]
//     - Parameter 2: callback: (max: number) ⇒ number
// - Die Funktion ermittelt zuerst das Maximum der Zahlen aus dem numbers-Array und gibt es auf der Konsole aus
// - Dann übergibt sie den Max-Wert an die Callback-Funktion
// - Das Ergebnis der Callback-Funktion wird auf der Konsole ausgegeben
// - Danach wird auf der Konsole ausgegeben “Finished with showMaximum”
// - Schreibe eine weitere Funktion powerOfTen(number: number): number
//     - Parameter: number: number
//     - die Funktion soll die übergebene Zahl hoch 10 nehmen und auf der Konsole ausgeben
// - Rufe showMaximum mit einem Array von Zahlen und powerOfTen als Callback-Funktion auf

function showMaximum(
  numbers: number[],
  callback: (max: number) => number
): void {
  // Finde das Maximum im Array
  let max: number = Math.max(...numbers);
  console.log(`Maximum value: ${max}`);
  const callbackResult = callback(max);
  console.log(`Callback result: ${callbackResult}`);
  console.log("Finished with showMaximum");
}

function powerOfTen(number: number): number {
  let resultPowerOfTen = number ** 10;
  console.log(
    `The result of the number to the power of ten is: ${resultPowerOfTen}`
  );
  return resultPowerOfTen;
}
