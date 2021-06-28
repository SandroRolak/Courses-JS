let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

console.log(valores)

console.log(`O cumprimento da array é ${valores.length}.`)

for(let pos=0; pos<valores.length; pos++) {
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let test = valores.indexOf(7);

console.log(`O valor 7 está na chave ou posição ${test}.`);

let test1 = valores.indexOf(12);

if (test1==-1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${test1}`)
}

 