//declaración de variables globales

var operando1;
var operando2;
var operando;

function init(){
    
    // creación variables locales del método init
    // representan los elementos html
    var resultado = document.getElementById('resultado');
    
    var reset = document.getElementById('reset');
    var suma = document.getElementById('+');
    var resta = document.getElementById('-');
    var mul = document.getElementById('*');
    var div = document.getElementById('/');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete =document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('0');
    
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    
     dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
     cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    
    reset.onclick = function(e){
        resetear();
    }
    
    suma.onclick = function (e){
        operando1 = resultado.textContent;
        operando = "+";
        limpiar();
    }
    
    resta.onclick = function(e){
        operando1 = resultado.textContent;
        operando = "-";
        limpiar();
    }
    
    mul.onclick = function(e){
        operando1 = resultado.textContent;
        operando = "*";
        limpiar();
    }
    
    div.onclick = function(e){
        operando1 = resultado.textContent;
        operando = "/";
        limpiar();
    }
    
    igual.onclick = function (e){
        operando2 = resultado.textContent;
        calcular();
    }
    
}

function limpiar (){
    resultado.textContent = "";
}

function resetear (){
    resultado.textContent = "";
    operando1 = 0;
    operando2 = 0;
    operando = "";
}

function calcular (){
    
    var resul = 0;
    if (operando === "+" {
        resul = parseFloat(operando1) + parseFloat(operando2); 
    } else if (operando === "-") {
        resul = parseFloat(operando1) -
            parseFloat(operando2);
    }
    
    resultado.textContent = resul;
    
}
