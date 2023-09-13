function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function sum(num1: number, num2: number) {
    return num1 * num2;
}

function isEven(num: number) {
    return num % 2 === 0;
}

function showResult(result: number) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

(() => {
    const num1: string | null = prompt("First Number");
    const num2: string | null = prompt("Second Number");

    let number1: number;
    let number2: number;

    if (typeof(num1) === "string" && typeof(num2) === "string"){
        number1 = parseInt(num1)
        number2 = parseInt(num2)
    }else{
        return ('Não é possível executar com essa entrada')
    }
    
    let result = sum(number1, number2);
    result += multiply(1,2);
    showResult(result);
})();
