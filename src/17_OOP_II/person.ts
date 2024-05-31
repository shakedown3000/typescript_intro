import Gender from "./Gender";

class Person {
  private _name: string = "";
  private _birthday: Date | null = null;
  private _gender: Gender = Gender.Unknown;

  // Getter
  get name() {
    console.log("Getter is called on name.");
    return this._name;
  }
  get birthday() {
    console.log("Getter is called for birthday.");
    return this._birthday;
  }

  get gender() {
    console.log("Getter is called for gender.");
    return this._gender;
  }

  // Setter
  set name(value: string) {
    console.log("Setter is calles on name");
    if (value.length > 100) {
      console.log("Number of characters cannot be more than 100.");
    } else {
      this._name = value;
    }
  }

  set gender(value: Gender) {
    console.log("Setter is calles on name");
    if (value in Gender) {
      this._gender = value as Gender;
    } else {
      console.log("Invalid gender value.");
    }
  }

  constructor(birthday: Date) {
    this._birthday = birthday;
  }
}

export default Person;
