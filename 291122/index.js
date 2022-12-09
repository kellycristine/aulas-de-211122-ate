// estrutura condicional simples
//condicional = se
//condicao = chover
let chover = true //verdadeiro ira mostrar a msg ou false - falso. e neste caso nao vai mostrar nada 
//if = se --- else = senao
if(chover) {
    // acao a ser executada = entao nao vou ao parque
    document.write('<h3>Nao vou ao parque</h3>')
} else {
    document.write('<h3>Vou ao parque</h3>')
}

document.write('<h2>Texto que vai aparecer independente da condição</h2>')


//estrutura condicional composto
//let idade = 4;  exemplo - menor que 12 true = criança
let idade = 15; // maior que 12 vai verificar na proxima , é menor que 18 = adolecente

if(idade< 12){
    document.write(`<h2>Você é uma criança</h2>`)
} else if(idade < 18) {
    document.write(`<h2>Você é um adolecente</h2>`)
}else if(idade < 60) {
    document.write(`<h2>Você é um adulto</h2>`)
}else {
    document.write(`<h2>Você é um idoso</h2>`)
}


//mesmo exemplo do de cima de outra maneira
if(idade < 12){
    document.write(`<h2>Você é uma criaança</h2>`)
} else {
    if(idade < 18){
        document.write(`<h2>Você é um adolecente</h2>`)
    } else {
        if(idade < 60) {
            document.write(`<h2>Você é um adulto</h2>`)
        } else {
            document.write(`<h2>Você é um idoso</h2>`)
        }
    }
} 



//operadores logicos 

//AND ou &&  ---> e 

let tenhoDinehiro = false
let temIngresso = true

if(tenhoDinehiro && temIngresso) {
    document.write('<h2>Vou ao cinema</h2>')
} else {
    document.write('<h2>Nao posso ir ao cinema</h2>')
}

//exemplo slide intervalo de 10,25

let numero = 10
// nuemro precisa ser maior ou igual a 10
// numero menor ou igual a 25

if(numero >= 10 && <= 25) {
    document.write('<h2>O numero está no intervalo entre 10 e 25</h2>')
} else {
    document.write('<h2>O numero não está no intervalo entre 10 e 25</h2>')
}

//outro exmplo com o mesmo contexto

if(x >= 10){
    if(x <= 25){
        console.log("esta no intervalo")
    }
}

if(x >= 10 && x <=25){
    console.log("esta no intervalo")

}

////////////////

//operador OR ||
let eIdoso = false;
let eGestante = false;

if(eIdoso || eGestante) {
    document.write('<h2>Voce poe passar na frente da fila</h2>')
}

//outro exemplo
//verificar se o valor armazenado em uma certa vriavel x esta fora do intervalo (10,25)
if (x < 10) {
    console.log("Fora do intervalo")
} else if(x > 25) {
    console.log("Fora do intervalo")
} else {
    console.log("Dentro do intervalo")
}

//forma de fazer com o OR ||
if(x < 10 || x > 25) {
    console.log("Fora do intervalo")
} else {
    console.log("Dentro do intervalo")
}

// operador not ! = negação ---> inverte o valor -  se for false ele transforma em true/ se for true ele fica false

document.write(!true) = false
document.write(!false) = true

if(!)
