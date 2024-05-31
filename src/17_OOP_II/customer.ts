// ? Definiere eine Klasse Customer
// ? sie soll die Eigenschaften name (string), email (string), address (string), postalCode (number) und city (string) enthalten
// ? Implementiere Get- und Set-Methoden für jede Eigenschaft.

class Customer {
  private _name: string = "";
  private _address: string = "";
  private _postalCode: string = "00000";
  private _city: string = "";

  // Getter
  get name() {
    console.log("Getter is called for name.");
    return this._name;
  }
  get address() {
    console.log("Getter is called for address.");
    return this._address;
  }
  get postalCode() {
    console.log("Getter is called for postalCode.");
    return this._postalCode;
  }
  get city() {
    console.log("Getter is called for city.");
    return this._city;
  }

  // Setter

  // ? vor dem Setzen des Namens soll geprüft werden, dass die Länge 60 Zeichen nicht überschreitet. Beim Überschreiten soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.

  set name(value: string) {
    console.log("Setter is called on name");
    if (value.length > 60) {
      console.log("Name cannot be longer than 60 characters.");
    } else {
      this._name = value;
    }
  }

  //   ? vor dem Setzen der E-Mail-Adresse soll geprüft werden, ob die Adresse ein @-Zeichen und einen Punkt enthält. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.
  set address(value: string) {
    console.log("Setter is called on address");
    if (value.includes("@")) {
      this._email = value;
    } else {
      console.log("Must be a valid Emailaddress.");
    }
  }

  // ? vor dem Setzen der Postleitzahl (postalCode) soll geprüft werden, ob die Postleitzahl 5-stellig ist und zwischen 00000 und 99999 liegt. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.

  set postalCode(value: string) {
    console.log("Setter is called on postalCode.");
    if (/^\d{5}$/.test(value)) {
      this._postalCode = value;
    } else {
      console.log("Postal code must be a five-digit number.");
    }
  }
}
