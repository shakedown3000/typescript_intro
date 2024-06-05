import Car from "./car";
import ElectricCar from "./electric-car";

class InstanceCheckerCar {
  static isCar(objectToCheck: any): boolean {
    return objectToCheck instanceof Car; // ist boolean
  }
}

class InstanceCheckerElectricCar {
  static isElectricCar(objectToCheck: any): boolean {
    return objectToCheck instanceof ElectricCar; // ist boolean
  }
}

export { InstanceCheckerCar, InstanceCheckerElectricCar };
