//string
let nome: string = "Engels";
console.log(nome);
// nome = 23

//numbers
let number: number = 27;
// number = "Engels"
number = 27.5;
console.log(number);

//tipo any;
let teste: any = "Nome"; //o tipo "any" indica que essa variavel pode ter qualquer tipo de dado
teste = 20;
console.log(typeof teste);
teste = "Engels";
console.log(typeof teste);

//array
let hobbies: string[] = ["Assistir", "Jogar"]; //pra declararmos um array precisamo declarar tambem o tipo de dados
console.log(hobbies);
//que estarão dentro desse array

//tuplas: servem pra explicitar os tipos e a ordem dos dados em um array
let endereco: [string, number, string] = ["Av Principal", 52, ""];
console.log(endereco);
endereco = ["Rua Exemplo", 30, "Bloco B"];
console.log(endereco);

//enums
enum Cor {
  Vermelho, //0
  Verde, //1
  Azul, //2
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

//funcoes
function retornaMeuNome(): string {
  return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
  console.log("oi");
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(2, 4));

//variavel do tipo funcao
let calculo: (x: number, y: number) => number;
calculo = multiplicar;
console.log(calculo(2, 5));

let calculo2: (x: number, y: number) => number = (a, b) => {
  return a * b;
};

//Objetos
let pessoa: { nome: string; idade: number } = {
  nome: "Engels",
  idade: 20,
};

pessoa = {
  idade: 18,
  nome: "André",
};

console.log(pessoa);
//Em objetos a ordem dos atributos nao importa, apenas o nome do atributo e seu respectivo tipo de dado

//Criando um Alias: tipo personalizado para reuso
type Funcionario = {
  // Para criar um Alias iremos declarar um type e o nome do nosso Alias
  supervisores: string[];
  baterPonto: (hora: number) => string;
};

let funcionario: Funcionario = {
  supervisores: ["Engels", "Danilo", "Carlos"],
  baterPonto(hora: number): string {
    if (hora <= 8) {
      return "Ponto Normal";
    } else {
      return "Fora do horario";
    }
  },
};

let funcionario2: Funcionario = {
  supervisores: ["Daniel", "Kauã", "Gabriel"],
  baterPonto(hora: number): string {
    if (hora <= 8) {
      return "Ponto Normal";
    } else {
      return "Fora do horario";
    }
  },
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario2.baterPonto(9));

//Union Types
let nota: number | string = 10;
console.log(nota, typeof nota);
nota = "10";
console.log(nota, typeof nota);

//tipo never
//Esse tipo serve pra especificar que uma funcao irá retornar uma falha ou que entrará em um loop infinito e nunca retornará

function falha(msg: string): never {
  throw new Error(msg);
}

let produto = {
  nome: "Detergente",
  preco: 6,
  validarProduto(): void {
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
let altura: null | number = 170;
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

//Desafio converter JS em TS
type ContaBancaria = { saldo: number; depositar: (valor: number) => void };
type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let contaBancaria: ContaBancaria = {
  saldo: 800,
  depositar(valor) {
    this.saldo += valor;
  },
};

let correntista: Correntista = {
  nome: "Ana",
  contaBancaria: contaBancaria,
  contatos: ["83998989898", "83996969696"],
};

correntista.contaBancaria.depositar(2500);
console.log(correntista);
