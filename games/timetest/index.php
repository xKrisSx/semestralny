<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="style.css" type="text/css">
    <title>Time perception test</title>
    <link rel="stylesheet" href="../../styles/background.css" type="text/css">
    <script src="../../scripts/background.js" defer></script>
    <link rel="stylesheet" href="../../styles/style.css" type="text/css">
</head>
<body id="body" onload="enable(); dots(); background(); interval()">
<div id="gradient"></div>
<header><a>Time perception test</a></header>
<button  onclick="funkcja(0,1)" class = "header_text">1 second</button>
<button  onclick="funkcja(2,1)" class = "header_text">1 second</button>
<button  onclick="funkcja(4,2)" class = "header_text">2 seconds</button>
<button  onclick="funkcja(6,2)" class = "header_text">2 seconds</button>
<button  onclick="funkcja(8,3)" class = "header_text">3 seconds</button>
<button  onclick="funkcja(10,5)" class = "header_text">5 seconds</button>
<div id="0"></div>
<div id="2"></div>
<div id="4"></div>
<div id="6"></div>
<div id="8"></div>
<div id="10"></div>
<footer><a class="back" href="../../index.php">Strona główna</a></footer>
</body>
</html>