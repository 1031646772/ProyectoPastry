const LoginBtn = document.getElementById('LoginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close-btn');
LoginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});
//Obteniendo imformacion de los campos

//Obteniendo el elemento form
const form=document.getElementById('formLogin');
  formLogin.addEventListener('submit', async(e) => {
    e.preventDefault();
    const usu=document.getElementById('user').value;
    const con=document.getElementById('contra').value;
      try {
        const response = await fetch('http://127.0.0.1:3000/user/pastry/Ingresar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: usu, contra: con }),
        }).then((response)=>response.json()).then((data)=>{
          console.log(data);
          message = data;
          valor=data.message
          console.log(message);
                if (valor === 'Usuario no encontrado') {
                    const contenedor_mensaje=document.getElementById("Mensi");
                    contenedor_mensaje.style.display="block";
                    const respuesta='Ups! Usuario o Contraseña Incorrectos, Reintente';
                    document.getElementById('MensajeLogin').innerHTML=respuesta;
                } 
                else {
                  var Rol=message.Rol;
                  console.log(Rol);
                    if( Rol=="Administrador"){
                      // Creando un token para cada usuario
                      let token=Math.floor(Math.random() * 10) + 1;
                      let UsuarioGlobal={
                        usuario:message.Usuario,
                        contra:message.Clave,
                        nombre:message.Nombre,
                        rol:message.Rol,
                        Token:token
                      }
                    }
                    else if( Rol=="Cliente"){
                      // Creando un token para cada usuario
                      let token=Math.floor(Math.random() * 999999) + 1;
                      let UsuarioGlobal={
                        usuario:message.Usuario,
                        contra:message.Clave,
                        nombre:message.Nombre,
                        rol:message.Rol,
                        Token:token
                      }
                     tokenUsu(token,UsuarioGlobal);
                    }
                }
                console.log(`GET ${usu} and ${con}`);
        })
      } catch (error) {
        console.error('Error en la solicitud fetch:', error);
      }
  });  

