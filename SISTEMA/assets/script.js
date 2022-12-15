function enviar() {
  let input = document.getElementById('valor1')
  let inputValue = input.value
  if (inputValue.length >= 1) {
    return input.classList.add('inputTeste')
  } else {
    return input.classList.remove('inputTeste')
  }
}
function enviar2() {
  let input = document.getElementById('valor2')
  let inputValue = input.value
  if (inputValue.length >= 1) {
    return input.classList.add('inputTeste')
  } else {
    return input.classList.remove('inputTeste')
  }
}

/* Validação de e-mail */

function validarEmail() {
  var email = document.querySelector('#valor1')
  var error = document.querySelector('#error-email')

  if (!email.checkValidity()) {
    error.innerHTML = 'Ops! Você digitou um e-mail inválido. Tente novamente!'
  }
}

function redefinirMsg() {
  var error = document.querySelector('#error-email')
  if (
    error.innerHTML == 'Ops! Você digitou um e-mail inválido. Tente novamente!'
  ) {
    error.innerHTML = ''
  }
}

/* Login com Google */
function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)
  console.log(data)
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      '888903509216-2panvra4rj3ur4mqkjpk8koo1ufgqff3.apps.googleusercontent.com',
    callback: handleCredentialResponse
  })
  google.accounts.id.renderButton(
    document.getElementById('buttonDiv'),
    { theme: 'none', size: 'small', width: '50' } // customization attributes
  )
  google.accounts.id.prompt() // also display the One Tap dialog
}

 /* view password */

 let container = document.getElementById("div")
 let input = document.getElementById("valor2")
 let icon = document.getElementById("eye")

 icon.addEventListener('click', function(){
     container.classList.toggle('visible');
     if(container.classList.contains('visible')){
         icon.src = 'assets/images/eye-off.svg';
         input.type = 'text';
     } else{
         icon.src = 'assets/images/eye.svg'
         input.type = 'password';
     }
 })

 