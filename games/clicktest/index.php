<!doctype html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Click test</title>
    <link rel="stylesheet" href="style.css" type="text/css">
    <script src="script.js" defer></script>
    <script src="../../scripts/background.js" defer></script>
    <link rel="stylesheet" href="../../styles/background.css" type="text/css">
</head>
<body id="body" onload="enable(); dots(); background(); interval()">
<div id="gradient"></div>
<button onclick="choose(0)" id="five"> czas: 5sek</button>
<button onclick="choose(1)" id="ten"> czas: 10sek</button>
<button onclick="choose(2)" id="fiften"> czas: 15sek</button>
<button onclick="choose(3)" id="threeten"> czas: 30sek</button>
<button onclick="clickd()">klikaj jak najszybciej</button>
<button onclick="start()">zaczynajmy</button>
<div id="wypisz">ilosc kliknięć:</div>
<div id="many">wynik kliknięć na sekunde:</div>

</body>
</html>
