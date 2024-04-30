//É mais recomendado usar modulos ao inves de namespaces em projetos maiores

//um namespace serve pra que possamos declarar variaveis e funcoes sem nos preocuparmos com interferencias
//de outra variaveis e funcoes globais com o mesmo nome

//A nivel de curiosidade, tambem é possivel aninhar namespaces, nesse caso, os namespaces mais internos precisam ser exportados para
//serem acessados
namespace Areas {
  //essa constante nao existira fora do namespace, a nao ser que ela seja exportada
  const PI = 3.14;

  export function circunferencia(raio: number): number {
    return PI * raio ** 2;
  }

  export function triangulo(base: number, altura: number): number {
    return base * altura;
  }
}

console.log(Areas.circunferencia(10));
console.log(Areas.triangulo(10, 10));
