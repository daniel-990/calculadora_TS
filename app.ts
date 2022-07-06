import { Calculadora } from "./models/Calculadora";

//numeros
const numerosAndBtn = document.getElementsByClassName("btn-calculadora");
//resultado
const resultado = document.getElementById("resultado") as HTMLInputElement;
//igual
const igual = document.getElementById("igual") as HTMLInputElement;
//borrar
const borrar = document.getElementById("borrar") as HTMLInputElement;
//historial
const historial = document.getElementById("historial") as HTMLBodyElement;

for (let i = 0; i < numerosAndBtn.length; i++) {
    const element = numerosAndBtn[i].attributes[2].nodeValue;
    //boton
    const boton = document.getElementById(`dato_${element}`) as HTMLButtonElement;
    //funcion
    const operar = () => resultado.value += boton.value;
    //accion del boton click
    boton.addEventListener('click', operar);
}

const Operaciones = () =>{
    resultado.value = eval(resultado.value);
    let numeroId : number = 0;
    const maquina: Calculadora = {
        nombreOperacion: resultado.value,
        operacion: eval(resultado.value)
    }
    historial.innerHTML += `
        <div>
            <p>resultado ${numeroId+=1}: ${maquina.nombreOperacion}</p>
        </div>
    `;
}
const Borrar = () => {
    resultado.value = "";
    // historial.innerHTML = "historial de valores...";
}

igual.addEventListener('click', Operaciones);
borrar.addEventListener('click', Borrar);