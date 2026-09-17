function verificarEdad(){
    //capturar lo que el usuario escribio
    var numE = document.getElementById("edad").value;

    //validación de no estar vacio y que sea positivo
    if(numE == "" || numE<=0 ){
        alert("Ingresa un número y positivo");
        return;
    }

    //obtener el campo resultado
    var resultado = document.getElementById("resultado");

    if( numE >= 18){
        resultado.value = "Puedes votar";
    }else{
       resultado.value = "No puedes votar";
    }
    
}