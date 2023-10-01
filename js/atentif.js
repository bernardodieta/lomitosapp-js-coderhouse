//let isuser = false;

let divprincipal = document.getElementById('usermenu');
let ses = JSON.parse(sessionStorage.getItem('status'));

divprincipal.innerHTML = ``;

function comprobar() {    
    if (ses != true) {        
        divprincipal.innerHTML = `
        <img src="../img/nav/1x/iconuser.png" alt="" onclick="mostrar()" class="icon_usermenu">
        <ul class="ul-usermenu" id="ul-usermenu">
            <a href="./login.html"><li>Iniciar Sesion</li></a>
            <a href="./regusers.html"><li>Registrarme</li></a>
        </ul>
        `;
        console.log('No tiene permisos para acceder');
        //console.log(divprincipal);       
        
    }
    else {
        
        console.log('Usuario Logeado');
        divprincipal.innerHTML = `<img src="../img/nav/1x/iconuser.png" alt="" onclick="mostrar()" class="icon_usermenu">
        <ul class="ul-usermenu" id="ul-usermenu">           
            <a href="./regrefugio.html"><li>Registrar mi Refugio</li></a>
            <a href="http://"><li>Editar mi perfil</li></a>
            <a href="./login.html"><li>Cerrar Sesion</li></a>
        </ul>`;       
        
    }
}

comprobar();



