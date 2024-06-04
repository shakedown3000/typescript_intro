import Beverage from "./beverage";

enum CoffeeType {
  Espresso = "Espresso",
  Latte = "Latte",
  Cappuccino = "Cappuccino",
  Americano = "Americano",
}

class Coffee extends Beverage {
  type: CoffeeType;

  constructor(name: string, price: number, type: CoffeeType) {
    super(name, price);
    this.type = type;
  }
}

export { Coffee, CoffeeType };
