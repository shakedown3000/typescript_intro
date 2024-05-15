// / Objekte-TS-Level-1_3

// - Im vorgegebenen Code findest du einen type Apple, drei Objekte vom Typ Apple und ein Array mit allen Äpfeln

type Apple = {
    color: string;
    size: string;
    isSweet: boolean;
  };
  
let redApple: Apple = { color: 'red', size: 'big', isSweet: true };
let greenApple: Apple = { color: 'green', size: 'small', isSweet: false };
let yellowApple: Apple = { color: 'yellow', size: 'big', isSweet: true};

let apples: Apple[] = [redApple, greenApple, yellowApple];

// - Nutze eine for-Schleife, die das Array von Äpfeln durchgeht und nur die Größen aller Äpfeln in der Konsole ausgibt.

for (let index = 0; index < apples.length; index++) {
    console.log(apples[index].size); // big small big
}

// - Nutze forEach, um die Farbe jedes Apfels auf der Konsole auszugeben

apples.forEach((apple) => { // apple ist hier ein Platzhalter (aktueller Apfel der in for each bearbeitet wird), dh dann für aktuellen Apfel die color ausgeben
    console.log(apple.color); // Callback Funktion?
  });

// - Verwende den Befehl length, um die Anzahl der Äpfel auszugeben

// console.log(apples.length); 

// man kann die length eines Objektes nicht ausgeben

// - Erstelle selbst ein Objekt pinkApple vom Typ Apple und pushe es in das apples-Array

let pinkApple: Apple = { color: 'pink', size: 'medium', isSweet: true}

// Das neue Apple-Objekt dem Array hinzufügen
apples.push(pinkApple);

// Überprüfen, ob das Objekt hinzugefügt wurde
console.log(apples);

// - Füge eine neue Eigenschaft isSweet vom Typ boolean zum Typ Apple hinzu

// Muss man manuell machen ??

// - Schau dir die Fehlermeldungen an und füge bei jedem Apple-Objekt die Eigenschaft isSweet hinzu

// Objekte-TS-Level-1_4


type Pet = {
    tiertyp: string;
    namen: string[];
};

let unsereHaustiere: Pet[] = [
    {
        tiertyp: 'Katze',
        namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
        tiertyp: 'Hunde',
        namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    }
];

//   Greife auf die Werte "Nala" und "Droopy" in diesem Array von Objekten zu und lasse sie dir auf der Konsole ausgeben.
console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[0].namen[2]);

// - Lasse dir einmal alle Hundenamen anzeigen.
console.log(unsereHaustiere[1].namen);

// - Ändere folgende Werte:
//     - Droopy in Snoppy
//     - Dinky in Pinky

unsereHaustiere[0].namen[2] = 'Pinky'
unsereHaustiere[1].namen[2] = 'Snoopy'
console.log(unsereHaustiere);

// - Erstelle ein weiteres Objekt vom Typ Pet, z. B. Hamster
// - Füge das Objekt im Array hinzu

let hamster: Pet = {
    tiertyp: 'Hamster',
    namen: ['Hamsti', 'Else', 'Lenny']
}
unsereHaustiere.push(hamster)
console.log(unsereHaustiere);

// Objekte-TS-Level-1_5

// - Verwende den vorgegebenen Code: den Typ Lager und ein Objekt vom Typ Lager

type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "Obere Schublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

let unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

// - Greife auf die Eigenschaften des Objekts zu und gib folgende Werte in der Konsole aus:
//     - Geheimnisse
//     - Cola
//     - Hefter

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

// Objekte-TS-Level-1_6

type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
  };
  
  let meineTopVier: Musik[] = [
    {
      kunstler: 'The Beatles',
      title: 'Abbey Road',
      release_jahr: 1969,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      kunstler: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_jahr: 1978,
      formate: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_jahr: 1971,
      formate: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_jahr: 1983,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];

// - Greife auf folgende Werte dieses Objekts zu und lasse sie dir auf der Konsole ausgeben:
// - "The Beatles"
console.log(meineTopVier[0].kunstler);

// - aus dem Objekt Pink Floyd: "Download"
console.log(meineTopVier[1].formate[3]);

// - aus dem Objekt Pink Floyd: true
console.log(meineTopVier[1].gold);
// - die Releasejahre: 1971 und 1983
console.log(meineTopVier[2].release_jahr, meineTopVier[3].release_jahr);
// - Von Metallica: "MC"
console.log(meineTopVier[3].formate[2]);
// - aus dem Objekt  Metallica das Wort: "Ride"
console.log(meineTopVier[3].title);
let myString = meineTopVier[3].title
// Ich splitte den String in mehrere Teile, um dann später find funktion zu verwenden
let ride = myString.split(' ')
// Anwenden der Find Funktion
let rideSearch = ride.find(word => word === 'Ride');
console.log(rideSearch);

// - Lege ein neues Objekt vom Typ Musik an und füge es zum Array hinzu.

let britney = {
    kunstler: 'Britney Spears',
    title: 'Oops! … I Did It Again',
    release_jahr: 2000,
    formate: ['CD', 'LP', 'MC', 'MD'],
    gold: true, 
} 

meineTopVier.push(britney);

console.log(meineTopVier);

// Objekte-TS-Level-2_2

// - Du hast Sammlungen deiner Lieblingsbands. Du möchtest sie alphabetisch sortieren.

type PeriodActive = {
    start: number;
    end: number | string;
    extra?: number;
};

type Singer = {
    name: string;
    country: string;
    period_active: PeriodActive;
    genre: string;
};

const singers: Singer[] = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];
// - Sortiere die Bands aus dem Code-Snippet alphabetisch nach Namen.

singers.sort((a, b) => a.name.localeCompare(b.name));  // local compare bei Strings!!

console.log(singers); // Elton John als erstes

// - Sortiere anschließend die Bands aufsteigend nach dem Karrierebeginn (period_active.start).

// bei numbers einfach abziehen, kein local compare

singers.sort((a, b) => a.period_active.start - (b.period_active.start))
console.log(singers);

// - Gib das Ergebnis in der Konsole aus.
