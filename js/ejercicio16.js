// Referencias a los elementos del DOM
const inputNumero1 = document.getElementById("numero1");
const inputNumero2 = document.getElementById("numero2");
const inputResultado = document.getElementById("resultado");

// Funciones flecha para cada operación
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";

// Función principal: recibe la operación y decide qué función flecha llamar
function calcularOperacion(operacion) {
  const texto1 = inputNumero1.value.trim();
  const texto2 = inputNumero2.value.trim();

  // Validar que los campos no estén vacíos
  if (texto1 === "" || texto2 === "") {
    Swal.fire({
      icon: "error",
      title: "Campos incompletos",
      text: "Por favor ingresa ambos números."
    });
    return;
  }

  const numero1 = Number(texto1);
  const numero2 = Number(texto2);

  // Validar que ambos valores sean números válidos
  if (isNaN(numero1) || isNaN(numero2)) {
    Swal.fire({
      icon: "error",
      title: "Valor inválido",
      text: "Ambos campos deben contener números válidos."
    });
    return;
  }

  let resultado;

  switch (operacion) {
    case "suma":
      resultado = sumar(numero1, numero2);
      break;
    case "resta":
      resultado = restar(numero1, numero2);
      break;
    case "multiplicacion":
      resultado = multiplicar(numero1, numero2);
      break;
    case "division":
      resultado = dividir(numero1, numero2);
      break;
    default:
      resultado = "Operación no válida";
  }

  // Si la división por cero devolvió un mensaje de error, avisar con SweetAlert2
  if (resultado === "Error: División por cero") {
    Swal.fire({
      icon: "error",
      title: "División por cero",
      text: "No se puede dividir entre cero."
    });
    return;
  }

  inputResultado.value = resultado;
}