alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 10");
  // se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    // Para atribuir mais 1: ++
    // tentativas = tentativas + 1;
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
);
// if (tentativas > 1) {
//   alert(
//     `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
//   );
// } else {
//   alert(
//     `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`
//   );
// }
// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// // }
// let contagem = 1;

// while (contagem < 11) {
//   console.log("Executando a contagem:" + contagem);
//   contagem = contagem + 1;
// }

// let number = 10
// let contagem = 0;

// while (number > 0 ) {
//   console.log("Substraindo a contagem:" - contagem);
//   contagem = contagem - 1;
// }
