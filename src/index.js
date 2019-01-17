//  --Eventos del DOM--
//guardar el mensaje desde el input
const mssg = document.getElementById('mensaje1');
// toma el dato obtenido del offset
let offset = document.getElementById('offsetChoice');
//el botón cifrar guarda los valores del mensaje y offset, abre función
document.getElementById("codificar").addEventListener("click", () => {
  let mssgValue= mssg.value;
  let offsetF = offset.value;
  //volver el msj mayuscula
  let mssgMayusculas= mssgValue.toUpperCase();
window.cipher.encode(offsetF,mssgMayusculas)
//document.getElementById("mensajeUsuario").innerHTML = 'tu mensaje es ' +  resultado;
}
)
//console.log (offsetF)});     


   


