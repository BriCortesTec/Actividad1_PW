function calcular(){
    //capturar lo que el usuario escribe
    let cadena = document.getElementById("entrada").value;
    
    if(cadena.trim() === "" ){
        alert("Por favor, ingresa números separados por comas");
        return;
    }

    //convertir la cadena en arreglo de números
    let numeros = cadena.split(",").map(num => Number(num.trim()));
    //validar que TODOS sean números
    if(numeros.some(isNaN)){
        alert("Verifique que sean números seperados por comas");
        return;
    }

    //calcular mayor,menor y promdedio
    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let suma = numeros.reduce((acc,value) => acc + value,0);
    let promedio = suma / numeros.length;

    //mostrar los resultados
    document.getElementById("mayor").value = mayor;
    document.getElementById("menor").value = menor;
    document.getElementById("promedio").value = promedio.toFixed(2);
}