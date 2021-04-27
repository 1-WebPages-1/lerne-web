/* Menu */

document.querySelector('.menu-btn').addEventListener('click', () => 
{
    document.querySelector('.Rmen').classList.toggle('show')
});


/* Same effect to te search engine */

document.querySelector('.Sea-Con').addEventListener('click', () => 
{
    document.querySelector('.seaN').classList.toggle('seaY')
});

/* Activar ya tengo cuenta */

document.querySelector('.HaAcc').addEventListener('click', () => 
{
    document.querySelector('.SignUp').classList.toggle('SingUpN')
    document.querySelector('.SignIn').classList.toggle('SNA')
});


document.querySelector('.Noaccount').addEventListener('click', () =>
{
  document.querySelector('.SignUp').classList.toggle('SignUpP')
  document.querySelector('.SignIn').classList.toggle('SNA2')
});


/* Cookies */

function compruebaAceptaCookies() {
    if(localStorage.aceptaCookies == 'true'){
      cajacookies.style.display = 'none';
    }
  }

  function aceptarCookies() {
    localStorage.aceptaCookies = 'true';
    cajacookies.style.display = 'none';
  }

  $(document).ready(function () {
    compruebaAceptaCookies();
  });


