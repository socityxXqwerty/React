const nombre = "Alejandro";
const apellido = "Herrera";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return " Hola mundo " + nombre;
}

console.log(`Este es un saludo:  ${getSaludo(nombre)}`);