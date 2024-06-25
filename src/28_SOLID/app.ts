// OOP-SOLID-TS-Level-1_1

// - Erstelle eine Klasse FileHandler
// - Die Klasse hat drei Methoden
//     - readFromFile: string gibt den Text “Dateiinhalt” zurück
//     - writeToFile: string
//     - mit Parameter text: string
//     → schreibt den Text aus dem Parameter auf die Konsole
//     - getFileInfo: string
//     → schreibt den Text “Dateigröße, Dateiendung” auf die Konsole
// - Analysiere die Klasse und identifiziere die Verantwortlichkeiten
// - Teile die Funktionalität der Klasse so auf, dass jede Klasse nur eine Verantwortlichkeit hat
// - Achte dabei auf gute Klassennamen

// class FileHandler {
//     readFromFile(): string {
//         return "Dateiinhalt";
//     }

//     writeToFile(text: string): void {
//         console.log(text);
//     }

//     getFileInfo(): string {
//         console.log("Dateigröße, Dateiendung");
//         return "Dateigröße, Dateiendung";
//     }
// }

class FileReader1 {
  readFromFile(): string {
    return "Dateiinhalt";
  }
}

class FileWriter {
  writeToFile(text: string): void {
    console.log(text);
  }
}

class FileInfo {
  getFileInfo(): string {
    const info = "Dateigröße, Dateiendung";
    console.log(info);
    return info;
  }
}

const fileReader1 = new FileReader1();
const fileReaderTest = fileReader1.readFromFile();
console.log(fileReaderTest);

const fileWriter = new FileWriter();
fileWriter.writeToFile("Neuer Text");

const fileInfo = new FileInfo();
const info = fileInfo.getFileInfo();

// OOP-SOLID-TS-Level-2_1

interface IceCream {
  getDescription(): string;
  getPrice(): number;
}

// man kann in jedem neu angelegten Objekt die getDescription anpassen und den Preis
class VanillaIceCream implements IceCream {
  getDescription(): string {
    return "Ich bin eine Vanille-Eiskugel.";
  }

  getPrice(): number {
    return 2.2;
  }
}

class ChocolateIceCream implements IceCream {
  getDescription(): string {
    return "Ich bin eine Schokoladen-Eiskugel.";
  }

  getPrice(): number {
    return 2.5;
  }
}

class RasperryIceCream implements IceCream {
  getDescription(): string {
    return "Ich bin eine Himbeer-Eiskugel.";
  }

  getPrice(): number {
    return 2.3;
  }
}

const vanillaIceCream = new VanillaIceCream();
console.log(vanillaIceCream.getDescription());
console.log(vanillaIceCream.getPrice());

// OOP-SOLID-TS-Level-2_2

// Lernziel: Interface Segregation Principle anwenden

// - Erstelle ein Interface IMediaPlayer
//     - fileName: string
//     - length: number
//     - playAudio(): void
//     - recordAudio(): void
//     - playVideo(): void
//     - recordVideo(): void
// - Analysiere das gegebene Interface MediaPlayer, das verschiedene Methoden für die Wiedergabe und Aufzeichnung von Audio- und Videodateien definiert.
// - Überlege, ob das Interface-Segregation-Prinzip in dieser Situation angewendet werden kann, um die Struktur des Interfaces zu verbessern.
// - Entwirf neue abgeleitete Interfaces, die spezifische Verantwortlichkeiten für die Audiowiedergabe, die Audioaufzeichnung, die Videowiedergabe und die Videoaufzeichnung definieren.
// - Implementiere neue Klassen, die von den abgeleiteten Interfaces erben und nur die entsprechenden Methoden implementieren.
// - Teste den überarbeiteten Code, um sicherzustellen, dass er ordnungsgemäß funktioniert und die Trennung der Interfaces verbessert wurde.

// alt
interface IMediaPlayer {
  fileName: string;
  length: number;
  playAudio(): void;
  recordAudio(): void;
  playVideo(): void;
  recordVideo(): void;
}

// neu nur für Methode

interface IAudioPlayer {
  playAudio(): void;
}

interface IAudioRecorder {
  recordAudio(): void;
}

interface IVideoPlayer {
  playVideo(): void;
}

interface IVideoRecorder {
  recordVideo(): void;
}

