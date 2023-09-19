//Accion de consulta
document.addEventListener("DOMContentLoaded", async (e) => {
  var EstadoP = "Activo";
  try {
    const container_card = document.getElementById("container_cards_productos");
    const response = await fetch('http://127.0.0.1:3000/pastel/pastry/Pasteles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Estado: EstadoP }),
    }).then((response) => response.json()).then((data) => {
      console.log(data);
      message = data;
      console.log(message);
      var contador = 0;
      if (message != null && message != "Producto no encontrado") {
        message.forEach(function (item) {
          var nuevoDiv = document.createElement("div");
          nuevoDiv.className = "Card";
          contador=contador+1
          nuevoDiv.innerHTML = `
            <button class="abrirModal" id="ver_pastelito${contador}">Ver Pastel</button>
            <div class="containerimg_pro"><img src="../Assets/Imagenes_pasteles/${item.Imagen}" class="img_pastel"></div>
            <div class="aumentar">
              <button class="Aumento1" id="aumentico${contador}"><img src="../Assets/IMG/mas-positivo-suma-simbolo-matematico.png" alt="" class="aumento1"></button>
              <input type="text" class="Cantidad" value="0" id="canti${contador}">
              <button class="Aumento2" id="dismi${contador}"><img src="../Assets/IMG/signo-menos-de-una-linea-en-posicion-horizontal.png" alt="" class="aumento2"></button>
            </div>
            <a href="productos.html?id=${item.Id_producto}nombre=${item.Nombre}desc=${item.Descripcion}imagen=${item.Imagen}estado=${item.estado}">
              <button class="boton_carrito2"><img src="../Assets/IMG/carrito-de-compras2.png" alt="" class="img_carro2"></button>
            </a>
          `;
          var modalcontent=document.createElement("div");
          modalcontent.className="modal-content";
          modalcontent.id="holis"+contador;
          modalcontent.innerHTML=`
          <span class="cerrar" id="cerri_close${contador}" >&times;</span>
          <h2>${item.Nombre}</h2>
          <img src="../Assets/Imagenes_pasteles/${item.Imagen}" class="img_pastel">
          <p class="descripcion">${item.Descripcion}</p>
          <p class="precio">${item.Precio}</p>
          <button class="botonCerrar"  id="Cerri${contador}">Cerrar</button>`;
          console.log("Todo va bien");
          var modalcontainer=document.createElement("div");
          modalcontainer.className="modal2";
          modalcontainer.id="modal3"+contador;
          container_card.appendChild(modalcontainer);
          container_card.appendChild(nuevoDiv);
          modalcontainer.appendChild(modalcontent);
          const sumar = document.getElementById("aumentico" + contador);
          const restar = document.getElementById("dismi" + contador);
          const input = document.getElementById('canti' + contador);
          const abrirModalBtn = document.getElementById("ver_pastelito" + contador);
          const modal = document.getElementById("modal3"+contador);
          const cerrarModalBtn = document.getElementById("cerri_close" + contador);
          const cerrarModal = document.getElementById("Cerri" + contador);
          // Agregar eventos solo a los elementos dentro de la tarjeta actual
          sumar.addEventListener("click", () => {
            var valorInput = parseInt(input.value);
            valorInput = isNaN(valorInput) ? 0 : valorInput;
            valorInput++;
            input.value = valorInput.toString();
          });

          restar.addEventListener("click", () => {
            var valorInput = parseInt(input.value);
            valorInput = isNaN(valorInput) ? 0 : valorInput;
            valorInput--;
            valorInput = valorInput < 0 ? 0 : valorInput;
            input.value = valorInput.toString();
          });

          abrirModalBtn.addEventListener('click', () => {
            modal.style.display = 'block';
          });

          cerrarModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
          });

          cerrarModal.addEventListener('click', () => {
            modal.style.display = 'none';
          });

          window.addEventListener('click', (event) => {
            if (event.target === modal) {
              modal.style.display = 'none';
            }
          });
        });
        console.log("Elemento creado");
      } 
      else if (message == "Producto no encontrado") {
        console.log("Error en la consulta");
      } else {
        console.log("Algo falló");
      }
    });
  } catch (Error) {
    console.log("Error en la petición fetch", Error);
  }
});
//Carrito
const abrirModal2Btn = document.getElementById('abrirModal2');
const modal2 = document.getElementById('modal2');
const container_modal = document.getElementById('container_modal2');
const cerrarModal2 = document.getElementById('cerrarModal2');
              
abrirModal2Btn.addEventListener('click', () => {
   modal2.style.display = 'flex';
    container_modal.style.display = 'flex';
});
              
container_modal.addEventListener('click', () => {
    modal2.style.display = 'none';
    container_modal.style.display = 'none';
});
              
cerrarModal2.addEventListener('click', () => {
   modal2.style.display = 'none';
   container_modal.style.display = 'none';
});
window.addEventListener('click', (event) => {
  if (event.target === modal2) {
    modal2.style.display = 'none';
    container_modal.style.display = 'none';
  }
});