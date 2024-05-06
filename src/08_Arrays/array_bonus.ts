// - Du sollst eine einfache To-Do-Liste implementieren und einige Operationen damit durchführen

// - Lege ein leeres Array toDoItems vom Typ string-Array an
let toDoItems: string[] = [];

// - Erstelle eine Funktion addItem, die ein neues To-Do-Element zur Liste hinzufügt
// → Die Funktion soll ein To-Do-Element als String und einen weiteren Parameter atTheBack (Typ boolean) annehmen. Dieser gibt an, ob das Element am Ende der Liste hinzugefügt werden soll oder am Anfang. Wenn atTheBack true ist, soll das Element am Ende hinzugefügt werden, andernfalls am Anfang.
 
function addItem(toDo: string, atTheBack: boolean) {
    if(atTheBack = true) {
        toDoItems.push(toDo)
    }
    else {
        toDoItems.unshift(toDo)
    }
} 

addItem("Clean the kitchen", true);
console.log(toDoItems);
addItem("Water the plants", true);
console.log(toDoItems);
addItem("Vacuum the floors", true);
console.log(toDoItems);
addItem("Feed the dog", true);
console.log(toDoItems);
    
   
// - Erstelle eine Funktion removeItem, die ein To-Do-Element aus der Liste entfernt.→ Die Funktion soll ebenfalls einen Parameter atTheBack akzeptieren. Dieser gibt auch hier an, ob das Element am Ende oder am Anfang entfernt werden soll.

function removeItem(atTheBack: boolean) {
    if(atTheBack = true) {
        toDoItems.pop()
    }
    else {
        toDoItems.shift()
    }
}

removeItem(true);
console.log(toDoItems);
    
    
// - Erstelle eine Funktion addItemAt, die zwei Parameter hat: toDoItem: string und index: number
// → die Funktion fügt das Element an der angegeben Stelle (Index) ein

function addItemAt(toDoItem: string, index: number) {
    toDoItems.splice(index, 0, toDoItem)
}

addItemAt("Take out trash", 1); 
console.log(toDoItems);

// - Erstelle eine Funktion removeItemAt, die ein Element an einer bestimmten Stelle entfernt. Diese Funktion hat nur einen Parameter indexToRemove: number.


function removeItemAt(indexToRemove: number) {
    toDoItems.splice(indexToRemove, indexToRemove);
}

console.log(toDoItems);
removeItemAt(2)
console.log(toDoItems);

// - Erstelle eine Funktion printList, die die gesamte To-Do-Liste auf der Konsole ausgibt.

function printList(): void {
    console.log(toDoItems);
}