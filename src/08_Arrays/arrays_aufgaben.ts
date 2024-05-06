// Array-TS-Level-1_1

// - Erstelle 3 Arrays mit den Namen: bucketList, luckyNumbers, favoritePeople.
// - Jedes dieser Arrays beinhaltet 3 Werte. 
// - bei bucketList 3 Orte, die du noch besuchen möchtest
// - bei luckyNumbers deine 3 Glückszahlen (denk dir was aus 😉)
// - bei favoritePeople deine 3 liebsten Menschen.
// - Lasse dir jedes Array in der Konsole ausgeben.

let bucketList: string[] = ["Georgien", "Indonesien", "Griechenland"];
let luckyNumbers: number[] = [11, 36, 65];
let favoritePeople: string[] = ["Nico", "Chrissie", "Sarah"];

for (let i = 0; i < bucketList.length; i++) {
    console.log('Country on my bucket list:', bucketList[i]);
}
for (let i = 0; i < luckyNumbers.length; i++) {
    console.log('My lucky number', luckyNumbers[i]);
}
for (let i = 0; i < favoritePeople.length; i++) {
    console.log('My favorite person:', favoritePeople[i]);
}

// Array-TS-Level-1_2

// - Lasse dir aus deinen vorhin erstellten Arrays bucketList, luckyNumbers, favoritePeople die einzelnen Werte in der Konsole ausgeben.

console.log(bucketList[0]);
console.log(bucketList[1]);
console.log(bucketList[2]);

console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);

console.log(favoritePeople[0]);
console.log(favoritePeople[1]);
console.log(favoritePeople[2]);

// Array-TS-Level-1_3 (length)

// - Verwende die length, um zu überprüfen, wie viele Werte sich in deinen Arrays befinden.
// - Lasse das Ergebnis in der Konsole (console.log) ausgeben.
// - Achte darauf, welches Ergebnis dir die Methode in der Konsole anzeigt.

console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);

// Array-TS-Level-1_4 (push)

// - Erstelle ein Array und ergänze es mit der Array-Methode **push()**. 
// Mit push() kannst du einen oder mehrere Werte gleichzeitig an das Ende eines Arrays hinzufügen.
// - Verwende push(), um mindestens 2 neue Werte zu deinem Array hinzuzufügen.
// - Verwende console.log(), um den Inhalt und die Länge deines Arrays vor und nach dem Hinzufügen neuer Werte anzuzeigen. Beobachte die Veränderungen in der Konsole.

let cities: string[] = ["Köln", "Düsseldorf", "Essen"]
console.log(cities);
cities.push("Dortmund", "Bonn");
console.log(cities);

// Array-TS-Level-1_5 (pop)

// - Wer hinzufügt, der muss es auch wieder entfernen können. Dafür wird die Array-Methode **pop()** genutzt. Bei pop() wird der letzte Wert von einem Array entfernt und der entfernte Wert wird zurückgegeben.
// - Nutze wieder einmal die Arrays aus der vorherigen Übung. Entferne jeweils einen Wert aus deinen Arrays und lasse dir den entfernten Wert in der Konsole ausgeben.
// - Zur besseren Darstellung kannst du dir das Array vor dem pop() ausgeben lassen, dann den entfernten Wert und dann das Array nochmal. Schau dir die Ergebnisvorschau an.

console.log('Vor dem Pop: ', cities);
let removeElement = cities.pop()
console.log('Wurde entfernt:', removeElement);
console.log('Nach dem Pop: ', cities);
console.log('Länge nach Pop: ', cities.length); 

// Array-TS-Level-1_6 (shift)

// - Die Array-Methode **shift()** ist pop() sehr ähnlich. Denn shift() entfernt auch einen Wert aus einem Array, dieses Mal allerdings den ersten Wert. Hierbei wird der erste Wert entfernt und die anderen Werte rücken mit ihrem Index einen nach vorne.
// - Entferne aus jedem deinem favoritePeople Array den ersten Wert und lasse dir diesen in der Konsole ausgeben.
// - Auch hier kannst du fürs bessere Verständnis das Array vorher und nachher in der Konsole ausgeben.
// - Um mit dem entfernten Wert weiterarbeiten zu können, solltest du dir shift() in einer Variable zwischenspeichern, da der Rückgabewert von shift() sonst verloren geht.
// - Beispiel: let firstPerson: string = array.shift();

