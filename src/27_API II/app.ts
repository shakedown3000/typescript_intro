// fetch-level-2_2

// - Lege ein Interface IToDo mit den entsprechenden Datentypen an

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// - Verwende das Interface beim fetch
// - Zeige die Aufgaben in deiner HTML-Seite an
// - Die Aufgaben sollen alphabetisch nach Titel sortiert werden
// - Verwende unterschiedliche Farben, je nachdem ob die Aufgabe erledigt oder noch offen ist
// - Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an

const contentDiv = document.getElementById("output") as HTMLDivElement;
const url: string = "https://jsonplaceholder.typicode.com/todos";

// function fetchAndDisplay(url: string) {
//   fetch(url)
//     .then((response: Response) => {
//       if (!response.ok) {
//         throw Error(`${response.status} ${response.statusText}`);
//       }
//       return response.json();
//     })

//     .then((data) => {
//       if (contentDiv) {
//         const todos = data as Todo[];
//         todos.sort((a, b) => a.title.localeCompare(b.title));
//         console.log(todos);
//         contentDiv.innerHTML = createToDoList(todos);
//       }
//     })
//     .catch((error: Error) => {
//       console.error(error);
//     });
// }

// function createToDoList(todos: Todo[]): string {
//   const listElementsOfTodos = todos.map((todos: Todo) => {
//     // Wähle die Farbe basierend auf dem Status "completed"
//     const color = todos.completed ? "green" : "red";
//     return `<li style="color: ${color};">
//               <p>userId: ${todos.userId}</p>
//               <p>Id: ${todos.id}</p>
//               <p>title: ${todos.title}</p>
//               <p>completed: ${todos.completed}</p>
//             </li>`;
//   });
//   return `<ul>${listElementsOfTodos.join("")}</ul>`;
// }

// fetchAndDisplay(url);

// fetch-level-3_1

// Lernziel: Daten von einer freien API abholen und im HTML darstellen

// - Suche dir eine API von Folgenden aus:
//     - API um Informationen über Länder abzurufen: https://restcountries.com/
//     - Pokemon API: https://pokeapi.co/
//     - Art Institute of Chicago API: https://api.artic.edu/docs/
//     - Kochrezepte: https://spoonacular.com/food-api/docs
//     - Quizfragen: https://the-trivia-api.com/docs/v2/
// - Schau zunächst in die Dokumentation und rufe Daten mit Postman oder einem anderen Tool ab
// - Verstehst du den Aufbau? Falls nicht, suche dir eine andere, einfachere API
// - Lege ein oder mehrere Interfaces für die Daten an, die du abrufen und darstellen willst
// - Rufe die Daten ab
// - Fange mögliche Fehler ab
// - Stelle die Daten ansprechend auf einer HTML-Seite dar
// - Erstelle eine Navigation, wenn du mehrere verschiedene Daten abrufst
// - Falls möglich, integriere eine Suchfunktion

const countriesURL: string = "https://restcountries.com/v3.1/all";
const contentOutput = document.getElementById("content") as HTMLDivElement;

interface Country {
  officialName: string;
  region: string;
  flag: string;
  timezone: string;
  area: number;
  population: number;
}

function fetchCountries() {
  fetch(countriesURL)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((countries: Country[]) => {
      console.log(countries);
      if (contentOutput)
        // Renderfunktion
        contentOutput.innerHTML = createCountryCards(countries);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Done with fetching all countries");
    });
}

function createCountryCards(countries: Country[]): string {
  const listElementsOfcountries = countries.map((country: Country) => {
    return `<li>
      <p>${country.officialName}</p>
      <p>${country.region}</p>
      <p>${country.flag}</p>
      <p>${country.timezone}</p>
      <p>${country.area}</p>
      <p>${country.population}</p>
      </li>`;
  });
  return `<ul>${listElementsOfcountries.join("")}</ul>`;
}

fetchCountries();
