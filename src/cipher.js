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
decode: (offsetF2,mssgMayusculas2) => {
    offsetF2 = parseInt(offsetF2)

    let resultado2 = "";
      for (let j=0; j < mssgMayusculas2.length; j++){ 
      let ascii2   = mssgMayusculas2[j].charCodeAt();
      let mssgAscii2 = (ascii2+65- offsetF2)%26+65;
      let mssgCompleto2 = String.fromCharCode(mssgAscii2);
      resultado2 += mssgCompleto2
    }
    return resultado2
  
}
};