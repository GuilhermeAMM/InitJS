alert('COMUNICADO ALERTA JAVA SCRIPT');
document.getElementById('texto').innerHTML="Meu Primeiro Texto JS";
console.log("Oi isso é um alerto de console");

function minhafuncao(){
let a,b,c;
a=5;
b=10;
c=15;    
document.write(10+10);
}

// let  -   A mais utilizada, não pode mudar sua declaração no bloco atual, mas se estiver em um bloco de código pode, como um fun  ção.
// var -    A menos utilizada, uma variavel global que pode ser mudada a qualquer hora.
// const -  Uma variavel que não pode ser alterada em nenhum momento.

function soma (valor1, valor2){
    return valor1 + valor2;
}

document.getElementById



//Ai criar um const com {} é possível criar um obejto, e ao criar uma função dentro do objeto ela é chamada de metodo.

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function () {alert('Biiiiiiiii')},
    completo: function (){
        return "A marca é " + this.marca + " e o modelo é: " + this.modelo
    }
};

console.log(carro);
console.log(carro.completo());

function eventoClick(){
    alert('Acionou um evento de click');
}

function eventodbClick(){
    alert('Acionou um evento de click duplo');
}

const pessoa = ["Guilherme", "Ygor", 30];  // Array


console.log(pessoa)