/*
let aumentar = num => `Hola, este es mi nùmero: ${num}, agéndame.`;

console.log(aumentar(10));
*/
//---------------------------------------------------------------------------
/*
let agendar = numero => `Hola, este es mi nùmero: ${numero}, agéndame.`;

let numero = prompt("Ingresa tu número: ");

document.getElementById("num").innerText = agendar(numero); 
*/


/*
const dividir=(a,b,c,d) => a/b/c+d;
//LLAMAR A LA FUNCION
document.write
(dividir(100,2,4,22));
*/

/*
function restar(n1, n2) {
    console.log(n1 - n2);
}

restar(45, 67);
restar (100, 50);
restar (54, 18)
*/
/*
function sumar(n1, n2) {
    return n1 + n2
}

let resultado = sumar(35, 17);

console.log(`este es el resultado de la suma: ${resultado}`);
*/
/*

let agendar = (numero) => `Hola, este es mi número: ${numero}, agéndame. ` ;

let numero = prompt("Ingresa tu número:  ");

document.getElementById("num").innerText = agendar(numero);
*/
 /*
let multiplicar = (n1,n2) => n1 * n2;
let resultado = multiplicar(40,2);
console.log(resultado) 

console.log(multiplicar(50,3)) 

console.log(multiplicar(6,5)) 

console.log(`este es el resultado de la multiplicacion es: ${resultado}`);
*/

/*function restar(n1,n2) {
    return n1-n2;
}
*/

/*let dividir = (n1,n2) => n1/n2;
let resultado = dividir(10,0);
console.log(`El resultado de la division es: ${resultado}`);*/
/*
function dividir(n1,n2) {
    if (n2== 0){
        return "No se puede divir";
    }
    else {
        return n1/n2;
    }
}
console.log(dividir(10,0));
*/
function multiplicar (a,b) {
    resultado = a*b;
    return resultado;
} 
function restar (a,b) {
    resultado = a-b;
    return resultado;
} 
function dividir (a,b) {
    resultado = a/b;
    return resultado;
} 

console.log(multiplicar(125,5));
console.log(restar(10,5));
console.log(dividir(20,2));
console.log("--------");
console.log(multiplicar(125,5),restar(10,5),dividir(20,2));

let base = 10 
let exponente = 5

let potenciar = (b,e) => b ** e;
console.log(base + " elevado a la " + exponente + " es: " + potenciar(base,exponente));