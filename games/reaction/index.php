<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="style.css" type="text/css">
    <title>Reaction test</title>
    <link rel="stylesheet" href="../../styles/background.css" type="text/css">
    <script src="../../scripts/background.js" defer></script>
    <link rel="stylesheet" href="../../styles/style.css" type="text/css">
</head>
<body id="body" onload="enable(); dots(); background(); interval()">
<div id="gradient"></div>
<header><a>Reaction Test</a></header>

<div id="box" onclick="action()">
    <div class="button" id="start" onclick="start()">Start</div>
    <div id="text"></div> <!-- do wyśrodkowania -->
</div>

<footer><a class="back" href="../../index.php">Strona główna</a></footer>
</body>
</html>