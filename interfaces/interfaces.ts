//Interface para objetos e classes
interface Humano {
  nome: string; //essa sintaxe indica um atributo obrigatorio em objetos do tipo Humano
  idade?: number; //Essa sintaxe indica um atributo opcional em objetos do tipo Humano
  [prop: string]: any; //Essa sintaxe indica um atributo de nome aleatorio e com o tipo Any em um objeto do tipo Humano
  saudar(sobrenome: string): void; //define que o objeto deve ter uma funcao com o nome saudar que deve seguir essas regras aplicadas aqui
  dizerTchau?(): void; //essa sintaxe define uma funcao opcional que pode ser atribuida ao objeto
}

const humano1: Humano = {
  //declarando uma variavel apenas com o atributo obrigatorio
  nome: "Engels",
  saudar(sobrenome) {
    console.log(`Olá ${this.nome} ${sobrenome}!`);
  },
};

const humano2: Humano = {
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

const humano3: Humano = {
  //declarando com os atributos obrigatorio, opcional e aleatorio
  nome: "Qualquer",
  idade: 25,
  propAleatoria: 12,
  saudar(sobrenome) {
    console.log(`Olá ${this.nome} ${sobrenome}!`);
  },
};

//Usando interface em classes

class Cliente implements Humano {
  nome: string = "";
  ultimaCompra: Date = new Date(); //usar uma interface em uma classe nao nos impede de criar novos atributos e funcoes pra essa classe
  saudar(sobrenome: string) {
    console.log(`Olá ${this.nome} ${sobrenome}!`);
  }
}

//Interface para função
interface FuncaoCalculo {
  (a: number, b: number): number;
}

let elevarPotencia: FuncaoCalculo = (base, expoente) => {
  return base ** expoente;
};

//Herança de interfaces
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealABC implements ABC {
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
