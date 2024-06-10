type Alcohol = {
  name: string;
  percentage: number;
  type: string;
};

// Definition des Typs Mixer
type Mixer = {
  name: string;
  type: string;
  carbonated: boolean;
};

type Cocktail = Alcohol & Mixer;

const tequilaSunrise: Cocktail = {
  name: "Tequila Sunrise",
  percentage: 15,
  type: "Cocktail",
  carbonated: false,
};

console.log(tequilaSunrise);

console.log("Name:", tequilaSunrise.name);
console.log("Alkoholgehalt:", tequilaSunrise.percentage + "%");
console.log("Typ:", tequilaSunrise.type);
console.log("Kohlensäurehaltig:", tequilaSunrise.carbonated);
