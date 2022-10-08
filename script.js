var primeiro = document.querySelector(".primeiro");
var segundo = document.querySelector(".segundo");
var terceiro = document.querySelector(".terceiro");
var quarto = document.querySelector(".quarto");
var quinto = document.querySelector(".quinto");
var sexto = document.querySelector(".sexto");
var setimo = document.querySelector(".setimo");
var oitavo = document.querySelector(".oitavo");
var nono = document.querySelector(".nono");

var fundo = document.querySelector(".fundo");
var cima = document.querySelector(".cima");
var meio = document.querySelector(".meio");
var baixo = document.querySelector(".baixo");
var classificacao = document.querySelector(".classificacao");

var arrayX = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrayO = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var cruz = '<div class="cruz1"></div> <div class="cruz2"></div>';

var circulo = '<div class="circulo"></div>';

var vez = 0;
var vitoria = 0;

function primeira() {
  if (vez == 0 && primeiro.id == "vazio") {
    primeiro.innerHTML = cruz;
    vez = 1;
    arrayX.splice(0, 1, "X");
    primeiro.id = "cheio";
  } else if (vez == 1 && primeiro.id == "vazio") {
    primeiro.id = "cheio";
    primeiro.innerHTML = circulo;
    vez = 0;
    arrayO.splice(0, 1, "O");
    primeiro.id = "cheio";
  }
  verificarVitoria();
}
function segunda() {
  if (vez == 0 && segundo.id == "vazio") {
    segundo.id = "cheio";
    segundo.innerHTML = cruz;
    vez = 1;
    arrayX.splice(1, 1, "X");
  } else if (vez == 1 && segundo.id == "vazio") {
    segundo.id = "cheio";
    segundo.innerHTML = circulo;
    vez = 0;
    arrayO.splice(1, 1, "O");
  }
  verificarVitoria();
}
function terceira() {
  if (vez == 0 && terceiro.id == "vazio") {
    terceiro.id = "cheio";
    terceiro.innerHTML = cruz;
    vez = 1;
    arrayX.splice(2, 1, "X");
  } else if (vez == 1 && terceiro.id == "vazio") {
    terceiro.id = "cheio";
    terceiro.innerHTML = circulo;
    vez = 0;
    arrayO.splice(2, 1, "O");
  }
  verificarVitoria();
}
function quarta() {
  if (vez == 0 && quarto.id == "vazio") {
    quarto.id = "cheio";
    quarto.innerHTML = cruz;
    vez = 1;
    arrayX.splice(3, 1, "X");
  } else if (vez == 1 && quarto.id == "vazio") {
    quarto.id = "cheio";
    quarto.innerHTML = circulo;
    vez = 0;
    arrayO.splice(3, 1, "O");
  }
  verificarVitoria();
}
function quinta() {
  if (vez == 0 && quinto.id == "vazio") {
    quinto.id = "cheio";
    quinto.innerHTML = cruz;
    vez = 1;
    arrayX.splice(4, 1, "X");
  } else if (vez == 1 && quinto.id == "vazio") {
    quinto.id = "cheio";
    quinto.innerHTML = circulo;
    vez = 0;
    arrayO.splice(4, 1, "O");
  }
  verificarVitoria();
}
function sexta() {
  if (vez == 0 && sexto.id == "vazio") {
    sexto.id = "cheio";
    sexto.innerHTML = cruz;
    vez = 1;
    arrayX.splice(5, 1, "X");
  } else if (vez == 1 && sexto.id == "vazio") {
    sexto.id = "cheio";
    sexto.innerHTML = circulo;
    vez = 0;
    arrayO.splice(5, 1, "O");
  }
  verificarVitoria();
}
function setima() {
  if (vez == 0 && setimo.id == "vazio") {
    setimo.id = "cheio";
    setimo.innerHTML = cruz;
    vez = 1;
    arrayX.splice(6, 1, "X");
  } else if (vez == 1 && setimo.id == "vazio") {
    setimo.id = "cheio";
    setimo.innerHTML = circulo;
    vez = 0;
    arrayO.splice(6, 1, "O");
  }
  verificarVitoria();
}
function oitava() {
  if (vez == 0 && oitavo.id == "vazio") {
    oitavo.id = "cheio";
    oitavo.innerHTML = cruz;
    vez = 1;
    arrayX.splice(7, 1, "X");
  } else if (vez == 1 && oitavo.id == "vazio") {
    oitavo.id = "cheio";
    oitavo.innerHTML = circulo;
    vez = 0;
    arrayO.splice(7, 1, "O");
  }
  verificarVitoria();
}
function nona() {
  if (vez == 0 && nono.id == "vazio") {
    nono.id = "cheio";
    nono.innerHTML = cruz;
    vez = 1;
    arrayX.splice(8, 1, "X");
  } else if (vez == 1 && nono.id == "vazio") {
    nono.id = "cheio";
    nono.innerHTML = circulo;
    vez = 0;
    arrayO.splice(8, 1, "O");
  }
  verificarVitoria();
}

