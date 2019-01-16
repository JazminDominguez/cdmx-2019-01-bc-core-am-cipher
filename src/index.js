// Toma los datos del mensaje y offset de la codificación
// pantallaCode(){
//document.getElementById("pantallaPrincipal").style.display="none";
//document.getElementById("pantallaCodificar").style.display="block";
//}
//const offset = document.GetElementById("offset");
//const mensajeCodificar = document.GetElementById("mensajeCodificar");
//const mensaje = document.GetElementById("mensajeDecoficar");
//let cifrado="";
//

//function  mayus(){
//let mensaje = document.getElementById("mensaje");
//let mayusculas = mensaje.toUpperCase();
//alert (mayusculas);
//}
//  --Eventos del DOM--
//guardar el mensaje desde el input
const mssg = document.getElementById('mensaje1');
// toma el dato obtenido del offset
const offset = document.getElementById('offsetChoice');
//el botón cifrar guarda los valores del mensaje y offset
document.getElementById("codificar").addEventListener("click", () => {
  const mssgValue= mssg.value;
  const offsetF = offset.value;
  const mssgMayusculas= mssgValue.toUpperCase();
  //volver el msj mayuscula

 console.log (offsetF, mssgMayusculas)});    


