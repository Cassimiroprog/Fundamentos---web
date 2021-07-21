/*
por Tag: getElementByTagName()
lembrar que faz diferença as letras maiusculas (case sensitive)
acessar o document por classe:getElementsByClassName 
por nome: getElementsByName 
por ID: getElementById
por seletor será o mais usado pois nele consigo acessar tanto por nome, id e tag: querySelector() (ultima atualização)
Opção -let nome = window.document.getElementsByClassNameById('nome')*/ 

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') 
let assunto = document.querySelector('#assunto') 
let nomeOk = false
let emailOK = false
let assuntoOk = false 
let mapa = document.querySelector('#mapa')

nome.style.width = '100%' 
email.style.width = '100%' 

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.nodeValue.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

    function validaEmail() {
        let txtEmail = document.querySelector('#email')

        if (email.nodeValue.indexOf('@')==-1 || email.nodeValue.indexOf('.')){
            txtEmail.innerHTML = 'E-mail inválido'
            txtEmail.style.color = 'red'
        } else { 
            txtEmail.innerHTML = 'E-mail inválido'    
            txtEmail.style.color = 'green' 
            emailOk = true

        }
    } 

    function validaAssunto() {
        let txtAssunto = document.querySelector('txtAssunto')   

        if (assunto.nodeValue.length >=100) {
            txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
            txtAssunto.style.color = 'red'
        } else {
            txtAssunto.style.display = 'none'
            assuntoOk = true 

    }
function enviar () { 
if (nomeOK == true && emailOK == true && assuntoOk == true) {
    alert ("Formulário enviado com sucesso!")
} else {
    alert ('Preencha o formulario corretamente antes de enviar...')
}
}

function mapaZomm() {
    mapa.style.widht = '800px'
    mapa.style.height = '600px'
} 

function normal() {
    mapa.style.widht = '800px'
    mapa.style.height = '600px'
} 
    } 