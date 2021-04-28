let NameUp;
let EmailUp;
let University;
let Position;
let ContraseñaUp;

function SaveData() {
    NameUp = document.getElementById('NameUp');
    NameUp.addEventListener('keydown', NameUser);
}

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


