<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Zahlenratespiel</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        input { width: 50px; }
        button { margin-left: 10px; }
        #message { margin-top: 20px; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Zahlenratespiel</h1>
    <p>Rate die Zahl zwischen 1 und 100:</p>
    <input type="number" id="guess" min="1" max="100">
    <button onclick="checkGuess()">Raten</button>
    <p id="message"></p>

    <script src="script.js" defer></script>
</body>
</html>
