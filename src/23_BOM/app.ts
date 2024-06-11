// Bom-TS-Level-1_1

// - Schreibe eine Funktion, die nach x Sekunden einen Text anzeigt. Dafür kannst du die setTimeout()-Methode nutzen.

// let seconds: number = 5;

// let showTextAfterSeconds = window.setTimeout(() => {
//   console.log(`Die ${seconds} Sekunden sind um`);
// }, seconds * 1000);

// console.log(`Timer: ${showTextAfterSeconds}`);

// - Schreibe anschließend eine weitere Funktion, die genau das Ergebnis, das unten in der Vorschau angezeigt wird, ausgibt. Nutze hierfür:
// setInterval(), clearInterval() und if/else.

// function countDownFromTen() {
//   let startCountdown: number = 10;
//   console.log(`Warte für 3 Sekunden.`);

//   const interval = setInterval(() => {
//     if (startCountdown > 8) {
//       console.log(startCountdown);
//     } else if (startCountdown === 8) {
//       console.log(`Erledigt. Du hast 3 Sekunden verschwendet.`);
//     } else if (startCountdown >= 1 && startCountdown <= 8) {
//       console.log(startCountdown);
//     }
//     if (startCountdown === 1) {
//       console.log("Endlich Feierabend!");
//       clearInterval(interval);
//     }
//     startCountdown--;
//   }, 1000);
// }

// let testCountdown = countDownFromTen();
// console.log(testCountdown);

// Bom-TS-Level-1_2

// - Schreibe eine Function, die beim Klicken des Buttons von 100% bis 0% runterzählt.
// - Nutzen kannst du folgende Befehle und Methoden:  addEventListener, setInterval(), clearInterval(), if, else if und querySelector() oder getElementById().

const startButton = document.getElementById(
  "startCountdown"
) as HTMLButtonElement;
console.log(startButton);
const prozentAnzeige = document.querySelector(".prozent") as HTMLDivElement;
console.log(prozentAnzeige);

startButton?.addEventListener("click", countDownNow);

function countDownNow(): void {
  if (prozentAnzeige) {
    let startingNumber = 100;
    console.log(startingNumber);
    const interval = window.setInterval(() => {
      prozentAnzeige.textContent = `${startingNumber}%`;
      startingNumber--;

      if (startingNumber === 0) {
        clearInterval(interval);
      }
    }, 200);
  }
}

// Bom-TS-Level-1_3

// - Schreibe eine Function, die sich Daten aus dem Browser zieht und diese auf einer Seite anzeigt. Schaue dir zum besseren Verständnis die Vorschau an.
// - Schau dir dazu auch nochmal die Dokumentation von window.navigator an
// - Hole dir die Informationen über den Browser wie folgt:
//     - Browsername
//     - Betriebssystem-Architektur
//     - Browser-Version
//     - Window Auflösung
//     - Innenhöhe und -breite des Dokuments
//     - colorDepth
//     - pixelDepth

// NOT FINISHED

function getBrowserInfo(): string {
  const infoBrowser = document.getElementById("zeigmirdeinedaten");
  const browserName = navigator.userAgent;
  const osArch = navigator.platform;
  const browserVersion = navigator.appVersion;
  const windowResolution;
  const innerResolution;
  const colorDepth = window.screen.colorDepth;
  const pixelDepth = window.screen.pixelDepth;
}

// Bom-TS-Level-2_1

// - Schreibe eine Function, die beim Laden der Seite die Zahlen runter zählt. Schau dir dazu die Ergebnisvorschau an.
// - Nutzen kannst du:
//     - setInterval()
//     - clearInterval()
//     - getElementsByClassName() oder getElementById()
//     - if/else if.

let messageElement = document.querySelector(".message") as HTMLDivElement;

document.addEventListener("DOMContentLoaded", () => {
  let countFromTen = document.getElementById("count") as HTMLDivElement;
  console.log(countFromTen);
  function loadSiteStartCountDown() {
    if (countFromTen) {
      let startNumber: number = 10;
      const interval = setInterval(() => {
        countFromTen.textContent = `${startNumber.toString()}`;
        startNumber--;
        if (startNumber === 0) {
          countFromTen.textContent = "0";
          messageElement?.classList.add("hidden");
          clearInterval(interval);
        }
      }, 500);
    }
  }
  loadSiteStartCountDown();
});
