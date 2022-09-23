
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const selects = document.querySelectorAll('#formulario select');
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Letras y espacios, pueden llevar acentos.
	//password: /^.{4,12}$/, // 4 a 12 digitos.
	password:/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
	//// Deberá tener letras mayúsculas, minúsculas, un número y un carácter especial y 8 caracteres.
			
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    foto_perfil:/(.jpg|.jpeg|.png|.gif)$/i //.jpeg/.jpg/.png/.gif only.
};

const campos ={
    firstname: false,
    lastname: false,
    user_name: false,
    email: false,
    password1: false,
    password: false,
    category_id: false,
    foto_perfil: false,
}

const validarFormulario = (e) => {

    switch (e.target.name){
        case "firstname":
            validarCampo(expresiones.nombre, e.target, e.target.name);
        break;
        case "lastname":
            validarCampo(expresiones.nombre, e.target, e.target.name);
        break;
       /*  case "user_name":
            validarCampo(expresiones.nombre, e.target, e.target.name);
        break; */
        case "email":
            validarCampo(expresiones.correo, e.target, e.target.name);
        break;
        case "foto_perfil":
            validarCampo(expresiones.foto_perfil, e.target, e.target.name);
        break;
         case "category_id":
             //  console.log(e)
               validarCategoria(e.target, e.target.name);
         break;
        case "password1":
            validarCampo(expresiones.password, e.target, e.target.name);
        break;
        case "password":
            
            validarPw();
        break;
    }
}

const validarCampo = (expresion, input, campo ) => {
    if(expresion.test(input.value)){
        document.getElementById(`group__${campo}`).classList.remove('is-invalid')
        document.getElementById(`group__${campo}`).classList.add('is-valid')
        document.querySelector(`#group__${campo}-error`).classList.remove('mostrar')
        document.querySelector(`#group__${campo}-error`).classList.add('ocultar')
    
        campos[campo] = true;
    } else {
        document.getElementById(`group__${campo}`).classList.add('is-invalid')
        document.getElementById(`group__${campo}`).classList.remove('is-valid')
        document.querySelector(`#group__${campo}-error`).classList.remove('ocultar')
        document.querySelector(`#group__${campo}-error`).classList.add('mostrar')

        campos[campo] = false;               
    }
}

const validarPw = () => {
     inputPw1 = document.getElementById('group__password1');
     inputPw2 = document.getElementById('group__password');
        
    if ( inputPw1.value !== inputPw2.value){
        
        document.getElementById('group__password').classList.add('is-invalid')
        document.getElementById('group__password').classList.remove('is-valid')
        document.getElementById("error").classList.add("mostrar");
        document.getElementById("ok").classList.add("ocultar");

        campos['password'] = false;        
    } else {
        document.getElementById('group__password').classList.remove('is-invalid')
        document.getElementById('group__password').classList.add('is-valid')
        
        document.getElementById("error").classList.remove("mostrar");
      // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");
 
        campos['password'] = true;    
    }
}

const validarCategoria = () => {
    const categoria = document.getElementById('group__category_id')
    if (categoria.value == 0 || categoria.value== ""){
        document.getElementById('group__category_id').classList.add('is-invalid')
        document.getElementById('group__category_id').classList.remove('is-valid')
        document.querySelector('#group__category_id-error').classList.remove('ocultar')
        document.querySelector('#group__category_id-error').classList.add('mostrar')
        campos['category_id'] = false;        
    } else {
        document.getElementById('group__category_id').classList.remove('is-invalid')
        document.getElementById('group__category_id').classList.add('is-valid')
        document.querySelector('#group__category_id-error').classList.remove('mostrar')
        document.querySelector('#group__category_id-error').classList.add('ocultar')
        campos['category_id'] = true;    
   
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})
selects.forEach((select) => {
    select.addEventListener('keyup', validarFormulario)
    select.addEventListener('blur', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //const terminos = document.getElementById('terminos') terminos.check en el if para validar terminos y condiciones
    if (campos.firstname && campos.lastname && campos.category_id && campos.email  && campos.password ){
        formulario.submit()
    }
})

