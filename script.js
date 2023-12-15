// Genera un número aleatorio entre 1 y 10 y lo asigna a la variable 'numeroSecreto'
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Inicializa el contador de intentos en 0
let intentos = 0;

// Función que se ejecuta cuando el botón de adivinar es presionado
function adivinarNumero() {
    // Obtiene el valor ingresado en el input con el ID 'guess'
    const guess = document.getElementById('guess').value;

    // Incrementa el contador de intentos cada vez que se realiza un intento
    intentos++;

    // Verifica si el número ingresado es igual al número secreto
    if (guess == numeroSecreto) {
        // Si es correcto, muestra un mensaje de felicitaciones con el número de intentos
        document.getElementById('output').innerHTML = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
    } else {
        // Si es incorrecto, muestra un mensaje para seguir intentando
        document.getElementById('output').innerHTML = 'Incorrecto. ¡Sigue intentando!';
    }
}
