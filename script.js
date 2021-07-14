let nick = document.getElementById("txt")
let regiao = document.getElementById("box")
let res = document.getElementById("res")

function Verificar(){
    if(nick.value.length == 0){
        window.alert("[ERRO]Digite um nick antes de Verificar!")
    }else {
        res.innerHTML = `Link para o seu OP-GG-${regiao.value}: <mark><a href="https://${regiao.value}.op.gg/summoner/userName=${nick.value}" target="_blank">${nick.value}</a></mark>`
        nick.value = ""
    }
}