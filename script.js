let randomNumber;
let attempts = 0;
let timer;
let timeLeft = 30; // Startzeit in Sekunden
let highscore = localStorage.getItem('highscore') || Infinity; // Highscore aus LocalStorage holen

// Funktion zum Starten eines neuen Spiels
function startNewGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Zufallszahl zwischen 1 und 100
    attempts = 0; // Versuche zurücksetzen
    timeLeft = 30; // Timer auf 30 Sekunden zurücksetzen
    document.getElementById('timer').textContent = "Zeit: 30s"; // Timer zurücksetzen
    document.getElementById('message').textContent = ""; // Nachricht zurücksetzen
    document.getElementById('guess').value = ""; // Eingabefeld zurücksetzen
    document.getElementById('submit').disabled = false; // Button aktivieren
    document.getElementById('new-game').disabled = true; // 'Neues Spiel' deaktivieren
}

// Funktion für den Timer
function startTimer() {
    timer = setInterval(function() {
        timeLeft--; // Zeit verringern
        document.getElementById('timer').textContent = "Zeit: " + timeLeft + "s"; // Timer anzeigen

        if (timeLeft <= 0) {
            clearInterval(timer); // Timer stoppen
            document.getElementById('message').textContent = "Zeit abgelaufen! Du hast verloren!";
            document.getElementById('submit').disabled = true; // Button deaktivieren
            if (attempts < highscore) {
                highscore = attempts;
                localStorage.setItem('highscore', highscore); // Highscore speichern
            }
            document.getElementById('highscore').textContent = "Bester Versuch: " + highscore;
        }
    }, 1000); // Alle 1 Sekunde
}

// Funktion, um die Eingabe zu überprüfen
function checkGuess() {
    let guess = parseInt(document.getElementById('guess').value); // Eingabewert

    if (isNaN(guess)) {
        document.getElementById('message').textContent = "Bitte gib eine gültige Zahl ein!";
        return;
    }

    if (guess === randomNumber) {
        clearInterval(timer); // Timer stoppen
        document.getElementById('message').textContent = "Richtig geraten!";
        document.getElementById('submit').disabled = true; // Button deaktivieren
        if (attempts < highscore) {
            highscore = attempts;
            localStorage.setItem('highscore', highscore); // Highscore speichern
        }
        document.getElementById('highscore').textContent = "Bester Versuch: " + highscore;
    } else {
        document.getElementById('message').textContent = guess < randomNumber ? "Zu klein, versuche eine größere Zahl!" : "Zu groß, versuche eine kleinere Zahl!";
        attempts++; // Versuche erhöhen
    }
}

// Event-Listener für den Raten-Button
document.getElementById('submit').addEventListener('click', function() {
    // Timer starten, wenn der Button zum ersten Mal gedrückt wird
    if (timeLeft === 30) {
        startTimer();
    }
    checkGuess();
});

// Event-Listener für den Neuen Spiel-Button
document.getElementById('new-game').addEventListener('click', startNewGame);

// Beim Laden der Seite ein neues Spiel starten
window.onload = function() {
    startNewGame();
};
