const ingresar = () => {

    const em = document.getElementById('email').value;
    const pa = document.getElementById('pass').value;
    const txt = document.getElementById('alerta');
    const valEm = /^[a-zA-Z0-9]+@[a-zA-Z]{4,8}\.[a-zA-Z]{2,4}$/;
    const valPa = /^[a-zA-Z0-9]{8,15}$/;

    $(document).ready(function () {
        $('input#pass').characterCounter();
    });

    if (em == '' && pa == '') {
        // txt.innerText = 'Ingrese datos primero...';

        Swal.fire({
            // showConfirmButton: false,
            // timer: 1500,
            icon: 'warning',
            // title: 'Ingrese datos primero...',
            confirmButtonText: 'Aceptar',
            text: 'Ingrese datos primero...'
            // footer: '<a href="">Why do I have this issue?</a>'
        })

    } else if (em == '') {
        // txt.innerText = 'Ingrese un correo!';

        Swal.fire({
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            text: 'Ingrese un correo!'
        })

    } else if (pa == '') {
        // txt.innerText = 'Ingrese una contraseña!';

        Swal.fire({
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            text: 'Ingrese una contraseña!'
        })

    } else if (em != em.match(valEm) && pa != pa.match(valPa)) {
        // txt.innerText = 'Correo y contraseña inválidos!';

        Swal.fire({
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            text: 'Correo y contraseña inválidos!'
        })

    } else if (em != em.match(valEm)) {
        // txt.innerText = 'Correo inválido!';

        Swal.fire({
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            text: 'Correo inválido!'
        })

    } else if (pa != pa.match(valPa)) {
        // txt.innerText = 'Contraseña inválida!';

        Swal.fire({
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            text: 'Contraseña inválida!'
        })

    } else if (em == 'Juan@gmail.com' && pa == '12345678') {
        // txt.innerText = 'Bienvenido...';

        Swal.fire({
            showConfirmButton: false,
            timer: 1600,
            icon: 'success',
            text: 'Bienvenido...'
        })

        setTimeout(function () { window.location = "../listaUsuarios MaterializeYSweetAlert/index.html"; }, 1500)

    } else {

        Swal.fire({
            icon: 'error',
            confirmButtonText: 'Aceptar',
            text: 'Usuario sin registrar...'
        })

    }

}

const cancelar = () => {
    const em = document.getElementById('email');
    const pa = document.getElementById('pass');
    em.value = '';
    pa.value = '';
}

const salir = () => {

    Swal.fire({
        showConfirmButton: false,
        timer: 1500,
        icon: 'warning',
        text: 'Saliendo...'
    })

    setTimeout(function () { window.location = "../Login MaterializeYSweetAlert/index.html"; }, 1800)
}