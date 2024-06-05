import Activity from "./activity";

class Yoga extends Activity {
  style: YogaStyle;

  constructor(_name: string, _difficulty: number, style: YogaStyle) {
    super(_name, _difficulty);
    this.style = style;
  }
}

enum YogaStyle {
  Hatha,
  Vinyasa,
  Ashtanga,
  Bikram,
}

export { Yoga, YogaStyle };
