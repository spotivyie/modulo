const form = document.getElementById('form-deposito');

function validaCampo (campoB, campoA) {
    if (validaCampo === campoB>campoA){
        return false;
    } else{
        return true;
}}

form.addEventListener('submit', function(e) {
    let formEValido = true;
    e.preventDefault();

    var campoA = parseInt(document.getElementById('campo-a').value);
    var campoB = parseInt(document.getElementById('campo-b').value);
    const mensagemSucesso = `O campo B: ${campoB} é maior que o campo A: ${campoA}`;
    const mensagemErro = `O campo A: ${campoA} é maior que o campo B: ${campoB}`;

    formEValido = validaCampo(campoB>campoA);
    if (!formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        campoA = '';
        campoB = '';
    } else{
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }

    campoB.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaCampo(e.target.value);
    if (!formEValido){
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else{
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})
});
