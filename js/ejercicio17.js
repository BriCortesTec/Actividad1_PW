const manejarTareas = (function () {
    /* "tareas" tiene SCOPE LOCAL a este closure: nadie de afuera puede tocar el arreglo directamente, solo a través de las
    funciones que retornamos abajo. */
    let tareas = [];

    //recuperar las tareas guardadas en Local Storage (JSON -> arreglo)
    function obtenerTareas() {
        const datosGuardados = localStorage.getItem("tareas");
        tareas = datosGuardados ? JSON.parse(datosGuardados) : []; //uso del JSON
        return tareas;
    }

    //guardar el arreglo de tareas en Local Storage (arreglo -> JSON) apesar de ser eliminadas
    function guardarTareas() {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    //agregar una nueva tarea y la persiste
    function agregarTarea(texto) {
        const nuevaTarea = {
        id: Date.now(),
        texto: texto
        };
        tareas.push(nuevaTarea);
        guardarTareas();
        return tareas;
    }

    //elimina una tarea por su id y persiste el cambio
    function eliminarTarea(id) {
        tareas = tareas.filter(tarea => tarea.id !== id);
        guardarTareas();
        return tareas;
    }

    //solo estas tres funciones quedan públicas; "tareas" sigue privada
    return {
        obtenerTareas,
        agregarTarea,
        eliminarTarea
    };

})();

//obtener los datos
const inputNuevaTarea = document.getElementById("nuevaTarea");
const listaTareas = document.getElementById("listaTareas");

// imprime las tareas
function renderizarTareas() {
    const tareas = manejarTareas.obtenerTareas();

    listaTareas.innerHTML = "";

    tareas.forEach(tarea => {
        const item = document.createElement("li");

        const textoTarea = document.createElement("span");
        textoTarea.textContent = tarea.texto;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.addEventListener("click", () => confirmarEliminacion(tarea.id));

        item.appendChild(textoTarea);
        item.appendChild(btnEliminar);
        listaTareas.appendChild(item);
    });
}

//pide confirmación con SweetAlert2 antes de eliminar
function confirmarEliminacion(id) {
    Swal.fire({
        title: "¿Eliminar esta tarea?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "rgb(131, 104, 138)"
    }).then((resultado) => {
        if (resultado.isConfirmed) {
        manejarTareas.eliminarTarea(id);
        renderizarTareas();
        Swal.fire({
            icon: "success",
            title: "Tarea eliminada",
            timer: 1200,
            showConfirmButton: false
        });
        }
    });
}

//agregar tarea con el botón
document.getElementById("btnAgregarTarea").addEventListener("click", () => {
    const texto = inputNuevaTarea.value.trim();

    if (texto === "") {
        Swal.fire({
        icon: "error",
        title: "Campo vacío",
        text: "Escribe una tarea antes de agregarla."
        });
        return;
    }

    manejarTareas.agregarTarea(texto);
    renderizarTareas();

    inputNuevaTarea.value = "";
    inputNuevaTarea.focus();
});

// mostrar las tareas cuando se vuelva a cargar la página   
renderizarTareas();