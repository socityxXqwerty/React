// Variables y constantes

// const son variables que no cambian su valor
// let son variables que pueden cambiar su valor

const nombre = "Juan";
const apellido = "Pérez";

let valorDado = 5;
valorDado = 4; // Se puede cambiar el valor de la variable

// var No se recomienda usar var, ya que es una variable global y puede causar problemas de alcance
if (true) {

  const nombre = "Pedro"; // Se puede volver a declarar la variable con el mismo nombre, pero no se puede cambiar su valor
  const apellido = "Gómez"; // Se puede volver a declarar la variable con el mismo nombre, pero no se puede cambiar su valor
  console.log(valorDado); // 6
}

console.log(valorDado);

