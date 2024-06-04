import Alien from "./alien";
import Song from "./song";
import SongWithUnknownArtist from "./songwithunknownartist";
import Beverage from "./beverage";
import { Coffee, CoffeeType } from "./coffee";
import { Tea, TeaFlavor } from "./tea";
import Vocabulary from "./vocabulary";
import SpanishVocabulary from "./spanish-vocabulary";

// OOP-Class-TS-Level-1_4

// - Erstelle eine Datei alien.ts
// - Deklariere eine Klasse Alien
// - Der Konstruktor soll die Parameter name und color haben
// - Lege vier Eigenschaften an:
// - name (string)
// - planet (string)
// - galaxy (string)
// - color (string)
// - name, planet und galaxy sollen public sein
// - color soll private sein
// - Schreibe für color einen Getter
// - Erstelle eine Datei app.ts
// - Lege dort 3 Alien-Arten an und setze alle Eigenschaften

const et = new Alien("E.T.", "braun", "Brodo Asogi", "Unbekannt");
const yoda = new Alien("Yoda", "grün", "Dagobah", "Unbekannt");
const xenomorph = new Alien("Xenomorph", "schwarz", "LV-426", "Unbekannt");

// OOP-Class-TS-Level-1_5

// - Erstelle eine Datei Song.ts
// - Deklariere eine Klasse Song
// - Lege drei Eigenschaften an:
// - private title (string)
// - protected artist (string)
// - public durationInSeconds (number)
// - Die Eigenschaften title und artist sollen über einen Konstruktorparameter beim Anlegen gesetzt werden

// - Erstelle eine Datei app.ts
// - Lege dort 2 Instanzen der Klasse Song an
// - Setze jeweils eine durationInSeconds

const song1 = new Song("...Baby One More Time", "Britney Spears");
song1.durationInSeconds = 100;

const song2 = new Song("Toxic", "Britney Spears");
song2.durationInSeconds = 200;

// - Erstelle eine Klasse SongWithUnknownArtist
// - Diese Klasse soll von der Klasse Song ableiten
// - Der Konstruktor soll nur den Parameter title haben
// - Im Konstruktor soll der Konstruktor der Basis-Klasse Song aufgerufen werden
// - als zweiter Parameter wird immer “Unknown” gesetzt
// - Schreibe eine Methode setArtist() mit einem Parameter name vom Datentyp string
// - In der Methode soll die Eigenschaft artist gesetzt werden
// - Lege in der Datei app.ts eine Instanz der Klasse SongWithUnknownArtist an
// - Setze nachträglich über die entsprechende Methode einen Wert für artist

const unknownArtistSong1 = new SongWithUnknownArtist("Track One");
unknownArtistSong1.durationInSeconds = 200;

const unknownArtistSong2 = new SongWithUnknownArtist("Track 2");
unknownArtistSong2.durationInSeconds = 200;

unknownArtistSong1.setArtist("Ben Benson");
unknownArtistSong2.setArtist("Anne Anneson");

// OOP-Class-TS-Level-1_10

// - Erstelle eine neue Klasse Beverage in einer Datei beverage.ts
// - Die Klasse hat die Eigenschaften name (string) und price (number)
// - Leite eine neue Klasse Coffee davon ab (coffee.ts)
// - Die Klasse hat die zusätzliche Eigenschaft type vom Datentyp Enum
// → Werte sind: Espresso, Latte, Cappuccino und Americano

const latte = new Coffee("Latte", 3.5, CoffeeType.Latte);
console.log(latte.name); // "Latte"
console.log(latte.price); // 3.5
console.log(latte.type);

// - Erstelle eine weitere abgeleitete Klasse Tea
// - Füge eine Eigenschaft flavor vom Datentyp Enum hinzu
// → Werte sind: Green, Black, Chai, Peppermint
// - Erstelle eine Datei app.ts
// - Lege dort verschiedene Instanzen von Beverage, Coffee und Tea an

const beverage = new Beverage("Water", 1.0);
const coffee = new Coffee("Latte", 3.5, CoffeeType.Latte);
const tea = new Tea("Green Tea", 2.0, TeaFlavor.Green);

// OOP-Class-TS-Level-2_5

// - Erstelle eine Datei vocabulary.ts
// - Deklariere eine Klasse Vocabulary
// - Lege eine private Eigenschaft an:
// - words (string-Array)
// - Die Eigenschaft soll beim Anlegen der Klasse mit einem leeren Array initialisiert werden
// - Lege eine protected Eigenschaft language (string) an, die im Konstruktor auf den Wert “English” gesetzt wird
// - Erstelle eine Methode names addWord, die public ist
// - die Methode hat einen Parameter names word vom Typ string

//  - prüfe, ob das Wort mindestens einen Buchstaben enthält und noch nicht im Array words enthalten ist
//     - dann wird in der Methode das übergebene Wort zum Array hinzugefügt

// - Erstelle eine Methode displayAll(), die public ist
// - die Methode gibt zuerst die language auf der Konsole aus
// - anschließend werden alle Wörter im Array - mit Komma getrennt - ausgegeben

// - Erstelle eine Datei app.ts
// - Lege dort eine Instanz der Klasse Vocabulary an
// - Füge einige Wörter über addWord hinzu
// (teste auch die Fehlerfälle)
// - Lass dir den Inhalt über displayAll ausgeben

const vocab = new Vocabulary();
vocab.addWord("hello");
vocab.addWord("world");
vocab.displayAll();

// - Erstelle eine Datei spanish-vocabulary.ts
// - Deklariere eine Klasse SpanishVocabulary
// - Die Klasse soll von der Klasse Vocabulary ableiten
// - Im Konstruktor wird der Wert von language auf “Spanish” gesetzt

// - Lege  eine Instanz der Klasse SpanishVocabulary an
// - Füge einige Wörter mit addWord hinzu
// (teste auch die Fehlerfälle)
// - Lass dir den Inhalt über displayAll ausgeben

const spanishVocab = new SpanishVocabulary();
spanishVocab.addWord("hola");
spanishVocab.addWord("mundo");
spanishVocab.displayAll();
