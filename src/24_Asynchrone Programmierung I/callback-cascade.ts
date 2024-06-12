// - Schreibe dort eine Funktion calculateSumAndMore
//     - Parameter 1: a: number
//     - Parameter 2: b: number
//     - Parameter 3: callback1: (result1: number) ⇒ number
//     - Parameter 4: callback2: (result2: number) ⇒ number
// - Zuerst wird die Summe von a + b ermittelt
// - Dann wird sie an die erste Callback-Funktion übergeben
// - Das Ergebnis der ersten Callback-Funktion wird an die zweite Callback-Funktion übergeben
// - Das Ergebnis der zweiten Callback-Funktion ist dann der Rückgabewert von calculateSumAndMore

export function calculateSumAndMore(
  a: number,
  b: number,
  callback1: (result: number) => number,
  callback2: (result: number) => number
) {
  const sum = a + b;
  const result = callback1(sum);
  const result2 = callback2(result);
  return result2;
}
