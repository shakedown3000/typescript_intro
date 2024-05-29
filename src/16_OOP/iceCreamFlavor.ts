  // ? Lege in einer neuen Datei eine Klasse mit dem Namen IceCreamFlavor an
// - Die Klasse soll folgende Attribute haben
//     - name: string
//     - price: number
//     - isPopular: boolean
//     - description: string → optional
// - name soll beim Anlegen ‘’ sein, price = 0, isPopular = false und description = undefined

class IceCreamFlavor {
  name: string = "";
  price: number = 0;
  isPopular: boolean = false;
  description?: string = ""; // optional

  constructor(name: string, price: number, isPopular: boolean) {
    this.name = name;
    this.price = price;
    this.isPopular = isPopular;
  }
}

export default IceCreamFlavor;