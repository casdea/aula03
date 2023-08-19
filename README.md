
# Fundamentos de JavaScipt

JavaScript é uma linguagem de programação que permite aos desenvolvedores criar interatividade em páginas da web. É uma das três principais tecnologias da web, juntamente com HTML e CSS. Enquanto o HTML é usado para criar a estrutura de uma página da web e o CSS é usado para estilizá-la, o JavaScript é usado para tornar essa página dinâmica e interativa.


## O que o JavaScript faz:

**Controle de Elementos da Página:** JavaScript pode ser usado para controlar elementos HTML, como botões, formulários e imagens. Por exemplo, você pode criar botões que alteram o conteúdo de uma página ou validam informações em um formulário.

**Reagir a Eventos:** JavaScript permite que você responda a eventos do usuário, como cliques de mouse, toques em tela ou pressionamento de teclas. Isso torna as páginas da web mais interativas e responsivas.

**Manipulação de Dados:** Você pode usar JavaScript para armazenar, modificar e exibir dados em tempo real. Isso é útil para criar aplicativos da web que atualizam automaticamente com novas informações.

**Comunicação com Servidores:** JavaScript permite que as páginas da web se comuniquem com servidores para buscar ou enviar dados sem recarregar a página inteira. Isso é fundamental para aplicativos da web modernos.

**Animação e Efeitos:** JavaScript pode ser usado para criar animações suaves e efeitos visuais em páginas da web, tornando a experiência do usuário mais agradável.

## Um pouco de história:

O JavaScript foi originalmente criado por Brendan Eich em 1995, enquanto ele trabalhava na Netscape Communications Corporation. Aqui está uma breve história sobre a origem do JavaScript:

**Contexto da época:**

Na década de 1990, a web estava começando a se popularizar, mas as páginas da web eram estáticas e tinham pouca ou nenhuma interatividade. A Netscape, uma das primeiras empresas a criar um navegador web comercialmente bem-sucedido, percebeu a necessidade de adicionar recursos interativos às páginas da web para tornar a web mais atraente.

**Desenvolvimento do JavaScript:**

Brendan Eich foi contratado pela Netscape para criar uma linguagem de programação que pudesse ser incorporada ao navegador Netscape Navigator. A ideia era permitir que os desenvolvedores web adicionassem scripts às suas páginas para torná-las mais dinâmicas e interativas.

O JavaScript foi desenvolvido em um período muito curto, apenas 10 dias, em maio de 1995. A primeira versão foi chamada de Mocha e, posteriormente, de LiveScript. Finalmente, para capitalizar a crescente popularidade da linguagem Java, a Netscape renomeou-a para JavaScript, embora as duas linguagens não estivessem diretamente relacionadas (o JavaScript é mais parecido com a linguagem de programação Scheme do que com o Java).

**Lançamento e Popularização:**

O JavaScript foi lançado oficialmente com o Netscape Navigator 2.0 em dezembro de 1995. Logo depois, a Microsoft desenvolveu sua própria versão chamada JScript para o Internet Explorer. Isso levou à necessidade de criar um padrão para a linguagem, o que resultou na especificação ECMAScript, que é a base do JavaScript moderno.

**Expansão e Popularidade:**

À medida que a web crescia, o JavaScript se tornava cada vez mais importante. A introdução do AJAX (Asynchronous JavaScript and XML) no início dos anos 2000 permitiu que aplicativos web se comunicassem com servidores em segundo plano sem a necessidade de recarregar a página, impulsionando ainda mais a popularidade do JavaScript. Hoje, o JavaScript é uma das linguagens de programação mais amplamente usadas e é fundamental para o desenvolvimento de aplicativos da web interativos e dinâmicos.

Assim, o JavaScript surgiu como uma resposta à necessidade de tornar as páginas da web mais interativas e dinâmicas, e seu desenvolvimento rápido e evolução ao longo dos anos o tornaram uma parte fundamental da web moderna.

## Por que aprender JavaScript:

Aprender JavaScript é importante para quem deseja se tornar um desenvolvedor web, pois é uma das principais tecnologias usadas na criação de sites e aplicativos da web interativos. É uma linguagem versátil que pode ser usada tanto no front-end (o que os usuários veem) quanto no back-end (a lógica que opera nos servidores). Além disso, JavaScript tem uma grande comunidade de desenvolvedores e uma ampla gama de bibliotecas e frameworks que tornam o desenvolvimento mais eficiente.

Em resumo, JavaScript é uma linguagem de programação fundamental para tornar as páginas da web interativas e dinâmicas, e aprender a usá-la abre muitas oportunidades na área de desenvolvimento web.

## Primeiros conceitos

** Uma pagina web html **

~~~html

