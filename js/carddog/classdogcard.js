class Dogcard{
    constructor(dogcard){
        this.id = dogcard.id;
        this.category = dogcard.category;
        this.nombre = dogcard.nombre;
        this.descripcion = dogcard.descripcion;
        this.tamaño = dogcard.tamaño;
        this.sexo = dogcard.sexo;
        this.edad = dogcard.edad;
        this.refugio = dogcard.refugio;
        this.imagen = dogcard.imagen;

    }

   
    
}
const cargarDog = (dogcard) => {
    newdog = [];
    for(const card of dogCard){
        newdog.push(new Dogcard(card));
        localStorage.setItem("Lista de Tarjeta de Perros", JSON.stringify(newdog));

    }
}
cargarDog();



