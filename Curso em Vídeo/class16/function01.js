// Para saber se um número é par ou ímpar

function parImp(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parImp(12)
console.log(res)