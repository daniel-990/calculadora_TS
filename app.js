"use strict";
exports.__esModule = true;
//numeros
var numerosAndBtn = document.getElementsByClassName("btn-calculadora");
//resultado
var resultado = document.getElementById("resultado");
//igual
var igual = document.getElementById("igual");
//borrar
var borrar = document.getElementById("borrar");
//historial
var historial = document.getElementById("historial");
var _loop_1 = function (i) {
    var element = numerosAndBtn[i].attributes[2].nodeValue;
    //boton
    var boton = document.getElementById("dato_".concat(element));
    //funcion
    var operar = function () { return resultado.value += boton.value; };
    //accion del boton click
    boton.addEventListener('click', operar);
};
for (var i = 0; i < numerosAndBtn.length; i++) {
    _loop_1(i);
}
var Operaciones = function () {
    resultado.value = eval(resultado.value);
    var numeroId = 0;
    var maquina = {
        nombreOperacion: resultado.value,
        operacion: eval(resultado.value)
    };
    historial.innerHTML += "\n        <div>\n            <p>resultado ".concat(numeroId += 1, ": ").concat(maquina.nombreOperacion, "</p>\n        </div>\n    ");
};
var Borrar = function () {
    resultado.value = "";
    // historial.innerHTML = "historial de valores...";
};
igual.addEventListener('click', Operaciones);
borrar.addEventListener('click', Borrar);
