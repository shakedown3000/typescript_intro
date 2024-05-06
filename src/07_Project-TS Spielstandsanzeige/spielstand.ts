// Declaring Variables
let counterHome: number = 0;
let counterAway: number = 0;

// Ansprechen des Display-Scores im HTML (paragraph) durch vergeben einer Konstanten

// Score Links:
const scoreElementHome = document.getElementById ('home')
// Score Rechts
const scoreElementAway = document.getElementById('away')
// Reset
const resetButton = document.getElementById('reset_score')

// Ansprechen der Zahlencounter
// ID Plusone Home wird zu -> AdOneHome
const addOneHome = document.getElementById('plus_one_home');
const addTwoHome = document.getElementById('plus_two_home');
const addThreeHome = document.getElementById('plus_three_home');

const addOneAway = document.getElementById('plus_one_away');
const addTwoAway = document.getElementById('plus_two_away');
const addThreeAway = document.getElementById('plus_three_away');


// Überprüfen, ob Elemente gefunden wurden mit verschachteltem If Statement

// HOME
function updateScoreHome(pointsHome: number) {
    if (scoreElementHome) { 
        if (addOneHome && addTwoHome && addThreeHome) {
            counterHome += pointsHome;
            scoreElementHome.textContent = counterHome.toString();
        }
    }
  }


if (addOneHome && addTwoHome && addThreeHome) {
    addOneHome.addEventListener('click', () => updateScoreHome(1));
    addTwoHome.addEventListener('click', () => updateScoreHome(2));
    addThreeHome.addEventListener('click', () => updateScoreHome(3));
}

// AWAY

function updateScoreAway(pointsAway: number) {
    if (scoreElementAway) { 
        if (addOneAway && addTwoAway && addThreeAway) {
            counterAway += pointsAway;
            scoreElementAway.textContent = counterAway.toString();
        }
    }
  }

  if (addOneAway && addTwoAway && addThreeAway) {
    addOneAway.addEventListener('click', () => updateScoreAway(1));
    addTwoAway.addEventListener('click', () => updateScoreAway(2));
    addThreeAway.addEventListener('click', () => updateScoreAway(3));
}

// Reset

if (resetButton) {
    resetButton.addEventListener('click', () => resetScoresToZero())
}

function resetScoresToZero() {
    if (scoreElementAway && scoreElementHome)
    counterAway = 0;
    counterHome = 0;
    scoreElementAway.textContent = '0';
    scoreElementHome.textContent = '0';
}
