let NameUp;
let EmailUp;
let University;
let Position;
let ContraseñaUp;

function SaveData() {
    NameUp = document.getElementById('NameUp');
    NameUp.addEventListener('keydown', NameUser);
}

/* 
<html><head></head><body>
        <div class="NCon">
            <h3>Dejanos Saber tu nombre</h3>
            <input type="text" name="Name" id="UsuarioName"> 
        </div>
        <a id="conf" href="#">Subir</a>
    
</body></html>
 */