<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/style.css" type="text/css">
    <link rel="stylesheet" href="styles/background.css" type="text/css">
    <title>HumanBenchmark</title>
    <script src="scripts/background.js" defer></script>
</head>
<body id="body" onload="enable(); dots(); background(); interval()">
<div id="gradient"></div>
<header>
    <a href = "" class = "header_text">
        Sign up
    </a>

    <a href = "" class = "header_text">
        Log in
    </a>

</header>

<div id="kolory">
    <div class="blur" onclick="changeColor('random')"><img class="colorblock active" id="random" src="images/buttons/random.png"> RANDOM</div>
    <div class="blur" onclick="changeColor('0')"><img class="colorblock" id="red" src="images/buttons/red.png"> RED</div>
    <div class="blur" onclick="changeColor('1')"><img class="colorblock" id="green" src="images/buttons/green.png"> GREEN</div>
    <div class="blur" onclick="changeColor('2')"><img class="colorblock" id="blue" src="images/buttons/blue.png"> BLUE</div>
    <div class="blur" onclick="changeColor('3')"><img class="colorblock" id="yellow" src="images/buttons/yellow.png"> YELLOW</div>
    <div class="blur" onclick="changeColor('4')"><img class="colorblock" id="gray" src="images/buttons/gray.png"> GRAY</div>
</div>

<a href="games/aimtest/index.php" target="_blank">
    <div class="gamebox" id="aimtest">
        <div class="game-image">
            <img src="images/sus.png">
        </div>
        <div class="game-name">
            Aim test
        </div>
    </div>
</a>

<a href="games/clicktest/index.php" target="_blank">
    <div class="gamebox" id="clicktest">
        <div class="game-image">
            <img src="images/sus.png">
        </div>
        <div class="game-name">
            Click test
        </div>
    </div>
</a>

<a href="games/colortest/index.php" target="_blank">
    <div class="gamebox" id="colortest">
        <div class="game-image">
            <img src="images/sus.png">
        </div>
        <div class="game-name">
            Color perception test
        </div>
    </div>
</a>

<a href="games/typeracer/index.php" target="_blank">
    <div class="gamebox" id="typeracer">
        <div class="game-image">
            <img src="images/sus.png">
        </div>
        <div class="game-name">
            Typeracer
        </div>
    </div>
</a>

<a href="games/reaction/index.php" target="_blank">
    <div class="gamebox" id="reaction">
        <div class="game-image">
            <img src="images/sus.png">
        </div>
        <div class="game-name">
            Reaction test
        </div>
    </div>
</a>

<a href="games/colortest/index.php" target="_blank">
    <div class="gamebox" id="math">
        <div class="game-image">
            <img src="images/sus.png">
        </div>
        <div class="game-name">
            Math
        </div>
    </div>
</a>

<a href="games/onetofifty/index.php" target="_blank">
    <div class="gamebox" id="onetofifty">
        <div class="game-image">
            <img src="images/sus.png">
        </div>
        <div class="game-name">
            1 to 50
        </div>
    </div>
</a>

<a href="games/timetest/index.php" target="_blank">
    <div class="gamebox" id="timetest">
        <div class="game-image">
            <img src="images/sus.png">
        </div>
        <div class="game-name">
            Time test
        </div>
    </div>
</a>

<a href="games/mousetest/index.php" target="_blank">
    <div class="gamebox" id="mousetest">
        <div class="game-image">
            <img src="images/sus.png">
        </div>
        <div class="game-name">
            Mouse test
        </div>
    </div>
</a>

<footer>
    Stopka
</footer>
<?php
require("php/login.php")
?>
</body>
</html>