console.log(favoritePeople);
let firstElement = favoritePeople.shift();
console.log('Wir entfernen: ', firstElement);
console.log(favoritePeople);

// Array-TS-Level-1_7 (unshift)

// - Die Array-Methode **unshift()** ist push() sehr ähnlich. Denn unshift() fügt auch einen Wert zu einem Array hinzu, dieses mal allerdings an erster Stelle. Es ist möglich einen oder mehrere Werte mit unshift() am Anfang eines Arrays einzufügen. Die anderen Werte werden mit ihrem Index um Anzahl der neu hinzugefügten Werte erhöht.
// - Verwende unshift(), um mindestens 2 neue Werte zum Array der Städte hinzuzufügen.
// - Verwende console.log(), um den Inhalt und die Länge deines Arrays vor und nach dem Hinzufügen neuer Werte anzuzeigen. Beobachte die Veränderungen in der Konsole.

// Bestehende Elemente werden nach hinten verschoben

console.log(cities);
let unshiftCities = cities.unshift("Leverkusen", "Duisburg")
console.log(cities);

// Array-TS-Level-1_8 (slice)

// - Die Methode [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global%5FObjects/Array/slice) kennst du schon von den Strings. Auch hier kann man mit slice() Werte aus einem Array schneiden und bekommt ein neues Array zurück. Hierbei ist zu beachten, dass slice() einen Startindex benötigt, optional auch einen Endindex.
// - Erstelle ein neues Array "lieblingsreiseziele".
// - Füge in der Mitte zwei Orte ein, die du nicht so gut findest
// - Schneide mit slice() die beiden Werte aus dem Array aus.
// - Lass dir dein Array "lieblingsreiseziele" einmal vor dem slicen in der Konsole ausgeben und einmal danach. Dir wird auffallen, dass das ursprüngliche Array nicht verändert worden ist. Das bedeutet, dass slice() eine Kopie von den Werten erstellt und nicht das ursprüngliche Array beeinflusst.

let favoriteTravelDestinations: string[] = ["Thailand", "Italien", "Mexiko"];
console.log(favoriteTravelDestinations);
favoriteTravelDestinations.splice(1, 0, "Rio de Janeiro", "Thüringen");
console.log(favoriteTravelDestinations);
favoriteTravelDestinations.splice(1,2);
console.log(favoriteTravelDestinations);

// Array-TS-Level-1_9 (push/pop shift/unshift)

// - Lernziel: Unterschied von Push-Pop und Shift-Unshift.
// - Erstelle eine Variable vom Typ number-Array
// - Das Array hat zu Anfang folgende Werte: 23, 54, 75;
// - Verwende die Push-Methode, um 5 Werte in dein Array einzufügen.
// - Verwende die Unshift-Methode, um 5 Werte vorne im Array hinzuzufügen.
// - Verwende die Pop-Methode, um 2 Werte am Ende deines Arrays zu entfernen.
// - Verwende die Shift-Methode, um 2 Werte vorne im Arrays zu entfernen.
// - Lass dir nach jeder Veränderung das Ergebnis in der Konsole ausgeben

let myArray: number[] = [23, 54, 75];
console.log(myArray);
myArray.push(33, 66);
console.log(myArray);
myArray.unshift(55, 45, 145, 789, 369);
console.log(myArray);
myArray.pop()
myArray.pop()
console.log(myArray);
myArray.shift()
myArray.shift()
console.log(myArray);

// Array-TS-Level-1_10 (split)

// - Nun geht es um eine String-Methode, die ein Array zurückgibt. Deswegen wird split() immer erst bei Arrays behandelt. Mit split() kannst du aus einem String ein Array erstellen lassen. Dabei kannst du in den ()-Klammern von split() festhalten, wie der String gestückelt werden soll.
// - Nutze folgenden String als Beispiel:   const futuramaQuote = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."
// - Finde mit der Ergebnisvorschau in der Browser-Konsole heraus, wo der String gesplitet worden ist.
// - Wichtig ist, dass du dir die einzelnen Vorgänge in extra Variablen zwischenspeicherst, weil du sonst nicht mit der Rückgabe von split() weiterarbeiten kannst.

const futuramaQuote: string = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";
let splitString = futuramaQuote.split(" ", futuramaQuote.length)
console.log(splitString);