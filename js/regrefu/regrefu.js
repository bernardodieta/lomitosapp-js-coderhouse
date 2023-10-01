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
    let nombrerefu = document.getElementById("nombrerefu").value;
    let ubi = document.getElementById("ubi").value;
    let nombrevet = document.getElementById("nombrevet").value;  
    let apellvet = document.getElementById("apellvet").value;
    let celvet = document.getElementById("celvet").value;
    let cp = document.getElementById("cp").value;
    let ciudad = document.getElementById("ciudad").value;
    let img1 = document.getElementById("img1").value;
    let img2 = document.getElementById("img2").value;
    let img3 = document.getElementById("img3").value;
    let img4 = document.getElementById("img4").value;
    let img5 = document.getElementById("img5").value;
    let bank = document.getElementById("bank").value;
    let bankc = document.getElementById("bankc").value;
    let titularcuenta = document.getElementById("titularcuenta").value;
    let descripcion = document.getElementById("descripcion").value;

    e.preventDefault();

    var refugio = {
        "id": refu.id,
       "nombre": refu.nombre,
        "apellido": refu.apellido,
        "email": refu.email,
        "candog": refu.candog,
        "canper": refu.canper,
        "nombrerefu": refu.nombrerefu,
        "dire": refu.dire,
        "ubi": refu.ubi,
        "cp": refu.cp,
        "ciudad": refu.ciudad,
        "estado": refu.estado,
        "img1": refu.img1,
        "img2": refu.img2,
        "img3": refu.img3,
        "img4": refu.img4,
        "img5": refu.img5,
        "bank": refu.bank,
        "bankc": refu.bankc,
        "titularcuenta": refu.titularcuenta,
        "nombrevet": refu.nombrevet,
        "apellvet": refu.apellvet,
        "celvet": refu.celvet,
        "vet": refu.vet,
        "descripcion": refu.descripcion
      };

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




