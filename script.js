function encriptar(){
    var texto=document.getElementById("texto").value.toLowerCase();
    var txtEncriptado=texto.replace(/e/igm,"enter");
    var txtEncriptado=txtEncriptado.replace(/i/igm,"imes");
    var txtEncriptado=txtEncriptado.replace(/a/igm,"ai");
    var txtEncriptado=txtEncriptado.replace(/o/igm,"ober");
    var txtEncriptado=txtEncriptado.replace(/u/igm,"ufat");
    document.getElementById("imgder").style.display="none";
    document.getElementById("mensaje").style.display="none";
    document.getElementById("resultado").innerHTML=txtEncriptado;
    document.getElementById("resultado").style.fontSize="30px";
    document.getElementById("resultado").style.marginTop="25%";
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}
function desencriptar(){
    var texto=document.getElementById("texto").value.toLowerCase();
    var txtEncriptado=texto.replace(/enter/igm,"e");
    var txtEncriptado=txtEncriptado.replace(/imes/igm,"i");
    var txtEncriptado=txtEncriptado.replace(/ai/igm,"a");
    var txtEncriptado=txtEncriptado.replace(/ober/igm,"o");
    var txtEncriptado=txtEncriptado.replace(/ufat/igm,"u");
    document.getElementById("imgder").style.display="none";
    document.getElementById("mensaje").style.display="none";
    document.getElementById("resultado").innerHTML=txtEncriptado;
    document.getElementById("resultado").style.fontSize="30px";
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
}

function copiar(){
    var resultado= document.querySelector("#resultado");
    resultado.select();
    document.execCommand("copy");
}