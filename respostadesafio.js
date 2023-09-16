//01
var numero = Math.random();
//console.log(numero);

function testarParidadePar(valor)
{
    return (valor == 0);
}

function calcularNumeroAleatorio(min, max) {
   let numeroAleatorio = Math.floor(numero * (max-min+1))+min;
   console.log(numeroAleatorio);
   let resto = numeroAleatorio % 2;
   
   console.log("DESAFIO 01 ",(testarParidadePar(resto)) ? "PAR" : "IMPAR");
}

calcularNumeroAleatorio(1,100);

//02

const  numeros = [10,20,30,40];

function maiorNumeroFromArray(vetor)
{
    console.log("Passou aqui", vetor)
    return Math.max(...vetor);
}

console.log("DESAFIO 02 Maior numero de um array ", maiorNumeroFromArray(numeros));

//console.log("Maior numero de um array 2", maiorNumeroFromArray("ROGERIO"));


//03

//Dada uma string, crie uma função que extrai uma substring com base em índices de início e fim fornecidos como argumentos.

let nomeCliente = "RUI, BARBOSA GRANDE, ESCRITOR";

function extrairPedacoTexto(texto = "", inicio, fim)
{
    return texto.substring(inicio, fim);
}

console.log("DESAFIO 03 ",extrairPedacoTexto(nomeCliente, 15,21));

//04

//Dada uma string, crie uma função que encontre a posição da primeira ocorrência de uma substring específica usando indexOf.

function retornarPrimeiraOcorrenciaPedacaoTexto(texto = "", ocorrencia)
{
    return texto.indexOf(ocorrencia);
}

console.log("DESAFIO 04",retornarPrimeiraOcorrenciaPedacaoTexto(nomeCliente, "GRANDE"));

//05

function separarPalavras(texto = "", delimitador)
{
    return texto.split(delimitador);
}

console.log(separarPalavras(nomeCliente,","));

//06 Crie uma função que compare dois valores usando == e === e retorne um objeto indicando se os valores são iguais com cada operador.

function comparadorTipoOperador(valor1, valor2)
{
    return (valor1 === valor2 ? "ESTRITAMENTE" : "IGUAL");
}

console.log(comparadorTipoOperador(10,"10"));

//## 10-Contar Palavras em uma String:

let cadeiaPalavras = "JOSE ALBERTO SILVEIRA DA COSTA FOI CONDERADO EMBAIXADOR EM PORTUGAL";
let listaPalavrasSeparadas = cadeiaPalavras.split(" ");
console.log(listaPalavrasSeparadas);


let cadeiaNumero = "1 2 2 3 4 6 7 8 1 10 233 2331 1 22 3433".split(" ");
console.log(cadeiaNumero)

let novaCadeia = [];

for (let index = 0; index < cadeiaNumero.length; index++) {
    if (novaCadeia.indexOf(cadeiaNumero[index]) == -1)
       novaCadeia.push(cadeiaNumero[index]);
}

console.log("Elementos nao duplicados ",novaCadeia);

novaCadeia = [];

console.log("Apos a limpeza ",novaCadeia);

/*
predicadoImportante = function(valueTexto, indice, lista) 
{
    if (novaCadeia.indexOf(valueTexto) == -1)
    {
        return novaCadeia.push(valueTexto);
    }
}
*/

let nova = cadeiaNumero.filter((valueTexto, indice, lista) => {
    if (novaCadeia.indexOf(valueTexto) == -1)
        return novaCadeia.push(valueTexto);
});

console.log("Nova lista "+nova);
console.log("Nova lista "+novaCadeia);
