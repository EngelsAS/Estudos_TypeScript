@logarClasse //Essa é a forma de atribuir uma classe a um decorator, basta chama-lo dessa forma uma linha acima de onde a classe é criada
class Eletrodomestico {
  constructor() {
    console.log("novo...");
  }
}

//o decorator nada mais é doq uma funcao que recebe uma classe como parametro, nesse caso, estamos recebendo o tipo function pois
//toda classe no javascript é interpretada como uma function
function logarClasse(construtor: Function) {
  console.log(construtor);
}
