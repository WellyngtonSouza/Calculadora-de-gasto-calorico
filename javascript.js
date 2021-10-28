












let inputidade = document.getElementsByTagName("input")[0]
let inputpeso = document.getElementsByTagName("input")[1]
let inputaltura = document.getElementsByTagName("input")[2]






function caucular() {

    let selected = document.getElementById("valor").value
    let textarea = document.getElementsByTagName("textarea")[0]
    let peso = inputpeso.value
    let altura = inputaltura.value
    let idade = inputidade.value

    let valortotal

    if (selected === "Homem") {

         valortotal = (66 + (13.8 * peso) + (5.0 * altura) - (6.8 * idade))

    }
    if (selected === "Mulher") {
         valortotal = (655 + (9.6 * peso) + (1.9 * altura) - (4.7 * idade))
    }
    if(valortotal === 66 ){
        valortotal = 0
    }
    if(valortotal === 655){
        valortotal = 0
    }
    textarea.innerHTML = "voce consumiu " + valortotal.toFixed(0) + " calorias"
}

function mudar(){
    let selected = document.getElementById("valor").value
    let imagem1 = document.getElementsByTagName("img")[0]
    let imagem2 = document.getElementsByTagName("img")[1]

    if(selected === "Homem"){
        imagem1.style.backgroundColor = "blue"
        imagem2.style.backgroundColor = "white"
    }
   
    if(selected === "Mulher"){
        imagem2.style.backgroundColor = "blue"
        imagem1.style.backgroundColor = "white"
    }
     
}

function mudar(){
    let selected = document.getElementById("valor").value
    let imagem1 = document.getElementsByTagName("img")[0]
    let imagem2 = document.getElementsByTagName("img")[1]

    if(selected === "Homem"){
        imagem1.style.backgroundColor = "blue"
        imagem2.style.backgroundColor = "white"
    }
   
    if(selected === "Mulher"){
        imagem2.style.backgroundColor = "blue"
        imagem1.style.backgroundColor = "white"
    }
}

    function iniciar(){
    let imagem1 = document.getElementsByTagName("img")[0]
    imagem1.style.backgroundColor = "blue"

}

