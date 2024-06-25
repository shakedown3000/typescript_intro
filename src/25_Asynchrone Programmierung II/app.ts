// Promises-TS-Level-1_1

// Simulation des alten Spiels “Sie liebt mich, sie liebt mich nicht” 😉

// - Lege eine datei she-loves-me.ts an
// - Erstelle ein Promise vom Typ string
// - Lass dir mit Math.random einen zufälligen boolean-Wert generieren
// - Bei true  “She loves me.” resolved
// - Bei false “She loves me not.” resolved
// - Hänge dich an das Promise
// - Gib im then-Block das Ergebnis auf der Konsole aus
// - Gib im catch-Block das Ergebnis auf der Konsole aus
// - Gib im finally-Block “Now I know what is going on” aus

// let doesSheLoveme: Promise<string> = new Promise((resolve, reject) => {
//   let randomNumber = Math.random();
//   if (randomNumber >= 0.5) {
//     resolve("She loves me.");
//   } else {
//     reject("She loves me not.");
//   }
// });

// doesSheLoveme
//   .then((message: string) => {
//     // Ergebnis resolve
//     console.log(message);
//   })
//   .catch((error: string) => {
//     // Ergebnis reject
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("“Now I know what is going on”");
//   });


//   Promises-TS-Level-1_2

// - Lege eine Datei weather-type.ts an
// - Erstelle dort ein Enum WeatherType mit den Werten none = 0, sunny = 1, cloudy = 2, rainy = 3, snowy = 4, stormy = 5, windy = 6
// - Lege eine forecast.ts an
// - Erstelle ein Promise vom Typ WeatherType
// - Lass dir mit Math.random einen zufälligen Wert zwischen 0 und 9 generieren
// - Ist der Wert zwischen 0 und 6, gib mit resolve den zugeordneten Enum-Wert zurück
// - Ist der Wert > 6, rejecte das Promise mit einem Fehlertext “Weather forecast could not be determined”
// - Hänge dich an das Promise
// - Gib im then-Block das Ergebnis auf der Konsole aus
// - Gib im catch-Block den Fehler auf der Konsole aus

enum WeatherType {
    one = 0, 
    sunny = 1, 
    cloudy = 2, 
    rainy = 3, 
    snowy = 4, 
    stormy = 5, 
    windy = 6
};

const myWeatherType: Promise<string> = new Promise((resolve, reject) => {
    let randomNumber = Math.floor(Math.random()*10);
    if (randomNumber <= 6) {
        resolve("")
    }
    else reject ("Weathercast could not be determined");
})

// Promises-TS-Level-1_3

// - Lege eine Datei homework.ts an
// - Lege dort drei Promises vom Typ string an
// - Das erste Promise gibt nach 20 Sekunden “Exercise 1 done.” zurück
// - Das erste Promise gibt nach 30 Sekunden “Exercise 2 done.” zurück
// - Das erste Promise gibt nach 40 Sekunden “Exercise 3 done.” zurück
// - Lege eine homework.html an und verbinde sie mit homework.ts
// - Lege dort eine Überschrift “Doing my homework” an
// - Darunter soll ein Paragraph angeordnet sein - dort steht am Anfang “Starting…”
// - Wenn das erste Promise resolved wird, wird der entsprechende Text “Exercise 1 done.” im Paragraph angezeigt
// - Wenn das zweite und dritte Promise resolved wird, wird der entsprechende Text angehängt

let promise1: Promise<string> = new Promise((resolve, reject) => {
    resolve("Exersise 1 done");
    reject();
})
let promise2: Promise<string> = new Promise((resolve, reject) => {
    resolve("Exersise 2 done");
    reject();
})
let promise3: Promise<string> = new Promise((resolve, reject) => {
    resolve("Exersise 3 done");
    reject();
});

