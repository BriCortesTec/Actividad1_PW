// areglo que almacenará los objetos estudiante
let estudiantes = [];

const inputNombre = document.getElementById("nombreEstudiante");
const inputCalificacion = document.getElementById("calificacionEstudiante");
const listaEstudiantes = document.getElementById("listaEstudiantes");
const mensajeError = document.getElementById("mensajeError");

const inputPromedio = document.getElementById("promedio");
const inputMasAlta = document.getElementById("masAlta");
const inputMasBaja = document.getElementById("masBaja");

// agregar un nuevo estudiante al arreglo
document.getElementById("btnAgregar").addEventListener("click", function () {
  const nombre = inputNombre.value.trim();
  const calificacionTexto = inputCalificacion.value.trim();

  mensajeError.textContent = "";

  // Validar que los campos no estén vacíos
  if (nombre === "" || calificacionTexto === "") {
    mensajeError.textContent = "Por favor llena ambos campos.";
    return;
  }

  const calificacion = Number(calificacionTexto);

  // Validar que la calificación sea un número válido
  if (isNaN(calificacion)) {
    mensajeError.textContent = "La calificación debe ser un número válido.";
    return;
  }

  // Crear el objeto estudiante y agregarlo al arreglo
  const estudiante = { nombre: nombre, calificacion: calificacion };
  estudiantes.push(estudiante);

  // Mostrar el estudiante en la lista visual
  const item = document.createElement("li");
  item.textContent = `${estudiante.nombre} - ${estudiante.calificacion}`;
  listaEstudiantes.appendChild(item);

  // Limpiar campos de entrada
  inputNombre.value = "";
  inputCalificacion.value = "";
  inputNombre.focus();
});

// Calcular promedio, calificación más alta y más baja
document.getElementById("btnCalcular").addEventListener("click", function () {
  mensajeError.textContent = "";

  if (estudiantes.length === 0) {
    mensajeError.textContent = "Agrega al menos un estudiante antes de calcular.";
    return;
  }

  // Promedio usando reduce()
  const suma = estudiantes.reduce((total, est) => total + est.calificacion, 0);
  const promedio = suma / estudiantes.length;

  // Calificación máxima y mínima usando Math.max/min con spread
  const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
  const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

  // Buscar el nombre del estudiante correspondiente a cada extremo
  const estudianteMasAlto = estudiantes.find(e => e.calificacion === calificacionMaxima);
  const estudianteMasBajo = estudiantes.find(e => e.calificacion === calificacionMinima);

  // Mostrar resultados en las cajas readonly
  inputPromedio.value = promedio.toFixed(2);
  inputMasAlta.value = estudianteMasAlto.nombre;
  inputMasBaja.value = estudianteMasBajo.nombre;
});