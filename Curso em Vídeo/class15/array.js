let num = [5, 8, 2, 9, 3]
num.push(7)

num.sort()

console.log(`Nosso vetor é o ${num}.`)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}.`)

console.log(`O quinto valor do vetor é ${num[5]}.`)

console.log(`Os elementos organizados são ${num.sort()}.`)

for (let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
}
