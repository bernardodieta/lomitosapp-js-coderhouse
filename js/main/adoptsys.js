function captura(dog) {
    var idBuscado = dog;
   
    // Variable para almacenar el objeto encontrado
    var objetoEncontrado = null;

    // Recorre el arreglo de objetos
    for (var i = 0; i < dogCard.length; i++) {
        if (dogCard[i].id === idBuscado) {
            objetoEncontrado = dogCard[i];
            console.log(objetoEncontrado);
            break; // Si se encuentra el objeto, se puede salir del bucle
        }
    }

    // Ahora, objetoEncontrado contiene el objeto con el ID buscado
    if (objetoEncontrado !== null) {
        console.log("Objeto encontrado:", objetoEncontrado);
    } else {
        console.log("Objeto no encontrado");
    }

}


