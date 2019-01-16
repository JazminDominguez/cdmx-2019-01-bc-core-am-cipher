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
//el botón cifrar guarda los valores del mensaje y offset, abre función
document.getElementById("codificar").addEventListener("click", () => {
  const mssgValue= mssg.value;
  const offsetF = parseInt(offset.value);
  //volver el msj mayuscula
  const mssgMayusculas= mssgValue.toUpperCase();
  
  //const ascii= mssgMayusculas.charCodeAt();

//volver el mensaje a ASCII
//nueva variable para el string vuelto ascii
for (let i=0; i<mssgMayusculas.length; i++){
    let ascii= mssgMayusculas.charCodeAt(i);
    console.log(ascii);
    
    //let formula=(ascii=65+offsetF)%26+65;
    //let resultado= formula
   document.getElementById("mensajeUsuario").innerHTML = 'tu mensaje es ' +  ascii;
}
console.log (offsetF)});     


   


