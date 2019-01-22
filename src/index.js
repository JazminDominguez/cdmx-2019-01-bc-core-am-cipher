//  --Eventos del DOM-- CIFRAR
//guardar el mensaje desde el input
const mssg = document.getElementById('mensaje1');
// toma el dato obtenido del offset
let offset = document.getElementById('offsetChoice');
//el botón cifrar guarda los valores del mensaje y offset, abre función
const mssg2 = document.getElementById('mensaje2');
let offset2= document.getElementById('offsetChoice2');

document.getElementById("code").addEventListener("click", () => {
  let mssgValue= mssg.value;
  let offsetF = offset.value;
  let mssgMayusculas= mssgValue.toUpperCase()
  const mensajeCifrado= window.cipher.encode(offsetF,mssgMayusculas);
  mssg2.value = mensajeCifrado;
  })


// -- DESCIFRAR

document.getElementById("decode").addEventListener("click", () => {
  let mssgValue2= mssg2.value.toUpperCase();
  let offsetF2 = offset2.value;
  let mssgMayusculas2= mssgValue2.toUpperCase()
  const mensajeDescifrado= window.cipher.decode(offsetF2,mssgMayusculas2);
  mssg.value = mensajeDescifrado;
 })   


