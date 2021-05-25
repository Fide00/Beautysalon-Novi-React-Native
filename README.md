# Beautysalon Novi

## Inhoudsopgave
*	[Versie](#versie)
*	[Auteur](#auteur)
*	[Inleiding](#inleiding)
*	[Licentie & copyright](#licentie-&-copyright)
*	[Benodigdheden en installatie](#Benodigdheden-en-installatie)
*	[NPM commando's](#npm-commands)

### Versie
*Versie 1.0*

### Auteur
Fide Alassi, studentnummer 800010530
[Hogeschool Novi](https://www.novi.nl/)

### Inleiding
In opdracht van Hogeschool Novi heb ik als HBO-ICT Software Development studente, de mobiele applicatie Beautysalon Novi 
in **React Native** programmeertaal ontwikkeld ten behoeve van de leerlijn Front End.
In de webapplicatie is een contactpagina gebouwd met de volgende functionaliteiten:
* Google Maps kaart
* Contactpagina

**Screenshot mobiele applicatie**

![Screenshot Contactpagina](https://i.ibb.co/mFMZFt2/React-Native-screenshot.png) 

### Licentie & copyright
© Fidaa Alassi, Hogeschool Novi

### Benodigdheden en installatie
Om de mobiele applicatie en zijn code in te zien heb je een IDE (integrated development environment) sotware pakket nodig.
Dit project is in JetBrains Webstorm ontwikkeld en is hier dus het beste compatible mee. 
De hoofdfolder genaamd Beautysalon-Novi-React-Native dient in de ontwikkelprogramma geimporteerd te worden om bij de code te kunnen.

**Benodigdheden**
* JetBrains Webstorm versie 2020.2 of hoger.
* Node.js
* Android Studio of Xcode om een emulator-simulator te openen of
* Android of iOS telefoon of tablet

**Installatie/Importeer project in Webstorm**
1. Open Webstorm.
2. Druk op File en vervolgens op Open in het menu.
3. Browse naar de projectfolder, selecteer deze en druk op de knop OK.
4. Plug jouw mobiele device in de computer of koppel de simulator aan de IDE software pakket 
(voor meer info hierover, neem contact op met de leverancier van het device).
5. Typ in de geintegreerde Terminal `npm install` en druk op enter.
6. Indien je een simulator wilt gebruiken, typ dan in de geintegreerde Terminal `react-native eject`, druk op enter en voer het volgende uit:

    A. Voor Android:
    1. Maak het bestand 'local.properties' aan in de map 'android' die zich in de rootfolder bevindt.
    2. Zet in het local.properties bestand de volgende inhoud (let op: pas de locatie aan naar jouw SDK folder, en sla deze op:
`sdk.dir=C:\\Users\\fidea\\AppData\\Local\\Android\\Sdk`
    3. Voeg de volgende tekst in het bestand `android\app\src\main\Androidmanifest.xml` toe in de laatste regel binnen de tag "application":
         `<meta-data
                 android:name="com.google.android.geo.API_KEY"
                 android:value="AIzaSyDFJN8KsV0vonVDnuMQg39pedzZxhh7rVs"
         />`
    4.Typ in de geintegreerde Terminal `npm start` en vervolgens `react-native run-android` en druk op enter.
         
    B. Voor iOS:
    1. Installeer React Native CLI met `npm install -g react-native-cli` in de Terminal.
    2. Installeer de applicatie Xcode op de computer.
        1. Open Xcode.
        2. Open Devices and Simulators.
        3. Druk op het tabblad "Simulators"
        4. Druk op het plus “+” tekentje links onderin de hoek van het venster.
        5. Kies een Simulator Naam, Device Type, en OS versie.
        6. Druk op de blauwe knop “Create”.
        
    3. Typ in de geintegreerde Terminal `react-native run-ios --simulator=”iPhone 11 Pro Max”`(let op: pas de naam en type van jouw toestel aan tussen de aanhalingstekens)
    
De mobiele applicatie wordt nu geopend.

### NPM commands
* `npm start`
* `run-android`
* `run-ios`


