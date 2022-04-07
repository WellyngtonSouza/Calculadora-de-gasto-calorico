// eae meus nobres 
let inputidade = document.getElementsByTagName("input")[0]
let inputpeso = document.getElementsByTagName("input")[1]
let inputaltura = document.getElementsByTagName("input")[2]

function iniciar() {
    let imagem1 = document.getElementsByTagName("img")[0]
    imagem1.style.backgroundColor = "blue"
}

function caucular() {

    let selected = document.getElementById("valor").value
    let textarea = document.getElementsByTagName("textarea")[0]
    let peso = inputpeso.value
    let altura = inputaltura.value
    let idade = inputidade.value

    let valortotal

    if (inputidade.value == 0 && inputaltura.value == 0 && inputpeso.value == 0) {
        alert("por favor, preencha os dados")
        textarea.innerHTML = "preencha os dados"
    }

    else {
        if (inputpeso.value == 0) {
            alert("voce precisa preencher a peso")
        }
        if (inputidade.value == 0) {
            alert("voce precisa preencher a idade")
        }
        if (inputaltura.value == 0) {
            alert("voce precisa preencher a altura")
        }
        if (selected === "Homem") {

            valortotal = (66 + (13.8 * peso) + (5.0 * altura) - (6.8 * idade))
        }
        if (selected === "Mulher") {
            valortotal = (655 + (9.6 * peso) + (1.9 * altura) - (4.7 * idade))
        }

        textarea.innerHTML = "você consumiu " + valortotal.toFixed(0) + " calorias"

    }
}
function mudar() {
    let selected = document.getElementById("valor").value
    let imagem1 = document.getElementsByTagName("img")[0]
    let imagem2 = document.getElementsByTagName("img")[1]

    if (selected === "Homem") {
        imagem1.style.backgroundColor = "blue"
        imagem2.style.backgroundColor = "white"
    }

    if (selected === "Mulher") {
        imagem2.style.backgroundColor = "#ff6781"
        imagem1.style.backgroundColor = "white"
    }


}


