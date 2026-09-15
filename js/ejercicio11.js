function convertir(){
    //capturar lo que el usuario escribio
    var numK = document.getElementById("numK").value;

    //validación de no estar vacio y que sea numérico
    if(numK == "" || isNaN(numK)){
        alert("Ingresa un valor númerico.");
        return;
    }

    //convertir el string a numero decimal para operar
    var kilometros = parseFloat(numK);
    var millas = (kilometros *  0.621371);//la formula del pdf

    //mostrar el resultado en el readonly input
    document.getElementById("numM").value = millas.toFixed(5) + " millas";
}