## Como crear interaccion con el ususario usando js y html

Como primera paso conectamos los dos archivos; html y js
```html
<script src='./dondeEsteElArchivo'>
    <script> 
```
asi mandamos a llamar el archivo de jss en html.
Como segundo paso creamos variables en el archivos de js de cada etiqueta de html, esto con el fin de tener identificado cada etiqueta dentro de js, para poder modificar eventos.
```js 
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#btnCalcular');
const btnResultado = document.querySelector('#result');

```
Para crear un evento cuando hagamos algo sobre algun boton o hacer un click se crea una funcion en js de este tipo.
y el resultado se imprimera a traves de la etiqueta p, que hasta el momento no tiene valor.

```js
function btnOnClick(){
    const suma = input1.value + input2.value;
    btnResultado.innerText = 'Su resultado es: ' + suma;
    
} 
```
despues de tener creada la funcion lo que debemos hacer es usar la funcion AddEventListener, que lo que hace es identificar el evento que le especifiquemos a una variable especifica.

```js 
// button.addEventListener('nombre del evento (click)', 'nombre de la funcion sin parentesis');
button.addEventListener('click', btnOnclick);
```

Cuando usamos el boton dentro de una etiqueta de <form> formularios, ocurre un error comun el cual es que se recarga la pagina sin poder observar el resultado, aunque este si se ejecuta correctamente; para poder evitar esto se usa la propiedad event.preventDefault(); lo cual hace que no se ejecuten los eventos que vienen por defecto, como por ejemplo, recargar la pagina.

```js 
formulario.addEventListener('submit', btnOnclick);

function  btnOnclick(event)
{
    event.preventDefault();
    const suma = input1.value + input2.value;
    btnResultado.innerText ='Resultado es: ' + suma;
};

```

un hack para no usar el event.preventDefault() se puede especificar la funcion como tal de boton en el documento de html, ya sea butto o submit,
```html 
 <button type='button' id="btnCalcular">Calcular</button>
```
asi logramos especificar que el boton  no es un submit y asi no se recargara la pagina cada vez que hagamos click sobre el.