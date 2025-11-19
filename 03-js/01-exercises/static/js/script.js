document.addEventListener("DOMContentLoaded", function () {
    //FizzBuzz
    console.log("FizzBuzz: ");

    for (let num = 1; num <= 100; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
        } else if (num % 3 === 0) {
            console.log("Fizz")
        } else if (num % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(num);
        }

    }

    //Siempre aburrido:
    console.log("Siempre aburrido: ");
    function siempreAburrido(arreglo) {
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] === "ver TV") {
                console.log("¡Entretenido!");
            }
            else {
                console.log("¡Estoy Aburrido!");
            }
        }
    }
    siempreAburrido(["cantar", "correr", "salir", "ver TV"]);

    // Número de corte:
    // Escribe otra función que tome un arreglo y un número de corte. 
    // Esta función debería devolver un nuevo arreglo que contenga solo los
    // números que son más pequeños que este valor de corte.

    console.log("Número de corte");
    let numCut = (arr, cutNum) => {
        let res = [];
        for (let num of arr) {
            if (num < cutNum) res.push(num);
        }
        return res;
    }
    console.log(numCut([1, 2, 8, 4, 5, 7, 6], 4));

    // Peor que el promedio: A veces, quieres saber qué tan por debajo de la media estás.
    // Escribe una función que tome un arreglo de números y te diga cuántos de esos números
    //  son menores que el promedio de todos los números.

    console.log("Peor que el promedio: ");
    let numbersBelowAverage = (arr) => {
        let countNumbersBelowAverage = 0;
        let sum = arr.reduce((acc, current) => {
            return acc + current;
        }, 0);
        let average = sum / arr.length;
        for (let num of arr) {
            if (num < average) {
                countNumbersBelowAverage++
                // console.log(num);
            };
        }
        return countNumbersBelowAverage;

    }

    // resultado esperado: (4) [1, 3, 4, 6]
    console.log(numbersBelowAverage([1, 20, 3, 4, 15, 6, 27]));


    // Conteo de Pares: ¡Te apuesto que nunca te has preguntado cuántos 
    // números pares hay en un arreglo! Esta será la primera vez. 
    // Escribe una función llamada que tome un arreglo de 
    // números como argumento y devuelva la cantidad de elementos pares que contiene.

    console.log("Conteo de Pares: ");
    let evenNumbers = (arr) => {
        let count = 0;
        for (let num of arr) {
            if (num % 2 === 0) count++;
        }
        return count;
    }

    // Ejemplo de uso
    console.log(evenNumbers([1, 2, 3, 4, 5, 6, 10, 11, 13, 14, 16, 18]));


    // Arreglo de Fibonacci: ¡Aquí viene un clásico! Los números de Fibonacci 
    // son como una secuencia mágica que puedes encontrar en muchas partes. Escribe una 
    // función que genere un arreglo de números de Fibonacci. ¡Recuerda decirle cuántos 
    // números quieres en tu secuencia o de lo contrario será un loop infinito! Cada número
    //  en la secuencia es la suma de los dos números anteriores.

    console.log("Arreglo de Fibonacci:");

    let fibonacci = (num) => {
        if (num < 0) return console.error("Número inválido, ingrese un número entero positivo.");
        if (num === 0) return [0];
        if (num === 1) return [0, 1];
        let fibonacciArr = [0, 1];
        for (let i = 2; i < num; i++) {
            fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
        }

        return fibonacciArr;
    }

    // Ejemplo de uso: fibonacci(30): [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34]

    console.log(fibonacci(10));

});


