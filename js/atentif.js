let isuser = false;
let divprincipal = document.getElementById('usermenu');
let ses = JSON.parse(sessionStorage.getItem('status'));
//let divnav = document.getElementById('ul-usermenu');

divprincipal.innerHTML = "";

function comprobar() {

    if (ses != true) {
        divprincipal.innerHTML = `
        <img src="../img/nav/1x/iconuser.png" alt="" onclick="mostrar()" class="icon_usermenu">
        <ul class="ul-usermenu" id="ul-usermenu">
            <a href="./login.html"><li>Iniciar Sesion</li></a>
            <a href="http://"><li>Registrar mi Refugio</li></a>
        </ul>
        `
        console.log('No tiene permisos para acceder');
        divprincipal.appendChild(this);
    }
    else {
        
        console.log('Usuario Logeado');
        divprincipal.innerHTML = `
        <img src="../img/nav/1x/iconuser.png" alt="" onclick="mostrar()" class="icon_usermenu">
        <ul class="ul-usermenu" id="ul-usermenu">
            <a href="./login.html"><li>Cerrar Sesion</li></a>
            <a href="http://"><li>Registrar mi Refugio</li></a>
        </ul>
        `      
        
    }
    return isuser;
}


comprobar();


