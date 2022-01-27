//Encriptador

function encriptador() {
        
    let textoAEncriptar = document.getElementById("inputTexto").value;
    textoAEncriptar = textoAEncriptar.toLowerCase();
    textoAEncriptar = textoAEncriptar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
    if (!textoAEncriptar) {
      alert("Por favor inténtelo de nuevo");
    } else {
      let encriptando = textoAEncriptar.replace(/e/g, "enter");
  
      encriptando = encriptando.replace(/i/g, "imes");
      encriptando = encriptando.replace(/a/g, "ai");
      encriptando = encriptando.replace(/o/g, "ober");
      encriptando = encriptando.replace(/u/g, "ufat");
  
      document.getElementById("resultado").value=encriptando;
      document.getElementById("inputTexto").value="";
      
    }
}  

//Desencriptador

function desencriptador() {
    let textoADesencriptar = document.getElementById("inputTexto").value;
    textoADesencriptar = textoADesencriptar.toLowerCase();
    textoADesencriptar = textoADesencriptar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (!textoADesencriptar) {
        alert("Por favor inténtelo de nuevo");
    }else {
    let desencriptando = textoADesencriptar.replace(/enter/g, "e");
    desencriptando = desencriptando.replace(/imes/g, "i");
    desencriptando = desencriptando.replace(/ai/g, "a");
    desencriptando = desencriptando.replace(/ober/g, "o");
    desencriptando = desencriptando.replace(/ufat/g, "u");

    document.getElementById("resultado").value= desencriptando;
    document.getElementById("inputTexto").value="";
    }
}


//Copiar al Portapapeles

function copiarPortapapeles() {

    var content = document.getElementById("resultado");
    
    content.select();
    document.execCommand('copy');

    alert("El texto ha sido copiado satisfactoriamente");
}
