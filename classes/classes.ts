//Sintaxe simples para criacao de Classe
class Data {
  //os atributos da classe ja vem publicos por padrão
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(8, 11);
aniversario.ano = 2003;
console.log(aniversario);

const dataPadrao = new Data();
console.log(dataPadrao);

//Essa é outra sintaxe para a criacao de classes, é mais limpa e nos da o mesmo resultado da sintaxe anterior
class Data2 {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversario2 = new Data(8, 11);
aniversario2.ano = 2003;
console.log(aniversario2);

const dataPadrao2 = new Data();
console.log(dataPadrao2);

//-----------------------------------------------------------------------------------------------------------

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  //Por padrao o metodo é public
  toString(): string {
    return `Nome: ${this.nome}\nPreço: ${this.precoComDesconto()}\nDesconto: ${
      this.desconto * 100
    }%`;
  }

  private precoComDesconto(): number {
    return this.preco - this.desconto * this.preco;
  }
}

const produto1 = new Produto("Detergente", 6);
const produto2 = new Produto("Shampoo", 14, 0.1);
console.log("Primeiro produto:");
console.log(produto1.toString());
console.log("Segundo produto:");
console.log(produto2.toString());

//-----------------------------------------------------------------------------------------------------------
class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = novaVelocidade < 0 ? 0 : this.velocidadeMaxima;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro("Ford", "Ka", 185);
console.log(carro1.marca);
Array(50)
  .fill(0)
  .forEach(() => carro1.acelerar());
console.log(carro1.acelerar());

Array(50)
  .fill(0)
  .forEach(() => carro1.frear());
console.log(carro1.frear());

//Herança

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const carro2 = new Ferrari("F40", 325);
console.log(carro2.marca);
console.log(carro2.acelerar());
console.log(carro2.frear());

//Getters e setters
class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor) {
    if (valor > 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa();
//ao Atributir um valor o JS automaticamente chama a funcao Set
pessoa1.idade = 18;
//Ao apenas resgatar um valor, o JS automanticamente chama a funcao Get
console.log(pessoa1.idade);
pessoa1.idade = -5;
console.log(pessoa1.idade);

//---------Membros Estaticos------
//tudo que for static em uma classe, poderá ser acessado sem precisar criarmos um novo objeto a partir da classe
class Matematica {
  static PI: number = 3.14;

  static calcAreaCircunferencia(raio: number): number {
    return this.PI * raio ** 2;
  }
}

console.log(Matematica.calcAreaCircunferencia(4));

//--------Classes e metodos Abstratos------
//Classes abstratas nao podem ser diretamente instanciadas, mas podem ser herdadas por outras classes
//As classes que herdam a classe abstrata sao obrigados a implementar os metodos abstratos herdados

abstract class Calculo {
  protected resultado: number = 0;

  abstract calcular(...valores: number[]): void;

  public getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  calcular(...valores: number[]): void {
    this.resultado = valores.reduce((total, valor) => total + valor);
  }
}

class Multiplica extends Calculo {
  calcular(...valores: number[]): void {
    this.resultado = valores.reduce((total, valor) => total * valor);
  }
}

const calculoSoma = new Soma();
calculoSoma.calcular(10, 4, 3, 12);
console.log("Resultado da soma");
console.log(calculoSoma.getResultado());

const calculoMultiplica = new Multiplica();
calculoMultiplica.calcular(10, 4, 3, 12);
console.log("Resultado da multiplicação");
console.log(calculoMultiplica.getResultado());

//--------Construtor Singleton e Privado--------
//Basicamente uma classe static que pode receber herança, nao preciso me aprofundar agora, caso necessario...
//...basta retornar ao video do curso de TS que fala sobre isso

//--------Atributos somente leitura-------------

class Aviao {
  public readonly modelo: string;

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const aviao1 = new Aviao("TU-114", "PT-ABC");
// os atributos readonly nao podem ser mudados depois de alterados
// aviao1.modelo = "teste" //isso aqui geraria um erro
console.log(aviao1);
