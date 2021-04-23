let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '50%'
email.style.width = '50%'


function validaNome() {

let txtNome = document.querySelector('#txtnome')

    if (nome.value.length < 3) {

        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red';

    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }
}


  txt.style.color = 'black'

function validaEmail() {
  
  let txtEmail = document.querySelector('#txtemail')

  if(email.value.indexOf('@') == -1) {  
     txtEmail.innerHTML = 'E-mail inválido'
     txtEmail.style.color = 'red'

  } else {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'

  } 

}























