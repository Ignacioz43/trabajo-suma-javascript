function suma(){
    var num1=parseInt(document.getElementById('N1').value);
    var num2=parseInt(document.getElementById('N2').value);
    var num3=parseInt(document.getElementById('N3').value);
    var num4=parseInt(document.getElementById('N4').value);
    var num5=parseInt(document.getElementById('N5').value);

    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)){
        alert("En una o varias casillas hay un caracter que no es valido o tan solo no se ha ingresado un número. Si no desea ingresar ningun numero coloque 0 por favor, Gracias.");
    }else{
       var resultado = num1 + num2 + num3 + num4 + num5;
        alert(resultado);
    
    }
}

function borrar(){
    document.getElementById("N1").value="";
    document.getElementById("N2").value="";
    document.getElementById("N3").value="";
    document.getElementById("N4").value="";
    document.getElementById("N5").value="";
}