function verificarVitoria() {
  // Vitoria do X
  if (
    (arrayX[0] == "X" && arrayX[1] == "X" && arrayX[2] == "X") ||
    (arrayX[3] == "X" && arrayX[4] == "X" && arrayX[5] == "X") ||
    (arrayX[6] == "X" && arrayX[7] == "X" && arrayX[8] == "X")
  ) {
    fundo.style.display = "block";
    cima.style.display = "none";
    meio.style.display = "none";
    baixo.style.display = "none";
    classificacao.innerHTML = "O Jogador 1 ganhou!";
    vitoria = 1;
  } else if (
    (arrayX[0] == "X" && arrayX[3] == "X" && arrayX[6] == "X") ||
    (arrayX[1] == "X" && arrayX[4] == "X" && arrayX[7] == "X") ||
    (arrayX[2] == "X" && arrayX[5] == "X" && arrayX[8] == "X")
  ) {
    fundo.style.display = "block";
    cima.style.display = "none";
    meio.style.display = "none";
    baixo.style.display = "none";
    classificacao.innerHTML = "O Jogador 1 ganhou!";
    vitoria = 1;
  } else if (
    (arrayX[0] == "X" && arrayX[4] == "X" && arrayX[8] == "X") ||
    (arrayX[2] == "X" && arrayX[4] == "X" && arrayX[6] == "X")
  ) {
    fundo.style.display = "block";
    cima.style.display = "none";
    meio.style.display = "none";
    baixo.style.display = "none";
    classificacao.innerHTML = "O Jogador 1 ganhou!";
    vitoria = 1;
  }

  // Vitoria do circulo
  if (
    (arrayO[0] == "O" && arrayO[1] == "O" && arrayO[2] == "O") ||
    (arrayO[3] == "O" && arrayO[4] == "O" && arrayO[5] == "O") ||
    (arrayO[6] == "O" && arrayO[7] == "O" && arrayO[8] == "O")
  ) {
    fundo.style.display = "block";
    cima.style.display = "none";
    meio.style.display = "none";
    baixo.style.display = "none";
    classificacao.innerHTML = "O Jogador 2 ganhou!";
    vitoria = 1;
  } else if (
    (arrayO[0] == "O" && arrayO[3] == "O" && arrayO[6] == "O") ||
    (arrayO[1] == "O" && arrayO[4] == "O" && arrayO[7] == "O") ||
    (arrayO[2] == "O" && arrayO[5] == "O" && arrayO[8] == "O")
  ) {
    fundo.style.display = "block";
    cima.style.display = "none";
    meio.style.display = "none";
    baixo.style.display = "none";
    classificacao.innerHTML = "O Jogador 2 ganhou!";
    vitoria = 1;
  } else if (
    (arrayO[0] == "O" && arrayO[4] == "O" && arrayO[8] == "O") ||
    (arrayO[2] == "O" && arrayO[4] == "O" && arrayO[6] == "O")
  ) {
    fundo.style.display = "block";
    cima.style.display = "none";
    meio.style.display = "none";
    baixo.style.display = "none";
    classificacao.innerHTML = "O Jogador 2 ganhou!";
    vitoria = 1;
  }

  // Empate
  if (
    primeiro.id == "cheio" &&
    segundo.id == "cheio" &&
    terceiro.id == "cheio" &&
    quarto.id == "cheio" &&
    quinto.id == "cheio" &&
    sexto.id == "cheio" &&
    setimo.id == "cheio" &&
    oitavo.id == "cheio" &&
    nono.id == "cheio"
  ) {
    if (vitoria == 0) {
      fundo.style.display = "block";
      cima.style.display = "none";
      meio.style.display = "none";
      baixo.style.display = "none";
      classificacao.innerHTML = "Velha!";
    }
  }
}
function recomecar() {
  window.location.reload();
}