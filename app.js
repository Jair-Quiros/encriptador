function encriptar() {
    let texto = document.getElementById("txt").value;
    
    let textoCifrado = texto 
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")
    if (texto.length !=0) {
        document.getElementById("reply").value = textoCifrado; 
    }
}

function desencriptar() {
    let texto = document.getElementById("txt").value;
    
    let textoCifrado = texto 
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")
    if (texto.length !=0) {
        document.getElementById("reply").value = textoCifrado; 
    }
}
function copiar() {
    let txtCopiado = document.getElementById("reply").value;
    navigator.clipboard.writeText(txtCopiado)
}