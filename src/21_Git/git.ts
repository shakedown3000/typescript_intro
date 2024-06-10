// Aufgabe

// - Erstelle eine interaktive HTML-Seite, auf der Benutzer:innen mehrere Kreditkarteninformationen eingeben können.
// - Es sollen maximal 5 Kreditkarten erfasst werden können

// ? Formular
// - Das Eingabeformular sollte die folgenden Felder enthalten:
//    * - Kartennummer (16-stellige Nummer)
//    * - Karteninhaber
//    * - Ablaufdatum ([Monat/Jahr] -> muss in Zukunft liegen
//    * - CVV (3-stellige Nummer auf der Rückseite der Karte)
//    * → Zeige für das CVV-Feld einen Tooltip an, der erklärt, wo Benutzer:innen die CVV-Nummer auf ihrer Kreditkarte finden können.

// ? Funktion Submit:
// - Über einen Button “Submit” wird geprüft, ob die Daten gültig sind und die Kreditkarte gespeichert
//
// * -> Speicherung als Objekt in Array unter Bedingung
// * -> Klasse CreditCard
// * -> Array Anlegen
// - bei gültigen Daten wird eine Instanz einer Klasse CreditCard angelegt - die Kreditkarten sollen in einem Array verwaltet werden
// * -> Prüfung Gültigkeit/Validierung:
// - Die Eingaben sollen alle validiert werden
// * Bedingung 1:
// - Überprüfung Kartennummer: Stelle sicher, dass die eingegebene Kartennummer 16-stellig und gültig ist.
// * Bedingung 2:
// - Überprüfung Ablaufdatum: Überprüfe, ob das Ablaufdatum in der Zukunft liegt.
// * Bedingung 3:
// - CVV-Überprüfung: Überprüfe, ob der CVV eine dreistellige Zahl ist
// * Wenn eine/mehrere Bedingungen not true, dann gebe Fehlermeldung aus
// - Zeige dem Benutzer entsprechende Fehlermeldungen an, falls die eingegebenen Informationen nicht den Anforderungen entsprechen.

// * Ausgabe 1 Kreditkarte bei Erfüllung aller Bedingungen:
// * Ausgabefunktion:
// - die eingegebenen Daten werden dann oben auf dem Bild einer Kreditkarte angezeigt
// - legt man weitere Kreditkarten an, werden sie nebeneinander über dem Formular angezeigt
// - als Hintergrundbild(er) kannst du Bilder verwenden, die echten Kreditkarten ähneln
// * Löschfunktion:
// - klickt man doppelt auf eine Kreditkarte, wird sie gelöscht
