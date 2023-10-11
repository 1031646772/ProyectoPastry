//Archivo js
  const registrarBtn = document.getElementById("registrarBtn");
  const modalContainer = document.getElementById("modalContainer");

  registrarBtn.addEventListener("click", function () {
      modalContainer.style.display = "flex";
  });

  modalContainer.addEventListener("click", function (event) {
      if (event.target === modalContainer) {
          modalContainer.style.display = "none";
      }
  });
 
//Obteniendo objetos Para registrar
const reg=document.getElementById('registroForm');
reg.addEventListener('submit', async (e) => {
        // Obtener los valores del formulario
        e.preventDefault();
        const user = document.getElementById('usuario').value;
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('tel').value;
        const fechaNac = document.getElementById('fechaNac').value;
        const cedula = document.getElementById('cedula').value;
        const direccion = document.getElementById('direccion').value;
        const clave = document.getElementById('clave').value;
        if (clave.length<5){
            const contenedor_mensaje=document.getElementById("Mensi2");
            contenedor_mensaje.style.display="block";
            const respuesta='Valida la clave, El tamaño por seguridad es mayor a 5 caracteres';
            document.getElementById('MensajeLogin2').innerHTML=respuesta;
        }
        else if(clave.length>13){
            const contenedor_mensaje=document.getElementById("Mensi");
            contenedor_mensaje.style.display="block";
            const respuesta='Valida la clave, El tamaño por seguridad es de maximo 13 caracteres';
            document.getElementById('MensajeLogin').innerHTML=respuesta;
        }
        else{
            await fetch('http://127.0.0.1:3000/user/pastry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usu: user,
                    contra: clave,
                    nombre: nombre,
                    telefono: telefono,
                    cedula: cedula,
                    fecha_n: fechaNac,
                    correo: correo,
                    direccion: direccion,
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                message = data.message;
                if (message === 'Usuario creado') {
                    window.location.href = 'Views/productos.html';
                } else {
                    window.location.href = 'Index.html';
                }
                console.log(`GET ${user} and ${clave}`);
            });
            modalContainer.style.display = 'none'; 
            // Cerrar el modal después de enviar el formulario
        }
        let message = '';
    });

