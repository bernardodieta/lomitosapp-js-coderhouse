const btn_donar = document.getElementById('donativo');
const btn_visita = document.getElementById('visitas');
datosSS = JSON.parse(sessionStorage.getItem('idrefu'));
let buscar = refuCard.find(refu => refu.id === datosSS)

btn_donar.addEventListener("click", function () {

    console.log('click');
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });
      
      swalWithBootstrapButtons.fire({
        title:` Estas a un paso de enviar una donacion al refugio: ${buscar.nombrerefu}!!`,
        text: "Un representante del refugio se pondra en contacto para llevar a cabo la donación!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Enviar Solicitud de donación',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            `Tu solicitud para adoptar a: , fue enviada correctamente.`,            
            'Muy Pronto se comunicaran al celular registrado.',
            'success'
          )
        } else if (
          
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Tu solicitud fue cancelada.',
            'Lamentamos que te hayas arrepentido.',
            'error'
          )
        }
      })
})

btn_visita.addEventListener("click", function () {

    console.log('click');
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });
      
      swalWithBootstrapButtons.fire({
        title: 'Nos alegra mucho que quieras visitar nuestro refugio:!!',
        text: "Un representante del refugio se pondra en contacto para organizar una visita!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Enviar Solicitud de visita',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            `Tu solicitud para visitar el refugio fue enviada correctamente.`,            
            'Muy Pronto se comunicaran al celular registrado.',
            'success'
          )
        } else if (
          
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Tu solicitud fue cancelada.',
            'Lamentamos que te hayas arrepentido.',
            'error'
          )
        }
      })
})


