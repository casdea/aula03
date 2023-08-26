let numero = 16;
let raizQuadrada = Math.sqrt(numero);
console.log(raizQuadrada); // Saída: 4

nomeMae = "josefina";

console.log("Tipo da variavel nomemae ",typeof nomeMae);

console.log("Nome Mae ",Number.isNaN(nomeMae));

precoUnitario = "ss10,98";

console.log("Preoc Unitario ",Number.isNaN(precoUnitario));

// Gera um número inteiro entre min (inclusive) e max (inclusive)
function randomInt(min, max) {
    console.log("Numero inicial ",Math.random());

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exemplo: Gera um número inteiro entre 1 e 10
const randomNum = randomInt(1, 10);

console.log("Numoero aleatorio ",randomNum);