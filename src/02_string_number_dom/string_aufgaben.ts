
const firstName: string = 'Anna';
const lastName: string = 'Mustermann';
const firstNameLength: number = firstName.length;
console.log({firstNameLength});
const lastNameLength: number = lastName.length;
console.log({lastNameLength});
const fullName: string = firstName + lastName;
const fullNameLength: number = fullName.length;

// Aufgabe TS LEVEL 1_2

const earthQuote = "How inappropriate to call this planet Earth, when clearly it is Ocean."

const h = earthQuote.search('h')
console.log({h});

const earth = earthQuote.search('Earth')
console.log({earth});

const moon = earthQuote.search('Moon')
console.log({moon});

// String-Methods-TS-Level-1_3

let oceanQuote = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

const semicolon = oceanQuote.search(';'); 
const green = oceanQuote.search('green');
const blue = oceanQuote.search('blue')
console.log({semicolon, green, blue});

// String-Methods-TS-Level-1_4

const susisStatus: string = 'Susi is going to codingschool';
const susiSlice1 = susisStatus.slice(0,4);
const susiSlice2 = susisStatus.slice(5,7);
const susiSlice3 = susisStatus.slice(5,17);
const susiSlice4 = susisStatus.slice(23);
const susiSlice5 = susisStatus.slice(23);
const susiSlice6 = susisStatus.slice(0,8)

// document.open()
// document.write(susiSlice1 + "<br>")
// document.close();
const susi0 = document.querySelector('#paragraph');
if (susi0) {
    susi0.innerHTML = susisStatus
}
// const susiBla = document.querySelector('#paragraph');
// if (susiBla) {
//     susiBla.innerHTML = susiSlice2
// }
console.log(susiSlice1);
console.log(susiSlice2);
console.log(susiSlice3 + susiSlice4);
console.log(susiSlice5);
console.log(susiSlice6);
console.log(susiSlice6 + susiSlice5);


// String-Methods-TS-Level-1_6 substr

const susisJob = 'Sam is working at codingschool';
const susiSub1 = susisJob.substring(0,4)
console.log(susiSub1);
const susiSub2 = susisJob.substring(4,6)
console.log(susiSub2);


// String-Methods-TS-Level-1_7 - replace

const samsStatus = 'Sam is good at codingschool'
let sam1 = samsStatus.replace("good", "bad");
console.log(sam1);
let sam2 = samsStatus.replace("Sam", "Susi");
console.log(sam2);
let sam3 = samsStatus.replace("codingschool", "tennis");
console.log(sam3);

// String-Methods-TS-Level-1_9 concat()

const infoAboutSam = "Sam is going to codingschool"; 

// - Sam is going to school and to the movie theater
let samConcat1 = infoAboutSam.replace("coding", "")
let samConcat2 = samConcat1.concat(" and to the movie theater")
console.log(samConcat2);
// - Sam is going to the movie theater
let samConcat3 = infoAboutSam.replace("codingschool", "the movie theater")
console.log(samConcat3);
// - Susi and Sam are going to school
let susiConcat1 = "Susi and "
let susiConcat2 = samConcat1.replace("is", "are");
let susiConcat3 = susiConcat1.concat(susiConcat2)
console.log(susiConcat3);
// - Susi and Sam are going to gym and to the movie theater
let susiConcat4 = susiConcat3.replace("school", "the gym and to the movie theater")
console.log(susiConcat4);
// - Susi is going to school and to the movie theater
let susiConcat5 = samConcat2.replace("Sam", "Susi")
console.log(susiConcat5);


// String-Methods-TS-Level-1_8

// - Verwende den Befehl [toUpperCase()](https://www.w3schools.com/jsref/jsref%5Ftouppercase.asp) um aus der Variable const whereIsSam = "Sam is going to school" die veränderte Zeichenkette zu erhalten: SAM IS GOING TO SCHOOL.
// - Neben toUpperCase() gibt es auch noch den Befehl [toLowerCase()](https://www.w3schools.com/jsref/jsref%5FtoLowerCase). Schaue, was passiert, wenn du dies auf die Variable whereIsSam anwendest.
// - Erzeuge mit den beiden Befehlen folgende Zeichenketten und gib sie in deinem HTML aus:
// - SAM is going to SCHOOL
// - sam IS GOING TO school
// - Sam Is Going To School


const whereIsSam = "Sam is going to school"
// SAM IS GOING TO SCHOOL.
// const whereIsSamUp = whereIsSam.toUppercase;
console.log(whereIsSamUp);










