let randomNumber; // Deklaration der randomNumber-Variable
let attempts = 0;

// Funktion, um eine Zufallszahl zwischen 1 und 100 zu generieren
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Funktion, um das Spiel zu starten
function startNewGame() {
    randomNumber = generateRandomNumber(); // Zufallszahl generieren
    attempts = 0; // Versuche zurücksetzen
    resetTimer(); // Timer zurücksetzen
    document.getElementById('message').textContent = ""; // Nachrichten zurücksetzen
    document.getElementById('timer').textContent = "Zeit: 30s"; // Timer-Anzeige zurücksetzen
    startTimer(); // Timer starten
}

// Funktion zur Überprüfung der Eingabe
function checkGuess() {
    let guess = document.getElementById('guess').value; // Eingabewert

    if (guess == randomNumber) {
        document.getElementById('message').textContent = "Richtig geraten!";
        playCorrectSound(); // Optional: Erfolgston
        clearInterval(timer); // Timer stoppen
        saveHighscore(); // Optional: Highscore speichern
    } else {
        document.getElementById('message').textContent = "Falsch, versuche es nochmal!";
        playWrongSound(); // Optional: Fehler-Ton
        attempts++;
    }
}

// Event-Listener für den Button
document.getElementById('submit').addEventListener('click', checkGuess);

// Beim Laden der Seite wird ein neues Spiel gestartet
window.onload = function() {
    startNewGame();
}
