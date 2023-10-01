
let divprincipal3 = document.getElementById('refugiomenu__cards');
let refugioLista;
let tempstorlist;  
refugioLista = JSON.parse(localStorage.getItem("Lista de Tarjetas de Refugios")) || [];

const mostrarRefugios = () => {
    let tempstor = refugioLista;
    tempstorlist = [];
    divprincipal3.innerHTML = "";

 
    for(const objeto of tempstor){
        
        tempstorlist.push(new Refugio(objeto));
    }


    for(const refu of tempstorlist){
        
        let newdiv = document.createElement('div');
        newdiv.className = "refugiomenu__cards-card";
        newdiv.innerHTML =`<div class="category">${refu.category}</div>
        <h3>${refu.nombrerefu}</h3>
        <img src="${refu.img1}">
        <p>${refu.descripcion.substring(0, 114) + "..."}</p>
        <h4>Ubicación</h4>
        <img src="${refu.ubi}" alt="foto de mapa del refugio">
        <a href="./refugiocard.html">
            <div class="btn__refu">
                <img src="../content_edit/img/icons/pata_btn.png" alt="Icono pata de perro">
                <h4>Quiero Ayudar</h4>
            </div>
        </a>`;

        const ayudaButton = newdiv.querySelector('.btn__refu');
        ayudaButton.addEventListener('click', () => {
            JSON.stringify(sessionStorage.setItem('idrefu', refu.id));
        });
       
        divprincipal3.appendChild(newdiv);
    }
}
mostrarRefugios();



