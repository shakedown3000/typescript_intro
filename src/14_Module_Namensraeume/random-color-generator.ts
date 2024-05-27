import Colors from "./special-colors";

function randomColorGenerator(): Colors {
    // Anlegen eines Arrays mit den Werten aus Enum
    const colors = Object.values(Colors) as Colors[];
    // Nummer von 1 bis 10 generieren
    let randomColorIndex = Math.ceil(Math.random()*10)
    // Nummer index zuweisen
    return colors[randomColorIndex];
}

export default randomColorGenerator;