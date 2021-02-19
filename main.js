//Primeira parte 
//Primeira aula: Introdução ao javascript
/*
var nome = "Beatriz da Silva";
var n1 = 5;
var n2 = 3;
var idade = 19;
var frase = "Eu gosto de chocolate"
alert(nome + " tem " + idade + " anos");
alert(n1 + n1);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("chocolate", "ouvir música"));
*/

//Segunda aula: Array e Dicionário

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);8

var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var lista = {"maçã", "pêra", "laranja"};
lista.push("uva"); Adicionar objeto/item
lista.pop(); tirar objeto

console.log(lista.length); //tamanho da lista
console.log(lista.reverse());//mostra ao contrário
 
console.log(lista);
console.log(lista.toString());
console.log(lista.join( - )); //pode adicionar uma separação colocando um símbolo dentro
*/

//Terceira aula: Condicionais, laços de repetição e Date
/*
var idade = prompt("Qual sua idade?"); //com prompt é possível recolher as informações necessárias
if (idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
};


var count = 5;
while(count <= 5){
    console.log(count);
    alert(count);
    count ++;
};


var count;
for(count = 0; count <= 5; count ++){
alert(count);
};

var d = new Date();
alert(d.getFullYear());
*/

//Segunda Parte
//Primeira aula: Desenvolva páginas web com JavaScript
/*
function soma(n1, n2){
    return n1 + n2;
}

function validaidade(idade){
    if (idade >= 18){
        validar = true
    }
    else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaidade(idade)
console.log(validar);
*/

//Segunda aula: Manioulando elementos da página
function clicou(){
    document.getElementById("agradecer").innerHTML = "<b>Obrigado por clicar!</b>"

    //console.log(document.getElementById("Agradecer"));
    //alert("Obrigado por clicar! Você ganhou um cookie!");
}

function github(){
    window.open("https://github.com/beatrizcabral");//primeira forma de abrir um link só que uma aba diferente
    //Window.location.href = "https://github.com/beatrizcabral"; segunda forma de abrir um link só que na mesma aba
}

function linkedin(){
    window.open("https://www.linkedin.com/in/beatrizsbc/");
}
/*
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
}

//se precisar aplicar em mais de um não precisa criar outro document dnv. Pode fazer isso:
*/

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}