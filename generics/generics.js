"use strict";
//Generics em Funcoes
function echo(objeto) {
    return objeto;
}
//Os tipos declarados so serão atribuido no momento da chamada da funcao, seja por inferencia ou explicitamente
console.log(echo("Engels").length); //Aqui o tipo generic está sendo atribuido por inferencia como uma string
console.log(echo(25)); //Aqui está sendo atribuido explicitamente como um number
console.log(echo({ nome: "Engels", idade: 20 }).idade); //Aqui está sendo atribuido por inferencia como um objeto com os atributos nome e idade
//ao usar um generic no lugar do tipo "any", o typescript reconhece o objeto que está sendo retornado pela funcao, logo, verifica se ele tem atributos
//que podem ser acessados e quais metodos podem ser acessados a partir desse retorno
//Funcao com Array Generic
function retornaArray(args) {
    args.forEach((element) => {
        console.log(element);
    });
}
retornaArray([1, 2, 3]);
retornaArray(["Engels", "Deise"]);
retornaArray([
    { nome: "Engels", idade: 20 },
    { nome: "Deise", idade: 20 },
]);
const chamarEcho = echo;
console.log(chamarEcho("Chamando echo"));
//Classes com generics
//É Possivel definir mais de um generic, nesse caos estamos definindo 2, X e Y
class Operacao {
    constructor(operation1, operation2) {
        this.operation1 = operation1;
        this.operation2 = operation2;
    }
}
//ao extender a classe, especificamos os tipos que irao ser atribuidos pelos generics X e Y
class SomaBinaria extends Operacao {
    executar() {
        return this.operation1 + this.operation2;
    }
}
console.log(new SomaBinaria(2, 2).executar());
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
class Mapa {
    constructor(itens = []) {
        this.itens = itens;
    }
    obter(chave) {
        return this.itens.find((item) => item.chave === chave);
    }
    colocar(objeto) {
        const indexDoItem = this.itens.findIndex((item) => item.chave === objeto.chave);
        if (indexDoItem !== -1) {
            this.itens[indexDoItem].valor = objeto.valor;
        }
        else {
            this.itens.push(objeto);
        }
    }
    imprimir() {
        console.log(this.itens);
    }
    limpar() {
        this.itens = [];
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
