function convertir(){
    //capturar lo que el usuario escribio
    var numP = document.getElementById("pesos").value;

    //validación de no estar vacio y que sea numérico
    if(numP == "" || isNaN(numP) ||numP<0){
        alert("Ingresa un valor númerico y positivo");
        return;
    }

    //convertir el string a numero decimal para operar
    var pesos = parseFloat(numP);
    var dolares = (pesos /  18.18);//la formula del pdf

    //mostrar el resultado en el readonly input
    document.getElementById("dolares").value = dolares.toFixed(2) + " dólares";
}