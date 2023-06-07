const app =  document.getElementById ('app')

/* 
var boton1 = document.getElementById("boton");
var nuevoboton = document.createElement("button");
nuevoboton.innerHTML ="Ivan";

boton1.appendChild(nuevoboton);

var nuevoboton2 = document.createElement("button");
nuevoboton2.innerHTML = "juan";
boton1.appendChild(nuevoboton2) */


/* var boton1 = new Boton("Botón 1");
var boton2 = new Boton("Botón 2");
boton.appendChild(boton1.botones());
boton.appendChild(boton2.botones()); */

// Clase para crear boton 
class Boton {
    constructor(texto,contenedor){ 
    this.texto = texto;
    this.contenedor = contenedor;
    }
crearBoton () {
    var contenedor = document.getElementById(this.contenedor); // se posiciona 
    var  nuevoboton = document.createElement("button");// se crea la etiqueta botton
    nuevoboton.className = "button";       
    nuevoboton.innerHTML = this.texto   // se agrega el atributo texto
    contenedor.appendChild(nuevoboton); // se vincula 
    if (this.texto == '='){
        nuevoboton.addEventListener("click",()  => calcularResultado())
    }else if (this.texto === "C"){ 
        nuevoboton.addEventListener("click", borrarResultado);
    }
    else if (this.texto === "T"){ 
            nuevoboton.addEventListener("click", cambiarColorFondo);

    }
    else{
        nuevoboton.addEventListener("click",()  => agregarResultado(this.texto))
    }
    return nuevoboton; 
    }

}

//-----------------------------------------------------------

function agregarResultado(valor) {
    document.getElementById('resultado').value += valor;
    console.log(valor)
}

function calcularResultado(){
    const resultado = document.getElementById('resultado').value;
    const calcularResultado = eval(resultado);
    document.getElementById('resultado').value = calcularResultado;
}

function borrarResultado(){
    document.getElementById('resultado').value = '';
}

function cambiarColorFondo() {
    var body = document.calculadora;
    var colorActual = calcyladora.style.backgroundColor;
    
    if (colorActual === "lightblue") {
      body.style.backgroundColor = "darkblue"; // Cambiar al color oscuro
    } else {
      body.style.backgroundColor = "lightblue"; // Cambiar al color claro
    }
}
//----------------------------------------------------------
// se instancia la clase crear boton 
var textos1 = ["T","C","/","*", "7", "8", "9","-","4","5", "6","+","1", "2", "3","="];

textos1.forEach(texto  => {
    var boton = new Boton(texto,"boton1")
    boton.crearBoton();

});
var textos2 = ["0", "."];

textos2.forEach(texto  => {
    var boton = new Boton(texto,"boton1")
    boton.crearBoton();
}); 
/* var textos3 = ["7", "8", "9","-"];

textos3.forEach(texto  => {
    var boton = new Boton(texto,"boton3")
    boton.crearBoton(); 
});*/
/* var textos4 =["T","C","/","*"]

textos4.forEach( texto => {
    var boton = new Boton(texto,"boton4")
    boton.crearBoton();
})/*  */ 