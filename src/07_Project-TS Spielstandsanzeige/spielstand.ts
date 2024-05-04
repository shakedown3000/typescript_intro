// Bisher funktioniert nur der 1 Button


let counterHome = 0;
let counterAway = 0;

// Ansprechen des Display-Scores im HTML (paragraph) durch vergeben einer Konstanten

// Score Links:
const scoreElementHome = document.getElementById ('home')
// Score Rechts
const scoreElementAway = document.getElementById('away')

// Ansprechen der Zahlencounter
// ID Plusone Home wird zu -> AdOneHome
const addOneHome = document.getElementById('plus_one_home');
const addTwoHome = document.getElementById('plus_two_home');
const addThreeHome = document.getElementById('plus_three_home');
const addOneAway = document.getElementById('plus_one_away');
const addTwoAway = document.getElementById('plus_two_away');
const addThreeAway = document.getElementById('plus_three_away');

// Frage: Wie kann ich p innerhalb eines DIVS ansprechen?

// Überprüfen, ob Elemente gefunden wurden mit verschachteltem If Statement

if(scoreElementHome) {
    console.log("element Score existiert");
        if(addOneHome) {
        addOneHome.addEventListener('click', addCounterOneHome); 
        console.log("Added 1 to the Home Score");   
        }
        else if (addTwoHome) {
        addTwoHome.addEventListener('click', addCounterTwoHome);    
        console.log("Added 2 to the Home Score");     
        }
        else if (addThreeHome) {
        addThreeHome.addEventListener('click', addCounterThreeHome);    
        console.log("Added 3 to the Home Score");     
        }
    else {
        console.error('counterElement oder buttonElement nicht gefunden!');
}
}

function addCounterOneHome(event: MouseEvent) {
    event.preventDefault();
    counterHome++;
    if (scoreElementHome) {
        scoreElementHome.textContent = counterHome.toString();
    }
}

function addCounterTwoHome(event: MouseEvent) {
    event.preventDefault();
    counterHome = counterHome + 2;
    if (scoreElementHome) {
        scoreElementHome.textContent = counterHome.toString();
    }
}

function addCounterThreeHome(event: MouseEvent) {
    event.preventDefault();
    counterHome = counterHome + 3;
    if (scoreElementHome) {
        scoreElementHome.textContent = counterHome.toString();
    }
}