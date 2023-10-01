let divprincipal2 = [];
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
    let divprincipal2 = document.querySelector('#menuadopcion__cards');
    let templist = dogLista;
    tempdogLista = [];
    divprincipal2.innerHTML = ``;

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

        const adoptButton = newdiv.querySelector('.btn__card');
        adoptButton.addEventListener('click', () => {
            JSON.stringify(sessionStorage.setItem('iddog', dog.id));
        });

        divprincipal2.appendChild(newdiv);
    }
}

mostrarDogcard();
