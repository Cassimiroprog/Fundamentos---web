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
    }

    function validaEmail() {
        let txtEmail = document.querySelector('#email')

        if (email.nodeValue.indexOf('@')==-1 || email.nodeValue.indexOf('.')){
            txtEmail.innerHTML = 'E-mail inválido'
            txtEmail.style.color = 'red'
        } else { 
            txtEmail.innerHTML = 'E-mail inválido'    
            txtEmail.style.color = 'green'

        }

