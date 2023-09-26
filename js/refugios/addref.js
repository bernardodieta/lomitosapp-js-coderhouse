class Refugio {
    constructor(refugio) {
        this.id = refugio.id;
        this.category = refugio.category;
        this.nombre = refugio.nombre;
        this.descripcion = refugio.descripcion;
        this.imagenref = refugio.imagenref;
        this.ubicacion = refugio.ubicacion;
    }
  
}


//Guardar datos del arreglo en el storage para tener contenido que visualizar.
// const nuevosRefu = (refugio) => {
//   newrefuList = [];
//   for( const refu of refuCard){
//     newrefuList.push(new Refugio(refu)) 
//     localStorage.setItem("Lista de Refugios", JSON.stringify(newrefuList));
//     console.log(newrefuList);
//   }
// }
// nuevosRefu();