function tokenUsu(tokenR,usu){
// Codigo propio de encriptacion
 console.log(`Token en funcion ${tokenR}`);
 console.log(usu);
 const usuarioNombreConvertido=[];
 for(let i=0 ;i<usu.usuario.length;i++){
  let contador=0;
  iterador=usu.usuario[i];
  let valor;
  switch (iterador){
    case 'a':  
    valor=1 
    usuarioNombreConvertido.push(valor);
    break;
    case 'b':  
    valor=2 
    usuarioNombreConvertido.push(valor);
    break;
    case 'c':  
    valor=3 
    usuarioNombreConvertido.push(valor);
    break;
    case 'd':  
    valor=4 
    usuarioNombreConvertido.push(valor);
    break;
    case 'e':  
    valor=5 
    usuarioNombreConvertido.push(valor);
    break;
    case 'f':  
    valor=6 
    usuarioNombreConvertido.push(valor);
    break;
    case 'g':  
    valor=7 
    usuarioNombreConvertido.push(valor);
    break;
    case 'h':  
    valor=8 
    usuarioNombreConvertido.push(valor);
    break;
    case 'i':  
    valor=9 
    usuarioNombreConvertido.push(valor);
    break;
    case 'j': 
    valor=10;
    usuarioNombreConvertido.push(valor);
    break;
    case 'k': 
    valor=11;
    usuarioNombreConvertido.push(valor);
    break;
    case 'l': 
    valor=12;
    usuarioNombreConvertido.push(valor);
    break;
    case 'm': 
    valor=13;
    usuarioNombreConvertido.push(valor);
    break;
    case 'n': 
    valor=14;
    usuarioNombreConvertido.push(valor);
    break;
    case 'o': 
    valor=15;
    usuarioNombreConvertido.push(valor);
    break;
    case 'p': 
    valor=16;
    usuarioNombreConvertido.push(valor);
    break;
    case 'q': 
    valor=17;
    usuarioNombreConvertido.push(valor);
    break;
    case 'r': 
    valor=18;
    usuarioNombreConvertido.push(valor);
    break;
    case 's': 
    valor=19;
    usuarioNombreConvertido.push(valor);
    break;
    case 't': 
    valor=20;
    usuarioNombreConvertido.push(valor);
    break;
    case 'u': 
    valor=21;
    usuarioNombreConvertido.push(valor);
    break;
    case 'v': 
    valor=22;
    usuarioNombreConvertido.push(valor);
    break;
    case 'w': 
    valor=23;
    usuarioNombreConvertido.push(valor);
    break;
    case 'x': 
    valor=24;
    usuarioNombreConvertido.push(valor);
    break;
    case 'y': 
    valor=25;
    usuarioNombreConvertido.push(valor);
    break;
    case 'z': 
    valor=26;
    usuarioNombreConvertido.push(valor);
    break;
    case 'A':  
    valor=27 
    usuarioNombreConvertido.push(valor);
    break;
    case 'B':  
    valor=28 
    usuarioNombreConvertido.push(valor);
    break;
    case 'C':  
    valor=29
    usuarioNombreConvertido.push(valor);
    break;
    case 'D':  
    valor=30
    usuarioNombreConvertido.push(valor);
    break;
    case 'E':  
    valor=31
    usuarioNombreConvertido.push(valor);
    break;
    case 'F':  
    valor=32 
    usuarioNombreConvertido.push(valor);
    break;
    case 'G':  
    valor=33 
    usuarioNombreConvertido.push(valor);
    break;
    case 'H':  
    valor=34
    usuarioNombreConvertido.push(valor);
    break;
    case 'I':  
    valor=35
    usuarioNombreConvertido.push(valor);
    break;
    case 'J': 
    valor=36;
    usuarioNombreConvertido.push(valor);
    break;
    case 'K': 
    valor=37;
    usuarioNombreConvertido.push(valor);
    break;
    case 'L': 
    valor=38;
    usuarioNombreConvertido.push(valor);
    break;
    case 'M': 
    valor=39;
    usuarioNombreConvertido.push(valor);
    break;
    case 'N': 
    valor=40;
    usuarioNombreConvertido.push(valor);
    break;
    case 'O': 
    valor=41;
    usuarioNombreConvertido.push(valor);
    break;
    case 'P': 
    valor=42;
    usuarioNombreConvertido.push(valor);
    break;
    case 'Q': 
    valor=43;
    usuarioNombreConvertido.push(valor);
    break;
    case 'R': 
    valor=44;
    usuarioNombreConvertido.push(valor);
    break;
    case 'S': 
    valor=45;
    usuarioNombreConvertido.push(valor);
    break;
    case 'T': 
    valor=46;
    usuarioNombreConvertido.push(valor);
    break;
    case 'U': 
    valor=47;
    usuarioNombreConvertido.push(valor);
    break;
    case 'V': 
    valor=48;
    usuarioNombreConvertido.push(valor);
    break;
    case 'W': 
    valor=49;
    usuarioNombreConvertido.push(valor);
    break;
    case 'X': 
    valor=50;
    usuarioNombreConvertido.push(valor);
    break;
    case 'Y': 
    valor=51;
    usuarioNombreConvertido.push(valor);
    break;
    case 'Z': 
    valor=52;
    usuarioNombreConvertido.push(valor);
    break;
    case ' ':
    valor=27;
    usuarioNombreConvertido.push(valor);
    break;
    case 'ñ':
    valor=53;
    usuarioNombreConvertido.push(valor);
    break;
    case 'Ñ':
    valor=54;
    usuarioNombreConvertido.push(valor);
    break;
    default:
    valor=iterador;
    usuarioNombreConvertido.push(valor);
    break;
  }
 }
 let userEncriptado="";
 usuarioNombreConvertido.forEach(element => {
  userEncriptado=userEncriptado.toString()+element.toString();   
  console.log(element);
 });
 console.log(userEncriptado);
}
