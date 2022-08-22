
function verificarPasswords() {

    // Ontenemos los valores de los campos de contraseñas 
    password1 = document.getElementById('password1');
    password = document.getElementById('password');

    // Verificamos si las constraseñas no coinciden 
    if (password1.value != password.value) {

        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");

        return false;
    }
    
    else {

        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");

        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");

        return true;
    }

} 