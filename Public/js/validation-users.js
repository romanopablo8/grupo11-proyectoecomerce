
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};

const campos ={
    firstname: false,
    lastname: false,
    user_name: false,
    email: false,
    password: false,
    category_id: false,
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "firstname":
            validarCampo(expresiones.nombre, e.target, e.target.name);
        break;
        case "lastname":
            validarCampo(expresiones.nombre, e.target, e.target.name);
        break;
        case "user_name":
            validarCampo(expresiones.nombre, e.target, e.target.name);
        break;
        case "email":
            validarCampo(expresiones.correo, e.target, e.target.name);
        break;
        // case "category_id":
        //     validarCampo(expresiones.usuario, e.target, e.target.name);
        // break;
        case "password1":
            validarCampo(expresiones.password, e.target, e.target.name);
        break;
        case "password":
            validarPw()
        break;
    }
}

const validarCampo = (expresion, input, campo ) => {
    if(expresion.test(input.value)){
        document.getElementById(`group__${campo}`).classList.remove('formulario__group-incorrect')
        document.getElementById(`group__${campo}`).classList.add('formulario__group-correct')
        document.querySelector(`#group__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#group__${campo} i`).classList.remove('fa-times-circle')
        campos[campo] = true;
    } else {
        document.getElementById(`group__${campo}`).classList.add('formulario__group-incorrect')
        document.getElementById(`group__${campo}`).classList.remove('formulario__group-correct')
        document.querySelector(`#group__${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#group__${campo} i`).classList.remove('fa-check-circle') 
        campos[campo] = false;               
    }
}

const validarPw = () => {
    const inputPw1 = document.getElementById('password1')
    const inputPw2 = document.getElementById('password')
    if ( inpputPw1.value !== inputPw2.value){
        document.getElementById(`group__password`).classList.add('formulario__group-incorrect')
        document.getElementById(`group__password`).classList.remove('formulario__group-correct')
        document.querySelector(`#group__password i`).classList.add('fa-times-circle')
        document.querySelector(`#group__password i`).classList.remove('fa-check-circle') 
        campos['password'] = false;        
    } else {
        document.getElementById(`group__password`).classList.remove('formulario__group-incorrect')
        document.getElementById(`group__password`).classList.add('formulario__group-correct')
        document.querySelector(`#group__password i`).classList.remove('fa-times-circle')
        document.querySelector(`#group__password i`).classList.add('fa-check-circle')   
        campos['password'] = true;    
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //const terminos = document.getElementById('terminos') terminos.check en el if para validar terminos y condiciones
    if (campos.firstname && campos.lastname && campos.user_name && campos.email && campos.category_id && campos.password ){
        formulario.reset()
    }
})

