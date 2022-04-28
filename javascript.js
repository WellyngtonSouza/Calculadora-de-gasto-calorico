let botaoH = document.querySelector("#button-h");
let botaoM = document.querySelector("#button-m");
let calcular = document.querySelector("#calcular");
let inputI = document.querySelector("#input-idade");
let inputP = document.querySelector("#input-peso");
let inputA = document.querySelector("#input-altura");

botaoH.addEventListener("click", ligado_1);
botaoM.addEventListener("click", ligado_2);
calcular.addEventListener("click", calculo);
let on = null;

function ligado_1() {
  on = 1;

  if (on == 1) {
    botaoH.style.backgroundColor = "#d3d3d3";
    botaoM.style.backgroundColor = "white";
  }
  console.log(on);
}
function ligado_2() {
  on = 0;

  if (on == 0) {
    botaoM.style.backgroundColor = "#d3d3d3";

    botaoH.style.backgroundColor = "white";
  }
  console.log(on);
}

let pai = document.querySelector(".son-2-2");
let div = document.createElement("div");
div.setAttribute("id", "caixa-reposta");

function calculo() {
  let valortotal;

  if (on == null ) {
    alert("por favor escolha uma opção");
  }
  else if (inputI.value == "" || inputP.value == "" || inputA.value == "") {
    alert("por favor preencha os dados");
  } else {
    if (on == 1) {
    valortotal = (66 + (13.8 * inputP.value) + (5.0 * inputA.value) - (6.8 * inputI.value));
    console.log("pegando - 1", valortotal);
    }
    if (on == 0) {
        valortotal = (665 + (9.6 * inputP.value) + (1.9 * inputA.value) - (4.7 * inputI.value));
        console.log("pegando - 2", valortotal);
    }

    div.innerHTML = "";
    div.innerHTML = `${valortotal} Kcal`
    pai.appendChild(div);
  }

    
}

//   div.innerHTML = "";

//   pai.appendChild(div);

//   console.log(div);

// valortotal =(66 + (13.8 * inputP.value) + (5.0 * inputA.value) - (6.8 * inputI.value));
//valortotal =  (665 + (9.6 * inputP.value) + (1.9 * inputA.value) - (4.7 * inputI.value));
// else if (inputI.value == "" || inputP.value == "" || inputA.value == "") {
//     console.log("por favor preencha os dados")