<!DOCTYPE html>
<html>
<head>
    <title>Exemplo JavaScript</title>
</head>
<body>
    <button id="meuBotao">Clique em mim</button>
    <script>
        // Aqui vem o código JavaScript
    </script>
</body>
</html>


JavaScript pode ser usado para fazer algo acontecer quando o botão é clicado (por exemplo, exibir uma mensagem).
~~~

**Variáveis e Tipos de Dados**

Existem tres tipos basicos de dados: String, number e boolean

~~~javascript

// Declaração de variáveis
var numero = 42;
var texto = "Olá, mundo!";
var estaChovendo = true;

// Usando variáveis em operações
var soma = numero + 10;
console.log(soma);
~~~

**Estruturas de Controle de Fluxo**

Estruturas de controle: if, else, for e while.

~~~javascript

for (var i = 1; i <= 5; i++) {
    console.log(i);
}

~~~

**Funções**

~~~javascript

function somar(a, b) {
    return a + b;
}

var resultado = somar(5, 3);
console.log(resultado);
~~~

**Projeto: Calculadora Simples versão 1**

A partir da compreensão básica de JavaScript, podemos criar um projeto simples para consolidar esses conceitos. O html abaixo da calculadora irá demonstrar soma, subtração, multiplicação e divisão dois números. Isso envolverá variáveis, funções e estruturas de controle.

~~~html

<!DOCTYPE html>
<html>
<head>
    <title>Calculadora Simples</title>
</head>
<body>
    <h1>Calculadora Simples</h1>
    <input type="number" id="numero1">
    <input type="number" id="numero2">
    <button onclick="somar()">Somar</button>
    <button onclick="subtrair()">Subtrair</button>
    <button onclick="multiplicar()">Multiplicar</button>
    <button onclick="dividir()">Dividir</button>
    <p id="resultado"></p>

    <script>
        // Funções para realizar operações
        function somar() {
            var num1 = parseFloat(document.getElementById("numero1").value);
            var num2 = parseFloat(document.getElementById("numero2").value);
            var resultado = num1 + num2;            
            document.getElementById("resultado").textContent = "Resultado da Soma: " + resultado;
            console.log("A variavel num1 é do tipo ",typeof num1);
        }

        function subtrair() {
            var num1 = parseFloat(document.getElementById("numero1").value);
            var num2 = parseFloat(document.getElementById("numero2").value);
            var resultado = num1 - num2;
            document.getElementById("resultado").textContent = "Resultado subtração: " + resultado;
        }

        function multiplicar() {
            var num1 = parseFloat(document.getElementById("numero1").value);
            var num2 = parseFloat(document.getElementById("numero2").value);
            var resultado = num1 * num2;
            document.getElementById("resultado").textContent = "Resultado Multiplicação: " + resultado;

        }
        function dividir() {
            var num1 = parseFloat(document.getElementById("numero1").value);
            var num2 = parseFloat(document.getElementById("numero2").value);
            var resultado = num1 / num2;
            document.getElementById("resultado").textContent = "Resultado da divisão: " + resultado;

        }
    </script>
</body>

</html>

~~~

**Vamos nos aprofundar ?**

Vamos aprender os conceitos de **var, let e const** com exemplos. Alem disso o conceito de tipagem fraca e inserir tudo isso no programa exemplo.

***Tipagem fraca***

As variáveis não têm tipos fixos. 

Veja o exemplo abaixo onde você pode reatribuir **diferentes** tipos de dados a uma variável em JavaScript.

~~~javascript

var x = 10;       // x é um número
x = "Hello";      // x agora é uma string
x = true;         // x agora é um booleano

~~~

***Variáveis com var, let e const***

var: Escopo de função ou global, permite reatribuição.

let: Escopo de bloco, permite reatribuição.

const: Escopo de bloco, não permite reatribuição (valor constante).

Exemplo:

~~~javascript

var a = 10;
let b = 20;
const c = 30;

a = 5;   // Isso é permitido com var

b = 15;  // Isso é permitido com let

// c = 25;  // Isso gerará um erro, pois c é constante

~~~

**Projeto: Calculadora Simples versão 2**

O projeto da calculadora para usar ***let*** e ***const***, e a ***tipagem fraca*** ao receber valores do usuário.

~~~html

<!DOCTYPE html>
<html>
<head>
    <title>Calculadora Simples</title>
