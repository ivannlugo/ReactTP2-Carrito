class Boton {
    constructor(texto,contenedor){ 
    this.texto = texto;
    this.contenedor = contenedor;
    }
crearBoton () {
    var  contenedor = document.getElementById(this.contenedor); 
    var  nuevoboton = document.createElement("button");
    nuevoboton.className = "button";       
    nuevoboton.innerHTML = this.texto   
    contenedor.appendChild(nuevoboton);
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
    var body =  document.getElementsByClassName('calculadora')[0];
    var colorActual = body.style.backgroundColor;
    console.log(colorActual)
    if (colorActual === 'rgb(34, 34, 34)') {
        body.style.backgroundColor ='#f4f4f4';
    } else { 
        body.style.backgroundColor = ' #222222'; 
    }
}



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