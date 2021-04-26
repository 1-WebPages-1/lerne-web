document.querySelector('.menu-btn').addEventListener('click', () => 
{
    document.querySelector('.Rmen').classList.toggle('show')
});


/* Same effect to te search engine */

document.querySelector('.Sea-Con').addEventListener('click', () => 
{
    document.querySelector('.seaN').classList.toggle('seaY')
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
  