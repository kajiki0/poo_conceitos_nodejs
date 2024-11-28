//javascript nao possui modificadores de acesso(public,private ou protected)
//mas é possivel fazer encapsulamento por meio de funções e closures

//definindo "classe"  ContaBancaria
function ContaBancaria(saldoInicial){
    let saldo = saldoInicial;
    this.getSaldo = function(){
        return saldo;
    };
    this.depositar = function(valor){
        saldo+=valor;
    };
    this.sacar = function(valor){
        if(valor<=saldo){
            saldo-=valor;
            return true;
        }
        return false;
    };
}

//criando instancia
const conta = new ContaBancaria(1000);

//acessando saldo
console.log(conta.getSaldo());//1000

//depositando
conta.depositar(500);//1500

//saque
conta.sacar(200);//1500-200 = 1300

//verificando saldo atual
console.log(conta.getSaldo()); //1300

//assim o saldo da conta é encapsulado dentro da função construtora ContaBancaria e
//so pode ser acessado ou modificado por meio de metodos fornecidos


