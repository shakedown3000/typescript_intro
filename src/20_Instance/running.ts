import Activity from "./activity";

class Running extends Activity {
  distance: number;

  constructor(_name: string, _difficulty: number, distance: number) {
    super(_name, _difficulty);
    this.distance = distance;
  }

  private calculateMinutes = (distance: number): number {
    let amountOfMinutes: number = 0;
    if (distance >= 10) {
        amountOfMinutes = 5;
    } else if (distance >= 7) {
        amountOfMinutes = 4;
    } else if (distance >= 4.5) {
        amountOfMinutes = 3;
    } else if (distance >= 3) {
        amountOfMinutes = 2;
    }
    return amountOfMinutes;
};

warmUp(): void {
    const minutes = this.calculateMinutes(this.distance);
    console.log(`Warming up for ${minutes} minutes.`);
    }

  coolDown(): void {
    const minutes = this.calculateMinutes(this.distance);
    console.log(`Cooling down for ${minutes} minutes.`);
}
}

export default Running;