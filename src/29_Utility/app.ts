// Utility-Types-TS-Level-1_1

// - Lege eine neue Datei book.ts an
// - Erstelle dort ein Interface IBook mit folgenden Eigenschaften
//     - author: string
//     - name: string
//     - publishingYear: string
//     - shortDescription?: string
//     - numberOfPages: number
// - Lege eine neue Datei an partial-book.ts an

// ? Erstelle dort einen neuen Type PartialBook basierend auf IBook
// - Lege eine Variable partialBook vom Typ PartialBook an und vergebe nur die Eigenschaften author und name
// - Lege dann ein neues Interface IPartialBook basierend auf IBook an

// Code-Beispiel
// interface IPartialPerson extends Partial<IPerson> {}

// - Lege eine Variable partialBook2 vom Typ IPartialBook an und vergeben nur die Eigenschaft name

interface IBook {
    author: string;
    name: string;
    publishingYear: string;
    shortDescription?: string;
    numberOfPages: number;
  }

  // Erstellt einen Type
type PartialBook = Partial<IBook>

const partialBook: PartialBook = {
    author: "Penelope Bridgerton",
    name: "Lady Whistledown"
};

// erstellt Interface und übernimmt alle Eigenschaften von IBook optional
interface IPartialBook extends Partial<IBook> {}

const partialBook2: IPartialBook = {
    name: "Krieg und Frieden"
};

// Utility-Types-TS-Level-1_2
// Omit
//  * ich will bestimmte Eigenschaften weglassen

// - Lege eine neue Datei an basic-book.ts an
// - Erstelle dort einen neuen Type BasicBook basierend auf IBook
// - BasicBook soll folgende Eigenschaften nicht haben
//     - publishingYear: string
//     - shortDescription: string

type BasicBook = Omit<IBook, 'publishingYear' | 'shortDescription'>;

// - Lege eine Variable basicBook vom Typ BasicBook an und vergebe nur die nötigen Eigenschaften

const basicBook: BasicBook = {
    author: "Theodor Fontane",
    name: "Effi Briest",
    numberOfPages: 347
}

// - Lege dann ein neues Interface IBasicBook basierend auf IBook an, bei dem ebenfalls publishingYear und shortDescription fehlen

interface IBasicBook extends Omit<IBook, 'publishingYear' | 'shortDescription'> {}
// - Lege eine Variable basicBook2 vom Typ IBasicBook an und vergebe nur die nötigen Eigenschaften

const basicBook2: IBasicBook = {
    author: "Gabriel García Márquez",
    name: "Cien años de soledad",
    numberOfPages: 528
}

// Utility-Types-TS-Level-1_3

// Pick<T, K>:

// Erstellt einen Typ, der nur eine Teilmenge von T enthält

// - Lege eine neue Datei an book-description.ts an
// - Erstelle dort einen neuen Type BookDescription basierend auf IBook
// - BasicBook soll folgende Eigenschaften von IBook übernehmen haben
//     - name: string
//     - shortDescription: string

// ? ich pick mir nur einige Eigenschaften raus

type BookDescription = Pick<IBook, 'name' | 'shortDescription'>

// - Lege eine Variable bookDescription vom Typ BookDescription an und vergebe nur die nötigen Eigenschaften
const bookDescription: BookDescription = {
    name: "Moby-Dick",
    shortDescription: "Das Buch erzählt die epische Geschichte von Kapitän Ahab und seiner Besessenheit, den weißen Wal Moby-Dick zu jagen."
}

// - Lege dann ein neues Interface IBookDescription basierend auf IBook an - ebenfalls name und shortDescription von IBook übernommen

interface IBookDescription extends Pick<IBook, "name"| "shortDescription"> {};

// - Lege eine Variable bookDescription2 vom Typ IBookDescription an und vergebe nur die nötigen Eigenschaften

const bookDescription2: IBookDescription = {
    name: "Die Buddenbrooks",
    shortDescription: "Der Roman wurde 1901 veröffentlicht und beschreibt den Niedergang einer wohlhabenden Lübecker Kaufmannsfamilie über mehrere Generationen."
};

// Utility-Types-TS-Level-1_5

type ReadOnlyBook = Readonly<IBook>;

const readonlyBook: ReadOnlyBook = {
    author: "F. Scott Fitzgerald",
    name: "Der große Gatsby",
    publishingYear: "1925",
    shortDescription: "Eine Geschichte über den mysteriösen Millionär Jay Gatsby und seine unerfüllte Liebe zu Daisy Buchanan.",
    numberOfPages: 218
  };

//   readonlyBook.author = "Ernest Hemingway";

  interface IReadOnlyBook extends Readonly<IBook> {}

  const readonlyBook2: IReadOnlyBook = {
    author: "George Orwell",
    name: "1984",
    publishingYear: "1949",
    shortDescription: "Ein dystopischer Roman über eine totalitäre Gesellschaft unter der Herrschaft des Großen Bruders.",
    numberOfPages: 328
  };

//   Utility-Types-TS-Level-1_6

// Lernziel: Anwendung von Exclude

// - Lege eine neue Datei an colors.ts an
// - Erstelle dort einen neuen Type BasicColors mit den möglichen Werten:
// RED, BLUE, GREEN, YELLOW, BLACK, WHITE

type BasicColors = 'RED' | 'BLUE' | 'GREEN' | 'YELLOW' | 'BLACK' | 'WHITE';

// - Erstelle einen weiteren Type RealColors auf Basis von BasicColors mit Exclude
// - Werte RED, BLUE, GREEN, YELLOW

type RealColors = Exclude<BasicColors, 'RED' | 'BLUE' | 'GREEN' | 'YELLOW'>;

// - Lege eine Funktion showColors mit einem Parameter vom Typ RealColors an
// - Gib dort die Farbe auf der Konsole aus

function showColors(color: RealColors) {
    console.log(`The selected color is: ${color}`);
}
// - Versuche ‘BLACK’ zu übergeben
// - Übergebe einen gültigen Wert

showColors('BLACK'); 
// showColors('RED');

// Utility-Types-TS-Level-2_1

// Lernziel: Anwendung von partial

// - Lege eine neue Datei tea.ts an
// - Erstelle dort ein Interface ITea mit folgenden Eigenschaften: name, type, temperature, brewingTime
interface ITea {
    name: string;
    type: string;
    temperature: number;
    brewingTime: number;
}

// Erstellt den Typ PartialTea, der alle Eigenschaften von ITea optional macht
type PartialTea = Partial<ITea>;

// - Schreibe eine Funktion prepareTea, die ein PartialTea-Objekt akzeptiert und auf der Konsole ausgibt “Preparing [tea.name] - will be ready in [tea.brewingTime]”
// - Gib einen Fehler auf der Konsole aus, falls name und brewingTime nicht gesetzt sind und brich die Funktion ab
function prepareTea(tea: PartialTea) {
    if (!tea.name || !tea.brewingTime) {
      console.error("Error: 'name' and 'brewingTime' must be set.");
      return;
    }
    console.log(`Preparing ${tea.name} - will be ready in ${tea.brewingTime} minutes`);
}

// - Lege ein Objekt vom Typ ITea an und übergebe es der Methode prepareTea
const newTea: ITea = {
    name: "Peach Ice Tea",
    type: "Iced Tea",
    temperature: 8,
    brewingTime: 5
  };
  
  prepareTea(newTea);

// - Lege ein Objekt vom Typ PartialTea an und übergebe es der Methode prepareTea

const newPartialTea: PartialTea = {
    name: "Black Tea";
}

prepareTea(newPartialTea)