</head>
<body>
    <h1>Calculadora Simples</h1>
    <input type="number" id="numero1">
    <input type="number" id="numero2">
    <button onclick="somar()">Somar</button>
    <button onclick="subtrair()">Subtrair</button>
    <button onclick="multiplicar()">Multiplicar</button>
    <button onclick="dividir()">Dividir</button>
    <p id="resultado"></p>

    <script>
        // Funções para realizar operações
        function somar() {
            const num1 = parseFloat(document.getElementById("numero1").value);
            const num2 = parseFloat(document.getElementById("numero2").value);
            const resultado = num1 + num2;
            document.getElementById("resultado").textContent = "Resultado: " + resultado;
        }

        function subtrair() {
            let num1 = parseFloat(document.getElementById("numero1").value);
            let num2 = parseFloat(document.getElementById("numero2").value);
            const resultado = num1 - num2;
            document.getElementById("resultado").textContent = "Resultado: " + resultado;
        }

        function multiplicar() {
            let num1 = parseFloat(document.getElementById("numero1").value);
            let num2 = parseFloat(document.getElementById("numero2").value);
            const resultado = num1 * num2;
            document.getElementById("resultado").textContent = "Resultado: " + resultado;
        }

        function dividir() {
            let num1 = parseFloat(document.getElementById("numero1").value);
            let num2 = parseFloat(document.getElementById("numero2").value);
            if (num2 !== 0) {
                const resultado = num1 / num2;
                document.getElementById("resultado").textContent = "Resultado: " + resultado;
            } else {
                document.getElementById("resultado").textContent = "Não é possível dividir por zero.";
            }
        }
    </script>
</body>
</html>

~~~

Neste exemplo atualizado, usamos const onde o valor não muda, e let onde os valores podem mudar. Além disso, a tipagem fraca é demonstrada ao converter os valores dos campos de entrada para números (mesmo que inicialmente sejam strings). 

**Ainda não acabou ? Tipos de Dados em JavaScript**

**Number**

O tipo Number representa valores numéricos, inteiros ou de ponto flutuante.

Exemplo: Declarando e usando números em JavaScript.

~~~javascript

let idade = 30;
let preco = 19.99;

~~~

**Math**

O objeto Math fornece funções matemáticas para realizar cálculos complexos.

Exemplo: Usando o objeto Math para calcular a raiz quadrada.

~~~javascript

let numero = 16;
let raizQuadrada = Math.sqrt(numero);
console.log(raizQuadrada); // Saída: 4

~~~

**String**

O tipo String representa sequências de caracteres.

Exemplo: Declarando e manipulando strings.

~~~javascript

let saudacao = "Olá, mundo!";
let comprimento = saudacao.length; // Retorna 12

~~~

**Template String**

Template strings são strings que permitem interpolação de variáveis e quebras de linha.

Exemplo: Usando template strings para criar mensagens formatadas.

~~~javascript

let nome = "Alice";
let mensagem = `Bem-vindo(a), ${nome}!`;
console.log(mensagem); // Saída: Bem-vindo(a), Alice!

~~~

**Boolean**

O tipo Boolean representa valores lógicos verdadeiro (true) ou falso (false).

Exemplo: Usando booleanos em expressões lógicas.

~~~javascript

let temPermissao = true;
let estaLogado = false;
let resultado = temPermissao && estaLogado; // Retorna false

~~~

**Array**

Um array é uma coleção ordenada de valores, que podem ser de diferentes tipos.

Exemplo: Declarando e acessando elementos de um array.

~~~javascript

let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // Saída: maçã

~~~

**Object**

Um objeto é uma coleção de pares chave-valor que permite armazenar e acessar dados de maneira estruturada.

Exemplo: Declarando e acessando propriedades de um objeto.

~~~javascript

let pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
};
console.log(pessoa.nome); // Saída: João

~~~

**Null e Undefined**

null representa a ausência intencional de qualquer valor ou objeto. undefined é usado quando uma variável foi declarada, mas ainda não foi atribuída um valor.

Exemplo: Demonstrando o uso de null e undefined.

~~~javascript

let valorNulo = null;
let valorIndefinido;
console.log(valorNulo);      // Saída: null
console.log(valorIndefinido); // Saída: undefined

~~~

**Projeto: Calculadora Simples versão 3**

Vamos atualizar o projeto da calculadora para incluir alguns desses conceitos. Por exemplo, podemos permitir que o usuário selecione o tipo de operação (adição, subtração, etc.) usando um objeto e exibir o resultado em uma template string. Além disso, podemos usar if e switch para controlar as operações.

~~~html

<!DOCTYPE html>
<html>
<head>
    <title>Calculadora JavaScript</title>
