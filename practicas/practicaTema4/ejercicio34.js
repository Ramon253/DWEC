/*
function fibbonacci(num){
    if (num < 2) return num


}*/
function fibonacciSizeThree(n) {
    const fibStart = [0, 1, 1]
    if (n <= 2)
        return fibStart[n];
    else
        return fibonacciSizeThree(n - 1) + fibonacciSizeThree(n - 2) + fibonacciSizeThree(n - 3);

}

// Ejemplo de uso
console.log(fibonacciSizeThree(6))