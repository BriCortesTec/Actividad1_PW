let estudiantes = [];//arreglo que almacenará los objetos estudiante

const inputNombre = document.getElementById("nombreEstudiante");
const inputCalificacion = document.getElementById("calificacionEstudiante");
const listaEstudiantes = document.getElementById("listaEstudiantes");
const mensajeError = document.getElementById("mensajeError");

const inputPromedio = document.getElementById("promedio");
const inputMasAlta = document.getElementById("masAlta");
const inputMasBaja = document.getElementById("masBaja");

//agregar un nuevo estudiante al arreglo
document.getElementById("btnAgregar").addEventListener("click", function () {
    const nombre = inputNombre.value.trim();
    const calificacionTexto = inputCalificacion.value.trim();

    mensajeError.textContent = "";

    //validar que los campos no estén vacíos
    if (nombre === "" || calificacionTexto === "") {
        mensajeError.textContent = "Por favor llena ambos campos.";
        return;
    }

    //validar que solo admita texto y no números
    if( !isNaN(nombre) && nombre !== ""){
        mensajeError.textContent = "El nombre debe ser uno válido"
        return;
    }

    const calificacion = Number(calificacionTexto);

    //validar que la calificación sea un número válido
    if (isNaN(calificacion)) {
        mensajeError.textContent = "La calificación debe ser un número válido.";
        return;
    }

    //crear el OBJETO estudiante y agregarlo al arreglo
    const estudiante = { nombre: nombre, calificacion: calificacion };
    estudiantes.push(estudiante);

    //mostrar el estudiante en la lista visual
    const item = document.createElement("li");
    item.textContent = `${estudiante.nombre} - ${estudiante.calificacion}`;
    listaEstudiantes.appendChild(item);

    //limpiar campos de entrada
    inputNombre.value = "";
    inputCalificacion.value = "";
    inputNombre.focus();
});

//calcular promedio, calificación más alta y más baja
document.getElementById("btnCalcular").addEventListener("click", function () {
    mensajeError.textContent = "";

    if (estudiantes.length === 0) {
        mensajeError.textContent = "Agrega al menos un estudiante antes de calcular.";
        return;
    }

    //promedio usando reduce()
    const suma = estudiantes.reduce((total, est) => total + est.calificacion, 0);
    const promedio = suma / estudiantes.length;

    //calificación máxima y mínima usando Math.max/min con spread
    const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    //buscar el nombre del estudiante correspondiente a cada extremo
    const estudianteMasAlto = estudiantes.find(e => e.calificacion === calificacionMaxima);
    const estudianteMasBajo = estudiantes.find(e => e.calificacion === calificacionMinima);

    //mostrar resultados en los input readonly
    inputPromedio.value = promedio.toFixed(2);
    inputMasAlta.value = estudianteMasAlto.nombre;
    inputMasBaja.value = estudianteMasBajo.nombre;
});