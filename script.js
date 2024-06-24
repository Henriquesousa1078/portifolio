const descricao = document.querySelector("#mario-bross")
const reposnivo = document.querySelector(".responsividade")
const conversor = document.querySelector(".bit-coin")
const mascara = document.querySelector(".mascara-formulario")
const pButton = document.getElementsByClassName(".p-button")

function mostrarDescrição() {
    descricao.style.left= "35%"
    descricao.style.transform= "translateX(-50%)"
    mascara.style.visibility= "visible"
}

function mostrarResponsivo() {
    reposnivo.style.left= "35%"
    reposnivo.style.transform= "translateX(-50%)"
    mascara.style.visibility= "visible"
    // pButton.style.visibility= "hidden"
}
function mostraConversor() {
    conversor.style.left= "35%"
    conversor.style.transform= "translateX(-50%)"
    mascara.style.visibility= "visible"
    // pButton.style.position= "static"
    // pButton.style.visibility= "hidden"
}

function esconderForm(){
    // pButton.style.visibility= "visible"
    mascara.style.visibility= "hidden"
    descricao.style.left= "-700px"
    reposnivo.style.left= "-700px"
    conversor.style.left= "-700px"
    form.style.transform = "translateX(0)"
}
console.log(pButton)

