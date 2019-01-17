//  --Eventos del DOM-- CIFRAR
//guardar el mensaje desde el input
const mssg = document.getElementById('mensaje1');
// toma el dato obtenido del offset
let offset = document.getElementById('offsetChoice');
//el botón cifrar guarda los valores del mensaje y offset, abre función
document.getElementById("code").addEventListener("click", () => {
  let mssgValue= mssg.value;
  let offsetF = offset.value;
  //volver el msj mayuscula
  let mssgMayusculas= mssgValue.toUpperCase()
  window.cipher.encode(offsetF,mssgMayusculas)})   
// -- DESCIFRAR
const mssg2 = document.getElementById('mensaje2');
let offset2= document.getElementById('offsetChoice2');
document.getElementById("decode").addEventListener("click", () => {
  let mssgValue2= mssg2.value;
  let offsetF2 = offset2.value;
  //volver el msj mayuscula
  let mssgMayusculas2= mssgValue2.toUpperCase()
  window.cipher.encode(offsetF2,mssgMayusculas2)})   



   


