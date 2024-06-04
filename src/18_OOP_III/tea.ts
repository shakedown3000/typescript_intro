import Beverage from "./beverage";

enum TeaFlavor {
  Green = "Green",
  Black = "Black",
  Chai = "Chai",
  Peppermint = "Peppermint",
}

class Tea extends Beverage {
  flavor: TeaFlavor;

  constructor(name: string, price: number, flavor: TeaFlavor) {
    super(name, price);
    this.flavor = flavor;
  }
}

export { Tea, TeaFlavor };
