"use strict";
//string
let nome = "Engels";
console.log(nome);
// nome = 23
//numbers
let number = 27;
// number = "Engels"
number = 27.5;
console.log(number);
//tipo any;
let teste = "Nome"; //o tipo "any" indica que essa variavel pode ter qualquer tipo de dado
teste = 20;
console.log(typeof teste);
teste = "Engels";
console.log(typeof teste);
//array
let hobbies = ["Assistir", "Jogar"]; //pra declararmos um array precisamo declarar tambem o tipo de dados
console.log(hobbies);
//que estarão dentro desse array
//tuplas: servem pra explicitar os tipos e a ordem dos dados em um array
let endereco = ["Av Principal", 52, ""];
console.log(endereco);
endereco = ["Rua Exemplo", 30, "Bloco B"];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
//funcoes
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 4));
//variavel do tipo funcao
let calculo;
calculo = multiplicar;
console.log(calculo(2, 5));
let calculo2 = (a, b) => {
    return a * b;
};
//Objetos
let pessoa = {
    nome: "Engels",
    idade: 20,
};
pessoa = {
    idade: 18,
    nome: "André",
};
console.log(pessoa);
let funcionario = {
    supervisores: ["Engels", "Danilo", "Carlos"],
    baterPonto(hora) {
        if (hora <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do horario";
        }
    },
};
let funcionario2 = {
    supervisores: ["Daniel", "Kauã", "Gabriel"],
    baterPonto(hora) {
        if (hora <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do horario";
        }
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario2.baterPonto(9));
//Union Types
let nota = 10;
console.log(nota, typeof nota);
nota = "10";
console.log(nota, typeof nota);
//tipo never
//Esse tipo serve pra especificar que uma funcao irá retornar uma falha ou que entrará em um loop infinito e nunca retornará
function falha(msg) {
    throw new Error(msg);
}
let produto = {
    nome: "Detergente",
    preco: 6,
    validarProduto() {
        if (this.nome.trim().length === 0) {
            falha("O produto precisa ter um nome!");
        }
        if (this.preco <= 0) {
            falha("O produto precisa ter um preço!");
        }
    },
};
produto.validarProduto();
//Null em valores opcionais
let altura = 170;
console.log(altura);
altura = null;
console.log(altura);
//declarar uma variavel como null faz com que o typescript reconheça ela como sendo do tipo any
let poderSerNulo = null;
console.log(poderSerNulo);
poderSerNulo = 18;
console.log(poderSerNulo);
poderSerNulo = "String Teste";
console.log(poderSerNulo);
let contaBancaria = {
    saldo: 800,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Ana",
    contaBancaria: contaBancaria,
    contatos: ["83998989898", "83996969696"],
};
correntista.contaBancaria.depositar(2500);
console.log(correntista);
