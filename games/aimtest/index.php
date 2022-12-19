<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="style.css" type="text/css">
    <title>Aim Test</title>
    <script src="../../scripts/background.js" defer></script>
</head>
<body id="body">

<div id="start" onclick="start()">Start</div>
<div>Poziom trudności:</div>
<div class="button diffButton active" onclick="changeDiff(0)">Łatwy</div>
<div class="button diffButton" onclick="changeDiff(1)">Średni</div>
<div class="button diffButton" onclick="changeDiff(2)">Trudny</div>
<div>Czas:</div>
<div class="button timeButton active" onclick="changeTime(0)">10</div>
<div class="button timeButton" onclick="changeTime(1)">30</div>
<div class="button timeButton" onclick="changeTime(2)">60</div>
</body>
</html>