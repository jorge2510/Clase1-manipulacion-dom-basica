const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#btnCalcular');
const btnResultado = document.querySelector('#result');
const formulario = document.querySelector('#form');

// Se usa el evento onClick en el boton para poder interactuar en ese momento, 
// para eso se crea una funcion 
// en el archivo jss
formulario.addEventListener('submit', btnOnclick);

function  btnOnclick(event)
{
    event.preventDefault();
    const suma = input1.value + input2.value;
    btnResultado.innerText ='Resultado es: ' + suma;
};