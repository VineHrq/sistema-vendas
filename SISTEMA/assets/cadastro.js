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

  function enviar3() {
    let input = document.getElementById('valor3')
    let inputValue = input.value
    if (inputValue.length >= 1) {
      return input.classList.add('inputTeste')
    } else {
      return input.classList.remove('inputTeste')
    }
  }

  function enviar4() {
    let input = document.getElementById('valor4')
    let inputValue = input.value
    if (inputValue.length >= 1) {
      return input.classList.add('inputTeste')
    } else {
      return input.classList.remove('inputTeste')
    }
  }
  
  /* Validação de e-mail */

function validarEmail() {
    var email = document.querySelector('#valor2')
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

   /* view password */


let icon = document.getElementById("eye")
   
   icon.addEventListener('click', function(){
     let container = document.getElementById("div1")
     let input = document.getElementById("valor3")
     container.classList.toggle('visible');
     if(container.classList.contains('visible')){
         icon.src = 'assets/images/eye-off.svg';
         input.type = 'text';
     } else{
         icon.src = 'assets/images/eye.svg'
         input.type = 'password';
     }
 })


 let icon2 = document.getElementById("eye2")

 icon2.addEventListener('click', function(){
    let container = document.getElementById("div2")
    let input = document.getElementById("valor4")
     container.classList.toggle('visible');
     if(container.classList.contains('visible')){
         icon2.src = 'assets/images/eye-off.svg';
         input.type = 'text';
     } else{
         icon2.src = 'assets/images/eye.svg'
         input.type = 'password';
     }
 })