//cuando son llaves es un objeto
const persona =  {
    nombre: "Alejandro",
    apellido: "Herrera",
    edad: 27,
    direccion: {
        ciudad: "Leon",
        zip: 123456,
        lat: 14.1234,
        lng: 34.1234
    }
};


const persona2 = {...persona};
persona2.nombre = "Tony";

console.log(persona);
console.log(persona2);