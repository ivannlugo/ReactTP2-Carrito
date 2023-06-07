const generarNumeroAleatorio = () => Math.random();
for (let i=0;i<100;i++){
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numeroAleatorio = generarNumeroAleatorio();
    if (numeroAleatorio > 0.5) {
      resolve("¡Promesa resuelta!");
    } else {
      reject("¡Promesa rechazada!");
    }
  }, 1000);
});

miPromesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });

}

for(let i=0; i<100;i++){

  console.log("estoy despues");
}