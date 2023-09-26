let divprincipal = document.getElementById('refugiomenu__cards');
let refugioLista;
let tempstorlist;
cargarDog();
var refugio = {
    "id": this.id,
    "category": this.category,
    "nombre": this.nombre,
    "descripcion": this.descripcion,
    "imagenref": this.imagenref,
    "ubicacion": this.ubicacion
  };
  
  
//Traigo los datos del localstorage y lo pareo para poder manipularlo.
refugioLista = JSON.parse(localStorage.getItem("Lista de Refugios")) || [];


const mostrarRefugios = () => {
    let tempstor = refugioLista;
    tempstorlist = [];
    divprincipal.innerHTML = "";

    //Itero todo el arreglo que tiene los datos obtenidos del localstorage y los convierto en un objeto
    for(const objeto of tempstor){
        tempstorlist.push(new Refugio(objeto));
    }

   //Por cada objeto que hay dentro de el nuevo arreglo creo el contenido html y lo muestro
    for(const refu of tempstorlist){
        console.log(refu);
        let newdiv = document.createElement('div');
        newdiv.className = "refugiomenu__cards-card";
        newdiv.innerHTML =     `<div class="category">${refu.category}</div>
        <h3>${refu.nombre}</h3>
        <img src="${refu.imagenref}">
        <p>${refu.descripcion}</p>
        <h4>Ubicación</h4>
        <img src="${refu.ubicacion}" alt="foto de mapa del refugio">
        <a href="./refugiocard.html">
            <div class="btn">
                <img src="../content_edit/img/icons/pata_btn.png" alt="Icono pata de perro">
                <h4>Quiero Ayudar</h4>
            </div>
        </a>`;
       
        divprincipal.appendChild(newdiv);
    }
}
mostrarRefugios();







