"use strict";
const humano1 = {
    //declarando uma variavel apenas com o atributo obrigatorio
    nome: "Engels",
    saudar(sobrenome) {
        console.log(`Olá ${this.nome} ${sobrenome}!`);
    },
};
const humano2 = {
    //declarando com o atributo obrigatorio e opcional
    nome: "Deise",
    idade: 20,
    saudar(sobrenome) {
        console.log(`Olá ${this.nome} ${sobrenome}!`);
    },
    dizerTchau() {
        console.log(`Tchauzinho ${this.nome} T-T`);
    },
};
const humano3 = {
    //declarando com os atributos obrigatorio, opcional e aleatorio
    nome: "Qualquer",
    idade: 25,
    propAleatoria: 12,
    saudar(sobrenome) {
        console.log(`Olá ${this.nome} ${sobrenome}!`);
    },
};
//Usando interface em classes
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date(); //usar uma interface em uma classe nao nos impede de criar novos atributos e funcoes pra essa classe
    }
    saudar(sobrenome) {
        console.log(`Olá ${this.nome} ${sobrenome}!`);
    }
}
let elevarPotencia = (base, expoente) => {
    return base ** expoente;
};
class RealABC {
    a() {
        console.log("a");
    }
    b() {
        console.log("b");
    }
    c() {
        console.log("c");
    }
}
