window.cipher = {
 
encode: (offsetF, mssgMayusculas) => {
    offsetF = parseInt(offsetF)

    let resultado = "";
      for (let i=0; i < mssgMayusculas.length; i++){ 
      let ascii   = mssgMayusculas[i].charCodeAt();
      let mssgAscii = (ascii-65+ offsetF)%26+65;
      let mssgCompleto = String.fromCharCode(mssgAscii);
      resultado += mssgCompleto
    }
    return resultado
  },
decode: () => {},
};