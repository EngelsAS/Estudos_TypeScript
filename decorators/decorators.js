"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log("novo...");
    }
};
Eletrodomestico = __decorate([
    logarClasse //Essa é a forma de atribuir uma classe a um decorator, basta chama-lo dessa forma uma linha acima de onde a classe é criada
], Eletrodomestico);
//o decorator nada mais é doq uma funcao que recebe uma classe como parametro, nesse caso, estamos recebendo o tipo function pois
//toda classe no javascript é interpretada como uma function
function logarClasse(construtor) {
    console.log(construtor);
}
