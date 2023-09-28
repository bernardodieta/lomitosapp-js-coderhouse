
class Cardrefu{
    constructor(id,category,nombre,descripcion,imagenref,ubicacion){
        this.id = id;
        this.category = category;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagenref = imagenref;
        this.ubicacion = ubicacion;
    }
}
const refugio1 = new Cardrefu
function guardarXML(){
    var id = document.getElementById("id").value;
    var category = document.getElementById("category").value;
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var imagenref = document.getElementById("imagenref").value;
    var ubicacion = document.getElementById("ubicacion").value;

    var xmlDoc = document.implementation.createDocument("","",null);

    var datos = document.createElement("datos");

    var idElement = xmlDoc.createElement("id");
    var categoryElement = xmlDoc.createElement("category");
    var nombreElement = xmlDoc.createElement("nombre");
    var descripcionElement = xmlDoc.createElement("descripcion");
    var imagenrefElement = xmlDoc.createElement("imagenref");
    var ubicacion = xmlDoc.createElement("ubicacion");

    xmlDoc.appendChild(datos);
    var xmlString = new XMLSerializer().serializeToString(xmlDoc);
}





var id = document.getElementById("id").value;
var category = document.getElementById("category").value;
var nombre = document.getElementById("nombre").value;
var descripcion = document.getElementById("descripcion").value;
var imagenref = document.getElementById("imagenref").value;
var ubicacion = document.getElementById("ubicacion").value;








document.addEventListener("DOMContentLoaded", function () {
    let divprincipal = document.getElementById('refugiomenu__cards');

    for (refu of refuCard) {
        let nuevo = refu;
        let newdiv = document.createElement('div');
        newdiv.className = "refugiomenu__cards-card";
        newdiv.innerHTML =     `<div class="category">${this.category}</div>
        <h3>${this.nombre}</h3>
        <img src="${this.imagenref}">
        <p>${this.descripcion}</p>
        <h4>Ubicación</h4>
        <img src="${this.ubicacion}" alt="foto de mapa del refugio">
        <a href="./refugiocard.html">
            <div class="btn">
                <img src="../content_edit/img/icons/pata_btn.png" alt="Icono pata de perro">
                <h4>Quiero Ayudar</h4>
            </div>
        </a>`;
        
        divprincipal.appendChild(newdiv);
    }

}); 


document.addEventListener("DOMContentLoaded", function () {
    let divprincipal = document.getElementById('menuadopcion__cards');
  
    for (let dogcard of dogCard) {
      let nuevo = dogcard;
      let newdiv = document.createElement('div');
      newdiv.className = "menuadopcion__cards-card";
      newdiv.innerHTML = `<img src="${nuevo.imagen}" alt="Foto de Perro en adopcion">
        <div class="category">${nuevo.category}</div>
        <div class="headercard">
            <h3>${nuevo.nombre}</h3>
            <div class="card-icon-container">
                <img src="../content_edit/img/section3/carusel/corazon.png"
                    alt="icono de corazon para dar Like a publicacion de perro" class="card-icon">
                <img src="../content_edit/img/section3/carusel/compartir.png"
                    alt="icono para compartir publicacion mediante link" class="card-icon">
                <img src="../content_edit/img/section3/carusel/guardar.png"
                    alt="icono para guardar publicacion" class="card-icon">
            </div>
        </div>
        <p>${nuevo.descripcion}
                            <br><br>
                            <span class="spanbold">${nuevo.tamaño} - ${nuevo.sexo} - ${nuevo.edad} </span>
                        </p>
                        <h4>Refugio: ${nuevo.refugio}</h4>
                        <a href="./adopcioncard.html">
                            <div class="btn__card">Adoptar</div>
                        </a>`;
  

      divprincipal.appendChild(newdiv);
    }
  });






  ///////////////////////////////////////////////////

  let divprincipal2 = []
let dogLista;
let tempdogLista;


