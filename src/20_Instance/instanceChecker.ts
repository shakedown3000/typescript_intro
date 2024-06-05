import Unicorn from "./unicorn";

// ? Erstelle dort eine Klasse InstanceChecker
// ? Lege eine statische Methode isUnicorn an
// ? Die Methode hat einen Parameter namens objectToCheck - ausnahmsweise vom Typ any ;)
// ? Die Methode gibt true zurück, wenn das objectToCheck eine Instanz der Klasse Unicorn ist
// ? Die Methode gibt false zurück, wenn das objectToCheck keine Instanz der Klasse Unicorn ist

class InstanceChecker {
  static isUnicorn(objectToCheck: any): boolean {
    return objectToCheck instanceof Unicorn; // ist boolean
  }
}

export default InstanceChecker;
