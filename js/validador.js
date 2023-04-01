$("#formulario1").validate({
    rules: {
        "txtEmail": {
            required: true,
            email: true
        },
        "txtNombre": {
            required: true,
            minlength: 7
        },
        "txtApellidos": {
            required: true,
            minlength: 7
        },
        "txtDireccion": {
            required: true,
            minlength: 10
        },
        "txtComentarios": {
        required: true,
        minlength: 10
        }

        
    }, 
    messages: {
        "txtEmail": {
            required: 'Ingrese email!',
            email: 'No cumple el formato'
        },
        "txtNombre": {
            required: 'Ingrese Nombres!',
            minlength: 'Minimo 7 caracteres'
        },
        "txtApellidos": {
            required: 'Ingrese Apellidos!',
            minlength: 'Minimo 7 caracteres'
        },
        "txtDireccion": {
            required: 'Ingrese Direccion!',
            minlength: 'Minimo 10 caracteres'
        },
        "txtComentarios": {
            required: 'Ingrese Comentarios!',
            minlength: 'Minimo 10 caracteres'
        }
    } 

});