interface IMediaFile {
  fileName: string;
  length: number;
}

//   Implementiere neue Klassen
// übernehmen einmal Datei für alle und pro klasse dann noch einmal die jeweiligen Methoden
// Audio

class AudioPlayer implements IMediaFile, IAudioPlayer {
  fileName: string;
  length: number;

  constructor(fileName: string, length: number) {
    this.fileName = fileName;
    this.length = length;
  }

  playAudio(): void {
    console.log(`Spiele Audiodatei: ${this.fileName}`);
  }
}

class AudioRecorder implements IMediaFile, IAudioRecorder {
  fileName: string;
  length: number;

  constructor(fileName: string, length: number) {
    this.fileName = fileName;
    this.length = length;
  }

  recordAudio(): void {
    console.log(`Nehme Audiodatei auf: ${this.fileName}`);
  }
}

// Video

class VideoPlayer implements IMediaFile, IVideoPlayer {
  fileName: string;
  length: number;

  constructor(fileName: string, length: number) {
    this.fileName = fileName;
    this.length = length;
  }

  playVideo(): void {
    console.log(`Spiele Videodatei: ${this.fileName}`);
  }
}

class VideoRecorder implements IMediaFile, IVideoRecorder {
  fileName: string;
  length: number;

  constructor(fileName: string, length: number) {
    this.fileName = fileName;
    this.length = length;
  }

  recordVideo(): void {
    console.log(`Nehme Videodatei auf: ${this.fileName}`);
  }
}

//   OOP-DesignPatterns-TS-Level-3_1

// Fabrikklasse für das Erstellen von Objekten

// - Definiere ein Interface ICoffee mit den Eigenschaften name und size und Methoden wie brew() und getPrice(), das die Zubereitung verschiedener Kaffeesorten repräsentiert, z.B. Espresso, Americano, Latte usw.

interface ICoffe {
  name: string;
  size: string;
  brew(): void;
  getprice(): number;
}

// - Erstelle konkrete Klassen, die das Coffee-Interface implementieren, wie z.B. Espresso, Americano, Latte usw.

class Espresso implements ICoffe {
  name: string;
  size: string;

  constructor(size: string) {
    this.name = "Espresso";
    this.size = size;
  }
  brew(): void {
    console.log(`Brewing an ${this.name} in size ${this.size}`);
  }
  getprice() {
    return 2.0;
  }
}

class Americano implements ICoffe {
  name: string;
  size: string;

  constructor(size: string) {
    this.name = "Americano";
    this.size = size;
  }

  brew(): void {
    console.log(`I am brewing an ${this.name} in size ${this.size}`);
  }
  getprice(): number {
    return 3.5;
  }
}
// - Jede dieser Klassen sollte die brew()-Methode entsprechend ihrer Kaffeesorte implementieren.

// - Entwickle eine Factory-Klasse namens CoffeeShopFactory, die es ermöglicht, ein bestimmtes Kaffeegetränk anhand eines festgelegten Typs zu erstellen.

// kreiiert neue Klassen
class CoffeeShopFactory {
  static createCoffee(type: string, size: string): ICoffe {
    switch (type) {
      case "Espresso":
        return new Espresso(size);
      case "Americano":
        return new Americano(size);
      default:
        throw new Error("Unknown coffee type");
    }
  }
}

// - Die CoffeeShopFactory sollte Methoden wie createEspresso(size), createAmericano(size), createLatte(size) usw. bereitstellen, die je nach übergebenem Typ eine entsprechende Instanz des gewünschten Kaffeegetränks zurückgeben.
// - Verwende das Factory-Pattern, um Kunden die Bestellung verschiedener Kaffeegetränke zu ermöglichen, ohne dass sie sich um die Details der Kaffeezubereitung kümmern müssen.

const espressoOrder = CoffeeShopFactory.createCoffee("Espresso", "small");
espressoOrder.brew();
console.log(`Price: $${espressoOrder.getPrice()}`);
const americanoOrder = CoffeeShopFactory.createCoffee("Latte", "large");
americanoOrder.brew();
console.log(`Price: $${americanoOrder.getPrice()}`);

// - Teste das Factory-Pattern, indem du verschiedene Kaffeegetränke bestellst und sicherstellst, dass die richtige Kaffee-Implementierung verwendet wird.
