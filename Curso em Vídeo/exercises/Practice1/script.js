function carregar(){

let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
let hora =  9 //data.getHours()

msg.innerHTML = `Agora são ${hora} horas`
if (hora>=0 && hora<12) {
    img.src ='img/Manhã.png'
    document.body.style.background = '#C3A162'
} else if (hora>=12 && hora<=18) {
    img.src='img/Tarde.png'
    document.body.style.background = '#4BA672'
} else {
    img.src='img/Noite.png'
    document.body.style.background = '#1E3A40'
}
}