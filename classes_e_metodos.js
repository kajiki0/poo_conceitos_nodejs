/* nodejs nao possui uma sintaxe nativa para definir classes.No entando, é possivel criar estruturas
semelhantes usando funções contrutoras ou classes ES6
*/

//definindo "classe" Pessoa

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}


//adicionando metodo "apresentar"

Pessoa.prototype.apresentar = function(){
    console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);

};

//criando instancia
const pessoa = new Pessoa("Jorge",20);

//chamando o metodo
pessoa.apresentar();