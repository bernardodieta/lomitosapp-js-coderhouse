let guardar = document.getElementById("submit");
guardar = addEventListener("submit", crearmodeloRefugio);

let listaRefugios;
listaRefugios = JSON.parse(localStorage.getItem("Lista de Refugios")) || [];


function crearmodeloRefugio(e) {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let dire = document.getElementById("dire").value;
    let candog = document.getElementById("candog").value;
    let canper = document.getElementById("canper").value;
    let nombrevet = document.getElementById("nombrevet").value;
  
    let apellvet = document.getElementById("apellvet").value;
    let celvet = document.getElementById("celvet").value;
    let cp = document.getElementById("cp").value;
    let ciudad = document.getElementById("ciudad").value;
    let estado = document.getElementById("estado").value;
    let bank = document.getElementById("bank").value;
    let bankc = document.getElementById("bankc").value;
    let titularcuenta = document.getElementById("titularcuenta").value;

    e.preventDefault();


    var user = {
        "nombre": nombre,
        "apellido": apellido,
        "email": email,
        "dire": dire,
        "candog": candog,
        "canper": canper,
        "nombrevet": nombrevet,
        
        "apellvet": apellvet,
        "celvet": celvet,
        "cp": cp,
        "ciudad": ciudad,
        "estado": estado,
        "bank": bank,
        "bankc": bankc,
        "titularcuenta": titularcuenta

    }


    // let alerta = document.querySelector(".registrocompletado");
    // alerta.className = "registrocompletado activo";

    // let formulario = document.getElementById("estado");
    // formulario.className = "desactivado";
    grabarRefugio(user);

}
const grabarRefugio = (user) => {
    listaRefugios.push(new Refugio(user));
    localStorage.setItem("Lista de Refugios", JSON.stringify(listaRefugios));
    console.log(listaRefugios);
}




