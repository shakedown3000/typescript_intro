
function generateLottoNumber(): number {
    // Generiere eine Zufallszahl zwischen 1 und 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Überprüfe, ob die Zufallszahl größer als 49 ist
    if (randomNumber > 49) {
        // Wenn ja, löse einen Fehler aus
        throw new Error("Lottozahl größer als 49.");
    }
    return randomNumber;
}

const lottoResults: number[] = [];

while (lottoResults.length < 7) {
try {
    const lottoNumber = generateLottoNumber();
    if (!lottoResults.includes(lottoNumber)) {
        lottoResults.push(lottoNumber)
    }
}
catch (error);
console.error("Fehler beim Generieren der Lottozahl:", error.message);

}
