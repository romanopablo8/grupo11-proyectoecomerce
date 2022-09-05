
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const selects = document.querySelectorAll('#formulario select');
const textareas= document.querySelectorAll('#formulario textarea');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    descripcion:/^[a-zA-ZÀ-ÿ\s]{20,25}$/, // Letras y espacios, pueden llevar acentos +20.
	reference:/^[0-9\-]{4,16}$/, //  numeros y guion  
    password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	precio: /^\d{1,14}$/, // precio 1 a 14 digitos.
    descuento: /^\d{1,2}$/, // precio 1 a 2 digitos.
    image:/(.jpg|.jpeg|.png|.gif)$/i, //.jpeg/.jpg/.png/.gif only.
    descripcionfull:/^[a-zA-ZÀ-ÿ\s]{20,200}$/, // Letras y espacios, pueden llevar acentos +20.
};

const campos ={
    name: false,
    descripcion: false,
    category_id: false,
    image: false,
    color_id: false,
    price: false,
    discount: false,
    reference: false,
    descripcionfull: false

}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "name":
            validarCampo(expresiones.nombre, e.target, e.target.name);
        break;
        case "descripcion":
            validarCampo(expresiones.descripcion, e.target, e.target.name);
        break;
        case "category_id":
            console.log(e)
            validarCategoria(e.target, e.target.name);
        break;
        case "color_id":
            validarColor(e.target, e.target.name);
        break;
        case "image":
            validarCampo(expresiones.image, e.target, e.target.name);
        break;
        case "price":
            validarCampo(expresiones.precio, e.target, e.target.name);
        break;
        case "discount":
            validarCampo(expresiones.descuento, e.target, e.target.name);
        break;
        case "reference":
            validarCampo(expresiones.usuario, e.target, e.target.name);
        break;
        case "descripcionfull":
            validarCampo(expresiones.descripcion, e.target, e.target.name);
        break;
    }
}

const validarCampo = (expresion, input, campo ) => {
    if(expresion.test(input.value)){
        document.getElementById(`group__${campo}`).classList.remove('is-invalid')
        document.getElementById(`group__${campo}`).classList.add('is-valid')
      /*   document.querySelector(`#group__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#group__${campo} i`).classList.remove('fa-times-circle') */
        campos[campo] = true;
    } else {
        document.getElementById(`group__${campo}`).classList.add('is-invalid')
        document.getElementById(`group__${campo}`).classList.remove('is-valid')
    /*     document.querySelector(`#group__${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#group__${campo} i`).classList.remove('fa-check-circle')  */
        campos[campo] = false;               
    }
}
const validarCategoria = () => {
    const categoria = document.getElementById('group__category_id')
    if (categoria.value == 0 || categoria.value== ""){
        document.getElementById('group__category_id').classList.add('is-invalid')
        document.getElementById('group__category_id').classList.remove('is-valid')
      
        campos['category_id'] = false;        
    } else {
        document.getElementById('group__category_id').classList.remove('is-invalid')
        document.getElementById('group__category_id').classList.add('is-valid')
    
        campos['category_id'] = true;    
   

         //alert ("Debes seleccionar una categoria")
        //categoria.blur()
    }
}
const validarColor = (input, campo) => {
    const categoria = document.getElementById('group__color_id')
    if (categoria.value == 0 || categoria.value== ""){
        document.getElementById('group__color_id').classList.add('is-invalid')
        document.getElementById('group__color_id').classList.remove('is-valid')
      
        campos['color_id'] = false;        
    } else {
        document.getElementById('group__color_id').classList.remove('is-invalid')
        document.getElementById('group__color_id').classList.add('is-valid')
    
        campos['color_id'] = true;    
    }

        //alert ("Debes seleccionar un color")
        //categoria.focus()
    
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

selects.forEach((select) => {
    select.addEventListener('keyup', validarFormulario)
    select.addEventListener('blur', validarFormulario)
})
textareas.forEach((textarea) => {
    textarea.addEventListener('keyup', validarFormulario)
    textarea.addEventListener('blur', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //const terminos = document.getElementById('terminos') terminos.check en el if para validar terminos y condiciones
    if (campos.name && campos.descripcion && campos.image && campos.category_id && campos.color_id && campos.price && campos.discount && campos.descripcionfull ){
        //formulario.reset()
        formulario.submit()
    }
})

