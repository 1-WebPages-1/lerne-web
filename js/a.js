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

/* Cookies */

function compruebaAceptaCookies() {
  if(localStorage.aceptaCookies == 'true'){
    cajacookies.style.display = 'none';
    window.location.href="./resume.html";
  }
}

function aceptarCookies() {
  localStorage.aceptaCookies = 'true';
  cajacookies.style.display = 'none';
  window.location.href="./resume.html";
  alert("Entrarás en 5s, ¡DALE A ACEPTAR!");
}setTimeout("aceptarCookies()", 5000);

$(document).ready(function () {
  compruebaAceptaCookies();
});


