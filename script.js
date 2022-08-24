const sectionEncriptado = document.getElementById("divOut")

const elemento = `<div  id="no-message">
<textarea name="textoEncriptado" id="textoEncriptado" cols="18" rows="8" disabled></textarea>
</div>
<button class="btnClaro" onclick="copiarTexto()">Copiar</button>`

function ocultar() {
    document.getElementById("no-message").style.display='none';
}

document.getElementById("botonEncriptar").addEventListener("click", () => {
    let texto = document.getElementById("entrada").value
    if (texto !== "") {
        let textoEncriptado=[]
        letras = texto.split("")
        letras.forEach(element => {
            letraEncriptada= encriptar(element)
            textoEncriptado.push(letraEncriptada)
        });
        textoEncriptado = textoEncriptado.join("")
        let cuadroTextoEncriptado = document.getElementById("textoEncriptado")
        if (!cuadroTextoEncriptado){
            sectionEncriptado.insertAdjacentHTML('beforeend',elemento)
        }
        cuadroTextoEncriptado = document.getElementById("textoEncriptado")
        cuadroTextoEncriptado.value = textoEncriptado
        ocultar()
        return false            
    }
    alert("No se ha ingresado ningún texto")
})

document.getElementById("botonDesencriptar").addEventListener("click", () => {
    let texto = document.getElementById("entrada").value
    if (texto !== "") {
        let textoEncriptado=[]
        letras = texto.split(" ")
        letras.forEach(element => {
            letraEncriptada= desencriptar(element)
            textoEncriptado.push(letraEncriptada)
        });
        textoEncriptado = textoEncriptado.join(" ")
        let cuadroTextoEncriptado = document.getElementById("textoEncriptado")
        if (!cuadroTextoEncriptado){
            sectionEncriptado.insertAdjacentHTML('beforeend',elemento)
        }
        cuadroTextoEncriptado = document.getElementById("textoEncriptado")
        cuadroTextoEncriptado.value = textoEncriptado
        ocultar()
        return false     
    }
    alert("No se ha ingresado ningún texto")


})

function encriptar (texto) {
    
    textoEncriptado = texto.replace(/e/, 'enter')
                            .replace(/i/, 'imes')
                            .replace(/a/, 'ai')
                            .replace(/o/, 'ober')
                            .replace(/u/, 'ufat')

    return textoEncriptado
}
function desencriptar(texto) {
    textoDescifrado = texto.replace('enter', 'e')
                            .replace('imes', 'i')
                            .replace('ai', 'a')
                            .replace('ober', 'o')
                            .replace('ufat', 'u')

    return textoDescifrado
}

function copiarTexto () {
    const textAreaEncriptado = document.getElementById("textoEncriptado")
    navigator.clipboard.writeText(textAreaEncriptado.value)
}