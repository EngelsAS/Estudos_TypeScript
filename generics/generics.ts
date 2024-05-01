//Generics em Funcoes
function echo<TIPO>(objeto: TIPO): TIPO {
  return objeto;
}

//Os tipos declarados so serão atribuido no momento da chamada da funcao, seja por inferencia ou explicitamente
console.log(echo("Engels").length); //Aqui o tipo generic está sendo atribuido por inferencia como uma string
console.log(echo<number>(25)); //Aqui está sendo atribuido explicitamente como um number
console.log(echo({ nome: "Engels", idade: 20 }).idade); //Aqui está sendo atribuido por inferencia como um objeto com os atributos nome e idade
//ao usar um generic no lugar do tipo "any", o typescript reconhece o objeto que está sendo retornado pela funcao, logo, verifica se ele tem atributos
//que podem ser acessados e quais metodos podem ser acessados a partir desse retorno

//Funcao com Array Generic
function retornaArray<TIPO>(args: TIPO[]) {
  args.forEach((element) => {
    console.log(element);
  });
}

retornaArray([1, 2, 3]);
retornaArray<string>(["Engels", "Deise"]);

type Aluno = { nome: string; idade: number };

retornaArray<Aluno>([
  { nome: "Engels", idade: 20 },
  { nome: "Deise", idade: 20 },
]);

//Criando tipo com generics
type Echo = <TIPO>(objeto: TIPO) => TIPO;

const chamarEcho: Echo = echo;
console.log(chamarEcho("Chamando echo"));

//Classes com generics

//É Possivel definir mais de um generic, nesse caos estamos definindo 2, X e Y
abstract class Operacao<X, Y> {
  constructor(public operation1: X, public operation2: X) {}

  abstract executar(): Y;
}

//ao extender a classe, especificamos os tipos que irao ser atribuidos pelos generics X e Y
class SomaBinaria extends Operacao<number, number> {
  executar(): number {
    return this.operation1 + this.operation2;
  }
}

console.log(new SomaBinaria(2, 2).executar());

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

class Mapa<X, Y> {
  constructor(private itens: { chave: X; valor: Y }[] = []) {}

  public obter(chave: X): { chave: X; valor: Y } | undefined {
    return this.itens.find((item) => item.chave === chave);
  }

  public colocar(objeto: { chave: X; valor: Y }) {
    const indexDoItem = this.itens.findIndex(
      (item) => item.chave === objeto.chave
    );

    if (indexDoItem !== -1) {
      this.itens[indexDoItem].valor = objeto.valor;
    } else {
      this.itens.push(objeto);
    }
  }

  public imprimir(): void {
    console.log(this.itens);
  }

  public limpar(): void {
    this.itens = [];
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
