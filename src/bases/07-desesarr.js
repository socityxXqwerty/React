const personajes = ["Goku", "Vegeta", "Piccolo", "Gohan", "Krillin", "Bulma", "Trunks", "Frieza", "Cell", "Majin Buu"];

//const [ , , p3] = personajes;

console.log();

const retornaArreglo = () => {
    return ["ABC", 123];
}

const [letras, numeros]= retornaArreglo();

console.log(letras, numeros);

const useState = (valor) => {
    return [valor, () => { console.log("Hola Mundo") }]
}

const [nombre, setNombre] = useState("Goku");
console.log(nombre);
setNombre();
