let numeros = [1,2,3];
let acumulador=0;

for (value of numeros){
    acumulador += value;
}
console.log(acumulador);
//de maneira mais sofisticada:
console.log(numeros.reduce((addition, value) => addition + value, 0));

console.log(numeros.every((value) => value % 2 == 0));

console.log(numeros.some((value) => value % 2 == 0));