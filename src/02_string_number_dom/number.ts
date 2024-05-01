console.clear();

const age: number = 36;
const salary: number = 4345.334;

// toString

const ageAsString: string = age.toString();
console.log({ageAsString});

const salaryAsString: string = salary.toString();
clg({salaryAsString});

// toFixed wird abgerundet auf zwei Nachkommastellen
const salaryToFixed = salary.toFixed(2);
console.log({salaryToFixed});

//  toPrecision zehn hoch drei
const salaryToPrecision = salary.toPrecision(2);
console.log({salaryToPrecision});

// parseInt 
const birthYear = '1995';
const birthYearAsNumber: number = parseInt{birthYear};
console.log(birthYearAsNumber);

// parseFloat 
const tax = '17.55';
const taxAsNumber = parseFloat(tax);

// toNumber

const highNumberAsString = '234564783.33';
const highNumber = Number(highNumberAsString);
console.log({highNumber});

// toExponential 