var dogcard = {
    "id": this.id,
    "category": this.category,
    "nombre": this.nombre,
    "descripcion": this.descripcion,
    "tamaño": this.tamaño,
    "sexo": this.sexo,
    "edad": this.edad,
    "refugio": this.refugio,
    "imagen": this.imagen
};

dogLista = JSON.parse(localStorage.getItem("Lista de Tarjeta de Perros")) || [];



const mostrarDogcard = () => {
    let divprincipal2 = document.getElementById('menuadopcion__cards');
    let templist = dogLista;
    tempdogLista = [];
    divprincipal2.innerHTML = "";

    for (const obj of templist) {
        tempdogLista.push(new Dogcard(obj));
    }

    for (const dog of tempdogLista) {
        let newdiv = document.createElement("div");
        newdiv.className = "menuadopcion__cards-card";
        newdiv.id="menuadopcion__cards-card";
        newdiv.innerHTML = `
        <img src="${dog.imagen}" alt="Foto de Perro en adopcion">
        <div class="category">${dog.category}</div>
        <div class="headercard">
        <h3>${dog.nombre}</h3>
        <div class="card-icon-container">
        <img src="../content_edit/img/section3/carusel/corazon.png"
        alt="icono de corazon para dar Like a publicacion de perro" class="card-icon">
        <img src="../content_edit/img/section3/carusel/compartir.png"
        alt="icono para compartir publicacion mediante link" class="card-icon">
        <img src="../content_edit/img/section3/carusel/guardar.png"
        alt="icono para guardar publicacion" class="card-icon">
        </div>
        </div>
        <p>${dog.descripcion}
        <br><br>
        <span class="spanbold">${dog.tamaño} - ${dog.sexo} - ${dog.edad} </span>
        </p>
        <h4>Refugio: ${dog.refugio}</h4>
        <a href="./adopcioncard.html">
        <div class="btn__card">Adoptar</div>
        </a>`;
        divprincipal2.appendChild(newdiv);
        }
}
mostrarDogcard();




///////////////////////////


let content = document.getElementById('adopcion__description');
    let nuevo = document.createElement('div');
    nuevo.className = 'adopcion__description-box'
    nuevo.innerHTML = `
    <div class="category">Adopcion - Perros</div>
    <h2>Buddy</h2>
    <h3>${objetoEncontrado}</h4>
        <h3>${objetoEncontrado}</h4>
            <h3>Esterilizado</h4>
        </div>
        <div class="adopcion__description-text">
            <p>Hace unos meses, un grupo de rescatistas voluntarios recibió un desgarrador llamado de
                auxilio.
                Un perro abandonado y maltratado había sido avistado en las afueras de la ciudad, luchando
                por
                sobrevivir en condiciones desoladoras. Conmovidos por su situación, se dirigieron de
                inmediato
                al lugar. Al llegar, encontraron a un perro desnutrido y cubierto de heridas, pero su mirada
                aún
                mostraba una chispa de esperanza.</p><br>
            <p>
                Con cuidado y amor, los rescatistas colocaron al perro en una manta caliente y lo llevaron a
                un
                refugio de animales cercano. Allí, el personal del refugio se dedicó a brindarle los
                cuidados
                médicos que tanto necesitaba. El perro, que pronto fue llamado "Buddy", fue sometido a
                tratamientos veterinarios, recibió comida nutritiva y se le dio un lugar seguro y cálido
                para
                descansar. A medida que los días pasaban, Buddy comenzó a recuperarse lentamente, mostrando
                una
                confianza renovada en los seres humanos a pesar de su pasado traumático. El refugio,
                consciente
                de su increíble transformación, se propuso encontrarle un hogar amoroso y permanente, donde
                pudiera comenzar una nueva vida llena de cariño y cuidado.
            </p>
        </div>
        `;
    content.appendChild(nuevo);
    console.log(nuevo);
