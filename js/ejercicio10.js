function convertir(){
    //capturar lo que el usuario escribio
    var numC = document.getElementById("numC").value;

    //validación de no estar vacio y que sea numérico
    if(numC == "" || isNaN(numC)){
        alert("Ingresa un valor NUMÉRICO en grados Celsius.");
        return;
    }

    //convertir el string a numero decimal para operar
    var celsius = parseFloat(numC);
    var fahrenheit = (celsius *  9/5) + 32;//la formula del pdf

    //
    document.getElementById("numF").value = fahrenheit.toFixed(2);
}