//nao oferece herança de forma tradicional, mas é possivel simular usando prototipos e delegação de metodos

//delegação: se o objeto A nao implementa uma determinada mensagem ele delega(repassa) a mensagem para o objeto B.
//se o objeto B implementa aquela mensagem entao ele a executa com os dados de A, senao ele a delega para os seguintes objetos

//- a delegação se difere da herança pois deixa certos aspectos para outra classe(delegada) realizar o que a classe(delegante) precisa
//- na herança temos apenas uma instancia do objeto, pois os outros objetos herdam tudo da classe pai 

//já o polimorfismo é alcançado por meio da capacidade de objetos js responderem a metodos de maneiras diferentes

//prototipos(prototypes) são utilizados em js para fornecer "herança" de metodos e propriedades entre objetos


//classe Animal
function Animal(nome,tipo){
    this.nome = nome;
    this.tipo = tipo;
    console.log(`Nome do animal: ${this.nome}`);
    console.log(`Tipo: ${this.tipo}`)
}   

//metodo generico para emitir som
Animal.prototype.emitirSom = function(){
    console.log("som genérico");
};

//"classe" Cachorro que "herda" de Animal
function Cachorro(nome,tipo){
    Animal.call(this,nome,tipo);


}

//"herança" de metodos

// aqui estamos fazendo o cachorro herdar o metodo de Animal com uma instancia de classe
Cachorro.prototype = Object.create(Animal.prototype);
//retornando a referencia para o objeto Cachorro que cria a instancia do prototipo
Cachorro.prototype.constructor = Cachorro;
//sobrescrevendo emitirSom para o Cachorro
Cachorro.prototype.emitirSom = function(){
    console.log("Som emitido: au au");
};

//instancia cachorroo
const cachorro = new Cachorro("Max","Cachorro");
//chamando o metodo 
cachorro.emitirSom();




