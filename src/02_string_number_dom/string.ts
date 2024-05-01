// String Methods

const songTitle: string = 'The Beatles - Yesterday'
const songTitleLength: number = songTitle.length;
console.log({songTitleLength});

// IndexOf

const indexOfY: number = songTitle.indexOf('Y')
console.log({indexOfY});
const indexOfy: number = songTitle.indexOf('y');

const indexOfEFromTen: number = songTitle.indexOf('e', 10);
console.log({indexOfEFromTen});

// Indexer

const letterAtIndex3: string = songTitle[4];
console.log({letterAtIndex3});

// Substring von bis ausschneiden

const yesterday: string = songTitle.substring[14, 23];
console.log({yesterday});
const yesterday2: string = songTitle.substring[14];
console.log(yesterday2);

const beatles: string = songTitle.substring[4, 11];
console.log({beatles});

// trim (zB Leerzeichen)
const userEmailfromInput: string = 'suzy@gmx.de ';
const userEmail: string = userEmailfromInput.trim();
console.log({userEmail});

const userEmailfromInput2: string = 'suzy@gmx.de';
const userEmail2: string = userEmailfromInput2.trim;
console.log(userEmail2);

// Search

const eat: number = songTitle.search('eat')
console.log('eat');

// replace
const differentBandName: string = songTitle.replace('The Beatles', 'Rolling Stones');
console.log({differentBandName});

// toUpperCase

const songTitleUpperCase: string = songTitle.toUpperCase();

// toLowerCase


// concat
const favoriteSong = 'My favorite song is: ';
const concatenatedSong = favoriteSong.concat(songTitle). concat('!!');
const favoriteSongWithPlus = favoriteSong + songTitle;
console.log({favoriteSongWithPlus});
