
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Letras y espacios, pueden llevar acentos.
    descripcion: /^.{4,255}$/, // descripcion 4 a 255 digitos.
	precio: /^\d{1,14}$/, // precio 1 a 14 digitos.
    descuento: /^\d{1,2}$/, // precio 1 a 2 digitos.
    
    //password: /^.{4,12}$/, // 4 a 12 digitos.
    password:/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
	//// Deberá tener letras mayúsculas, minúsculas, un número y un carácter especial y 8 caracteres.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    
};

const campos ={
    correo: false,
    password: false,
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "email":
            validarCampo(expresiones.correo, e.target, e.target.name);
        break;
        case "password":
            validarCampo(expresiones.password, e.target, e.target.name);
        break;
    }
}

const validarCampo = (expresion, input, campo ) => {
    if(expresion.test(input.value)){
        document.getElementById(`group__${campo}`).classList.remove('is-invalid')
        document.getElementById(`group__${campo}`).classList.add('is-valid')
    //    document.querySelector(`#group__${campo} i`).classList.add('fa-check-circle')
    //    document.querySelector(`#group__${campo} i`).classList.remove('fa-times-circle')
        campos[campo] = true;
    } else {
        document.getElementById(`group__${campo}`).classList.add('is-invalid')
        document.getElementById(`group__${campo}`).classList.remove('is-valid')
   //     document.querySelector(`#group__${campo} i`).classList.add('fa-times-circle')
   //     document.querySelector(`#group__${campo} i`).classList.remove('fa-check-circle')
        campos[campo] = false;               
    }
}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //const terminos = document.getElementById('terminos') terminos.check en el if para validar terminos y condiciones
    if (campos.email && campos.password ){
       // formulario.reset()
       formulario.submit()
    }
})

