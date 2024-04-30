"use strict";
//É mais recomendado usar modulos ao inves de namespaces em projetos maiores
//um namespace serve pra que possamos declarar variaveis e funcoes sem nos preocuparmos com interferencias
//de outra variaveis e funcoes globais com o mesmo nome
//A nivel de curiosidade, tambem é possivel aninhar namespaces, nesse caso, os namespaces mais internos precisam ser exportados para
//serem acessados
var Areas;
(function (Areas) {
    //essa constante nao existira fora do namespace, a nao ser que ela seja exportada
    const PI = 3.14;
    function circunferencia(raio) {
        return PI * raio ** 2;
    }
    Areas.circunferencia = circunferencia;
    function triangulo(base, altura) {
        return base * altura;
    }
    Areas.triangulo = triangulo;
})(Areas || (Areas = {}));
console.log(Areas.circunferencia(10));
console.log(Areas.triangulo(10, 10));
