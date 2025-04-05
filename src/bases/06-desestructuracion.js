//Desestrucuturacion
//Asignacion desestructurante
const persona = {
  nombre: "Juan",
  edad: 30,
  clave: "Ironman",
};
//Extrae lo que hay dentro de persona
//const { nombre, edad, clave } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

// se puede añadir un atributo nuevo
//const { nombre, edad, rango = "capitan" } = persona;
const useContext = ( {clave, nombre, edad, rango = 'capitan'  }) => {

//console.log(nombre, edad)
 return{
  nombreClave: nombre,
  anios: edad,
  latlng: {
    lat: 14.123,
    lng: -12.123,
  },
 }


}


const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
