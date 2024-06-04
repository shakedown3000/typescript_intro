// OOP-Class-TS-Level-1_3

// ? Definiere eine Klasse Animal
// ? sie soll die Eigenschaften species (string), age (number) und color (string) enthalten
// ? Implementiere Get- und Set-Methoden für jede Eigenschaft.
// ? Definiere eine weitere Klasse Person, die die Eigenschaften name(string), birthday (Date) und gender (Enum) enthält.
// ? Implementiere Get- und Set-Methoden für name und gender,
// ? birthday soll im Konstruktor gesetzt werden und ansonsten nur eine Get-Methode haben.

import Animals from "./animal";
import Person from "./person";
import Gender from "./Gender";

// OOP-Class-TS-Level-2_3

// - Definiere eine Klasse Customer
// - sie soll die Eigenschaften name (string), email (string), address (string), postalCode (number) und city (string) enthalten
// - Implementiere Get- und Set-Methoden für jede Eigenschaft.
// - vor dem Setzen des Namens soll geprüft werden, dass die Länge 60 Zeichen nicht überschreitet. Beim Überschreiten soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.
// - vor dem Setzen der E-Mail-Adresse soll geprüft werden, ob die Adresse ein @-Zeichen und einen Punkt enthält. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.
// - vor dem Setzen der Postleitzahl (postalCode) soll geprüft werden, ob die Postleitzahl 5-stellig ist und zwischen 00000 und 99999 liegt. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.
