let info = [];

window.onload = function(){

    const btn = document.getElementById('btn-enviar');
    btn.addEventListener('click', evaluar);


}


function evaluar(){
    let datos = obtenerDatos();
    console.log(datos);
    if(datos.nombre === '' || datos.telefono === '' || datos.email === '' || datos.ciudad === '' || datos.asunto === '' || datos.mensaje === ''){
        alert('Por favor completa el formulario.')
        
    }
    else{
        alert('Puedes avanzar');
        limpiarCampos();
    }
}

function obtenerDatos(){

    let datos ={
    nombre: document.getElementById('nombre').value,
    telefono: document.getElementById('tel').value,
    email: document.getElementById('email').value,
    ciudad: document.getElementById('ciudad').value,
    asunto: document.getElementById('asunto').value,
    mensaje: document.getElementById('mensaje').value
    };

    info.push(datos);
    return datos;
};

function limpiarCampos(){
    document.getElementById('nombre').value = '';
    document.getElementById('tel').value ='' ;
    document.getElementById('email').value = '';
    document.getElementById('ciudad').value = '';
    document.getElementById('asunto').value = '';
    document.getElementById('mensaje').value = '';
}