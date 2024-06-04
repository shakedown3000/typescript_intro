
// - in der Klasse Car
//     ? soll constructionYear nur über den Konstruktor gesetzt werden können 
//     → Wert ist nur über einen Getter (get-Methode) abrufbar
//     ? soll es eine Methode getSpeedInfo(): string geben mit dieser Logik         geben
//         - currentSpeed ≤ 40 → Rückgabewert ‘Driving slowly’
//         - currentSpeed > 40 und ≤ 70 → Rückgabewert ‘Driving normally’
//         - currentSpeed > 70 und ≤ 120 → Rückgabewert ‘Driving fast’
//         - currentSpeed > 120 und ≤ 190 → Rückgabewert ‘Driving really fast’
//         - currentSpeed> 190 → ‘WTF’

import CarType from "./cartype";

class Car {
    brand: string = "";
    private _constructionYear: number = 0;  
    private _currentSpeed: number = 0;
    carType: CarType;

    get constructionYear () {
        console.log("Getter is set for constructionYear.");
        return this._constructionYear;
    }
    
    // Setter
    
    set currentSpeed(value: number) {
        console.log("Setter is called on currentSpeed");
        if(value <= 40) {
            console.log("Driving slowly");
        }
        else if(value > 40 && value <= 70) {
            console.log("Driving normally");}
            else if(value > 70 && value <= 120) {
                console.log("Driving fast");
            }
            else if(value > 120 && value <= 190) {
                console.log("Driving really fast");
            }
            else if (value > 190) {
                console.log("WTF");
            }
        }
        
        constructor (constructionYear: number) {
            this._constructionYear = constructionYear;
            this.
        }
}

export default Car;