</head>
<body>
    <h1>Calculadora JavaScript</h1>
    <input type="number" id="numero1">
    <input type="number" id="numero2">
    <select id="operacao">
        <option value="soma">Soma</option>
        <option value="subtracao">Subtração</option>
        <option value="multiplicacao">Multiplicação</option>
        <option value="divisao">Divisão</option>
    </select>
    <button onclick="calcular()">Calcular</button>
    <p id="resultado"></p>

    <script>
        function calcular() {
            const num1 = parseFloat(document.getElementById("numero1").value);
            const num2 = parseFloat(document.getElementById("numero2").value);
            const operacao = document.getElementById("operacao").value;
            let resultado;

            switch (operacao) {
                case "soma":
                    resultado = num1 + num2;
                    break;
                case "subtracao":
                    resultado = num1 - num2;
                    break;
                case "multiplicacao":
                    resultado = num1 * num2;
                    break;
                case "divisao":
                    if (num2 !== 0) {
                        resultado = num1 / num2;
                    } else {
                        resultado = "Não é possível dividir por zero.";
                    }
                    break;
                default:
                    resultado = "Operação inválida.";
            }

            document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
        }
    </script>
</body>
</html>

~~~


Neste exemplo atualizado, usamos o objeto switch para determinar qual operação realizar com base na escolha do usuário. O resultado é então exibido usando uma template string. Isso demonstra o uso de objetos, template strings e condicionais em JavaScript. Certifique-se de explicar esses conceitos enquanto guia seus alunos através deste exemplo.

**Projeto: Calculadora Simples versão final**

Podemos incluir arrays no programa da calculadora. Vamos permitir que o usuário insira um conjunto de números em uma string separada por vírgulas e, em seguida, calcular a operação escolhida para todos os números fornecidos. Aqui está a atualização do programa:

~~~html

<!DOCTYPE html>
<html>
<head>
    <title>Calculadora JavaScript</title>
</head>
<body>
    <h1>Calculadora JavaScript</h1>
    <label for="numeros">Insira os números (separados por vírgulas):</label>
    <input type="text" id="numeros">
    <select id="operacao">
        <option value="soma">Soma</option>
        <option value="subtracao">Subtração</option>
        <option value="multiplicacao">Multiplicação</option>
        <option value="divisao">Divisão</option>
    </select>
    <button onclick="calcular()">Calcular</button>
    <p id="resultado"></p>

    <script>
        function calcular() {
            const numerosStr = document.getElementById("numeros").value;
            const numeros = numerosStr.split(",").map(parseFloat);
            const operacao = document.getElementById("operacao").value;
            let resultado;

            switch (operacao) {
                case "soma":
                    resultado = numeros.reduce((acc, num) => acc + num, 0);
                    break;
                case "subtracao":
                    resultado = numeros.reduce((acc, num) => acc - num);
                    break;
                case "multiplicacao":
                    resultado = numeros.reduce((acc, num) => acc * num, 1);
                    break;
                case "divisao":
                    if (numeros.includes(0)) {
                        resultado = "Não é possível dividir por zero.";
                    } else {
                        resultado = numeros.reduce((acc, num) => acc / num);
                    }
                    break;
                default:
                    resultado = "Operação inválida.";
            }

            document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
        }
    </script>
</body>
</html>

~~~


Neste programa atualizado, permitimos que o usuário insira números separados por vírgulas em uma única string. Usamos split(",") para dividi-los em um array de números. Em seguida, aplicamos a operação escolhida a todos os números usando o método reduce().

O método split() funciona para dividir uma string em um array e o método reduce() pode ser usado para aplicar uma operação a todos os elementos de um array.

***O metodo reduce() é uma tema mais avançado. Não se preocupe ainda em entende-lo****
## FAQ

#### Questão 1

Resposta 1

#### Questão 2

Resposta 2


## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack java(o antigo e o novo)  e web (angular até o momento).

você pode acessar meu linkedin no link abaixo

https://www.linkedin.com/in/carlos-andrade-andrade-b3509889/

também tenho um repositório no github onde sempre gosto de compartilhar os cursos que já fiz ou que estou fazendo. Sempre estou revisando conceitos mais simples e me aprofundando em conceitos mais complexos nas mais diversas areas: Eco sistema spring, micro-serviços e web.

Nas horas vagas alem de estudar muito, assisto séries e passeio com o pet do meu filho. Sou avo de pet por enquanto.


## Etiquetas

Adicione etiquetas de algum lugar, como: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Stack utilizada

**Front-end:** Javascript e Html

**Back-end:** Node


## Uso/Exemplos

Estão presentes no texto.


## Aprendizados

Durante a preparação do artigo pude rever conceitos ja aprendidos de javascript que contribuem para meu crescimento profissional. Espero com esse artigo contribuir para mais pessoas terem a oportunidade no mercado de trabalho como o javascript trouxe para mim.
## Referência

https://www.udemy.com/course/curso-web/learn/lecture/8778032#overview



## Apêndice

Utilizei o curso do professor leornado como um guia para criar este 
artigo alem de materiais da internet.

Como apoio para construir o markdown utiizei o site

https://readme.so/pt/editor